/**
 * chatbot-init.js - Inicialización y configuración del chatbot
 */

// Agregar al inicio para tener mejor control de errores
window.addEventListener('error', function(event) {
    console.error('ERROR GLOBAL:', event.message, 'en', event.filename, 'línea', event.lineno);
    // Registrar en el panel de depuración si está disponible
    if (window.DebugSystem) {
        window.DebugSystem.log('ERROR GLOBAL: ' + event.message + ' en ' + event.filename + ' línea ' + event.lineno, 'error');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    console.log("Inicializando chatbot modular...");
    
    try {
        // Registrar carga inicial en panel de depuración
        if (window.DebugSystem) {
            window.DebugSystem.log('Iniciando carga de módulos del chatbot', 'module');
        }
        
        // Crear una referencia global que sea más estable
        window._chatbot = window._chatbot || {};
        window._chatbot.debugMode = true; // Activar modo debug por defecto
        
        // Verificar si todos los módulos necesarios están disponibles
        const modulesStatus = {
            data: typeof window.chatbotData !== 'undefined',
            logic: typeof window.ChatbotLogic !== 'undefined',
            ui: typeof window.ChatbotUI !== 'undefined'
        };
        
        console.log("Estado de carga de módulos:", modulesStatus);
        if (window.DebugSystem) {
            window.DebugSystem.log('Estado de carga de módulos: ' + 
                'Data: ' + (modulesStatus.data ? '✅' : '❌') + ' | ' +
                'Logic: ' + (modulesStatus.logic ? '✅' : '❌') + ' | ' +
                'UI: ' + (modulesStatus.ui ? '✅' : '❌'), 
                modulesStatus.data && modulesStatus.logic && modulesStatus.ui ? 'success' : 'warning');
        }
        
        // Verificar elementos críticos del DOM
        const criticalElements = {
            button: !!document.getElementById('chatbot-button'),
            container: !!document.getElementById('chatbot-container'),
            messages: !!document.getElementById('chatbot-messages'),
            input: !!document.getElementById('chatbot-input-field'),
            sendBtn: !!document.getElementById('chatbot-send-btn')
        };
        
        console.log("Elementos críticos del DOM:", criticalElements);
        if (window.DebugSystem) {
            window.DebugSystem.log('Elementos críticos del DOM: ' + 
                'Botón: ' + (criticalElements.button ? '✅' : '❌') + ' | ' +
                'Contenedor: ' + (criticalElements.container ? '✅' : '❌') + ' | ' +
                'Mensajes: ' + (criticalElements.messages ? '✅' : '❌') + ' | ' +
                'Input: ' + (criticalElements.input ? '✅' : '❌') + ' | ' +
                'Enviar: ' + (criticalElements.sendBtn ? '✅' : '❌'), 
                Object.values(criticalElements).every(value => value) ? 'success' : 'warning');
        }
        
        // Definir explícitamente las variables para verificar disponibilidad
        const allModulesAvailable = modulesStatus.data && modulesStatus.logic && modulesStatus.ui;
        const allElementsAvailable = criticalElements.button && criticalElements.container && 
                                    criticalElements.messages && criticalElements.input && 
                                    criticalElements.sendBtn;
        
        // Crear fallback mínimo si falta chatbotData
        if (!window.chatbotData) {
            console.error("CREANDO CHATBOT DATA FALLBACK DE EMERGENCIA");
            if (window.DebugSystem) {
                window.DebugSystem.log('CREANDO CHATBOT DATA FALLBACK DE EMERGENCIA', 'error');
            }
            window.chatbotData = {
                knowledge: [
                    {
                        keywords: ['hola', 'buenas', 'saludos'],
                        responses: ['Hola. Soy una versión simplificada del chatbot.']
                    },
                    {
                        keywords: ['xml', 'que es xml'],
                        responses: ['XML es un lenguaje de marcado utilizado para almacenar y transportar datos.']
                    }
                ],
                fallback: [
                    'Lo siento, no puedo responder a eso en modo de emergencia.',
                    'No entiendo tu pregunta. Estoy funcionando en modo limitado.'
                ],
                suggestions: {
                    initial: ["Hola", "¿Qué es XML?"]
                }
            };
        }
        
        // Inicializar directamente los event listeners críticos - IMPORTANTE
        const chatbotButton = document.getElementById('chatbot-button');
        const chatbotContainer = document.getElementById('chatbot-container');
        const chatbotInput = document.getElementById('chatbot-input-field');
        const chatbotSendBtn = document.getElementById('chatbot-send-btn');
        
        if (chatbotButton && chatbotContainer) {
            chatbotButton.addEventListener('click', function() {
                console.log("Botón de chatbot activado");
                chatbotContainer.style.display = 'flex';
                chatbotButton.style.display = 'none';
                if (chatbotInput) chatbotInput.focus();
            });
        }
        
        // Función simple de envío que no depende de ChatbotUI
        const sendBasicMessage = function() {
            const message = chatbotInput.value.trim();
            if (message) {
                console.log("Enviando mensaje simple:", message);
                
                // Agregar mensaje del usuario
                const chatbotMessages = document.getElementById('chatbot-messages');
                if (chatbotMessages) {
                    const userMsg = document.createElement('div');
                    userMsg.className = 'message user-message';
                    userMsg.textContent = message;
                    chatbotMessages.appendChild(userMsg);
                    
                    // Generar respuesta directamente sin depender de módulos
                    setTimeout(function() {
                        try {
                            let response = "Lo siento, no puedo procesar tu mensaje ahora.";
                            
                            // Intentar usar ChatbotLogic si está disponible
                            if (window.ChatbotLogic && typeof window.ChatbotLogic.generateResponse === 'function') {
                                try {
                                    response = window.ChatbotLogic.generateResponse(message);
                                } catch (logicError) {
                                    console.error("Error en ChatbotLogic.generateResponse:", logicError);
                                    // Usar lógica simplificada como alternativa
                                    response = generateSimpleResponse(message);
                                }
                            } else {
                                // Usar lógica simplificada si ChatbotLogic no está disponible
                                response = generateSimpleResponse(message);
                            }
                            
                            // Agregar respuesta del bot
                            const botMsg = document.createElement('div');
                            botMsg.className = 'message bot-message';
                            botMsg.textContent = response;
                            chatbotMessages.appendChild(botMsg);
                            
                            // Auto-scroll al último mensaje
                            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
                        } catch (e) {
                            console.error("Error al generar respuesta:", e);
                            
                            // Fallback extremo
                            const errorMsg = document.createElement('div');
                            errorMsg.className = 'message bot-message';
                            errorMsg.textContent = "Error al procesar tu consulta. Por favor, recarga la página.";
                            chatbotMessages.appendChild(errorMsg);
                            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
                        }
                    }, 500);
                    
                    // Limpiar campo
                    chatbotInput.value = '';
                }
            }
        };
        
        // Función simplificada para generar respuestas en caso de emergencia
        function generateSimpleResponse(message) {
            if (!window.chatbotData) {
                return "Error: Base de conocimientos no disponible.";
            }
            
            const lowerMsg = message.toLowerCase();
            
            // Buscar en conocimiento
            for (const entry of window.chatbotData.knowledge) {
                for (const keyword of entry.keywords) {
                    if (lowerMsg.includes(keyword)) {
                        // Devolver una respuesta aleatoria
                        const randomIndex = Math.floor(Math.random() * entry.responses.length);
                        return entry.responses[randomIndex];
                    }
                }
            }
            
            // No se encontró coincidencia, usar fallback
            const randomIndex = Math.floor(Math.random() * window.chatbotData.fallback.length);
            return window.chatbotData.fallback[randomIndex];
        }
        
        // Asignar función de envío simple a los eventos
        if (chatbotSendBtn) {
            chatbotSendBtn.addEventListener('click', sendBasicMessage);
        }
        
        if (chatbotInput) {
            chatbotInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    sendBasicMessage();
                }
            });
        }
        
        // Continuar con inicialización normal si todo está disponible
        if (allModulesAvailable && allElementsAvailable) {
            // Inicializar componentes
            if (window.ChatbotUI) {
                if (window.ChatbotUI.init()) {
                    console.log("UI del chatbot inicializada correctamente");
                } else {
                    console.error("Error al inicializar la UI del chatbot");
                }
            } else {
                console.error("Módulo ChatbotUI no encontrado");
            }
            
            if (window.ChatbotLogic) {
                if (window.ChatbotLogic.init()) {
                    console.log("Lógica del chatbot inicializada correctamente");
                } else {
                    console.error("Error al inicializar la lógica del chatbot");
                }
            } else {
                console.error("Módulo ChatbotLogic no encontrado");
            }
            
            // Forzar inicialización de sugerencias después de un tiempo para asegurar que todo esté cargado
            setTimeout(function() {
                console.log("Forzando inicialización de sugerencias...");
                if (window.ChatbotUI && typeof window.ChatbotUI.initSuggestions === 'function') {
                    window.ChatbotUI.initSuggestions();
                }
            }, 1000);
            
            // Conectar eventos para comunicación entre módulos
            document.addEventListener('chatbot-message-sent', function(event) {
                try {
                    console.log("Evento de mensaje recibido:", event.detail);
                    
                    if (!event.detail || !event.detail.message) {
                        console.error("Error: Evento sin mensaje");
                        return;
                    }
                    
                    if (window.ChatbotUI) {
                        // Mostrar mensaje del usuario
                        window.ChatbotUI.addMessage(event.detail.message, 'user');
                        
                        // Mostrar indicador de escritura
                        window.ChatbotUI.showTypingIndicator();
                        
                        // Verificar comando de debug con más robustez
                        const lcMessage = event.detail.message.toLowerCase().trim();
                        if (lcMessage === "debug on") {
                            try {
                                if (!modulesStatus.logic) {
                                    throw new Error("ChatbotLogic no está disponible");
                                }
                                
                                window.ChatbotLogic.debugMode = true;
                                console.log("Modo debug activado");
                                setTimeout(function() {
                                    window.ChatbotUI.removeTypingIndicator();
                                    window.ChatbotUI.addMessage("Modo debug activado. Ahora verás información detallada sobre los errores y el proceso de coincidencia.", 'bot');
                                }, 500);
                            } catch (debugError) {
                                console.error("Error al activar modo debug:", debugError);
                                setTimeout(function() {
                                    window.ChatbotUI.removeTypingIndicator();
                                    window.ChatbotUI.addMessage("Error: No se pudo activar el modo debug (" + debugError.message + ")", 'bot');
                                }, 500);
                            }
                            return;
                        } else if (lcMessage === "debug off") {
                            window.ChatbotLogic.debugMode = false;
                            setTimeout(function() {
                                window.ChatbotUI.removeTypingIndicator();
                                window.ChatbotUI.addMessage("Modo debug desactivado.", 'bot');
                            }, 500);
                            return;
                        } else if (lcMessage === "inspect data") {
                            setTimeout(function() {
                                window.ChatbotUI.removeTypingIndicator();
                                const dataStatus = window.chatbotData ? 
                                    `chatbotData disponible con ${window.chatbotData.knowledge?.length || 0} entradas de conocimiento` : 
                                    "chatbotData NO DISPONIBLE";
                                window.ChatbotUI.addMessage(`Inspección de datos: ${dataStatus}`, 'bot');
                            }, 500);
                            return;
                        }
                        
                        // Simular tiempo de respuesta (reducido para mejor UX)
                        setTimeout(function() {
                            // Eliminar indicador de escritura
                            window.ChatbotUI.removeTypingIndicator();
                            
                            try {
                                // Verificar que ChatbotLogic exista antes de usarlo
                                if (!window.ChatbotLogic) {
                                    throw new Error("ChatbotLogic no está disponible");
                                }
                                
                                // Generar respuesta
                                const response = window.ChatbotLogic.generateResponse(event.detail.message);
                                
                                // Guardar en el historial - AQUÍ ESTÁ EL PROBLEMA
                                // Comprobar que la función existe usando el nombre correcto
                                if (window.ChatbotLogic.saveToHistory) {
                                    try {
                                        window.ChatbotLogic.saveToHistory(event.detail.message, 'user');
                                        window.ChatbotLogic.saveToHistory(response, 'bot');
                                    } catch (historyError) {
                                        console.error("Error al guardar en historial:", historyError);
                                        // Continuar aunque falle el guardado en historial
                                    }
                                }
                                
                                // Mostrar respuesta
                                window.ChatbotUI.addMessage(response, 'bot');
                                
                                // Actualizar sugerencias
                                window.ChatbotUI.updateSuggestions(Math.random() > 0.5);
                            } catch (error) {
                                console.error("Error fatal al generar respuesta:", error);
                                window.ChatbotUI.addMessage(`Error del sistema: ${error.message}. Intenta recargar la página.`, 'bot');
                            }
                        }, Math.random() * 600 + 400); // Tiempo de respuesta aleatorio entre 400ms y 1000ms
                    }
                } catch (error) {
                    console.error("Error general en el manejo de evento chatbot-message-sent:", error);
                }
            });
            
            // Asegurarse de que el botón de envío tenga conectado el evento
            const chatbotSendBtn = document.getElementById('chatbot-send-btn');
            if (chatbotSendBtn) {
                chatbotSendBtn.addEventListener('click', function() {
                    if (window.ChatbotUI) {
                        window.ChatbotUI.sendMessage();
                    }
                });
            }
            
            // Asegurarse de que la tecla Enter funcione en el input
            const chatbotInput = document.getElementById('chatbot-input-field');
            if (chatbotInput) {
                chatbotInput.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter' && window.ChatbotUI) {
                        window.ChatbotUI.sendMessage();
                    }
                });
            }
            
            // Forzar inicialización de las sugerencias
            setTimeout(function() {
                if (window.ChatbotUI && window.ChatbotUI.initSuggestions) {
                    console.log("Forzando inicialización de sugerencias...");
                    window.ChatbotUI.initSuggestions();
                }
            }, 500);
            
            // Conectar eventos para botones de configuración
            const exportChatBtn = document.getElementById('export-chat');
            if (exportChatBtn) {
                exportChatBtn.addEventListener('click', function() {
                    if (window.ChatbotLogic && window.ChatbotLogic.exportChatHistory) {
                        window.ChatbotLogic.exportChatHistory();
                    }
                });
            }
            
            const clearChatBtn = document.getElementById('clear-chat');
            if (clearChatBtn) {
                clearChatBtn.addEventListener('click', function() {
                    if (confirm('¿Estás seguro de que quieres borrar todo el historial del chat?')) {
                        if (window.ChatbotLogic && window.ChatbotLogic.clearChatHistory) {
                            // Limpiar el historial lógico
                            window.ChatbotLogic.clearChatHistory();
                            
                            // Limpiar la interfaz visual (solo dejar el mensaje de bienvenida)
                            const chatbotMessages = document.getElementById('chatbot-messages');
                            if (chatbotMessages) {
                                chatbotMessages.innerHTML = '<div class="message bot-message">¡Hola! Soy el asistente del curso de Lenguajes de Marcas. ¿En qué puedo ayudarte?</div>';
                            }
                            
                            // Mostrar notificación de éxito
                            showNotification('El historial de chat se ha borrado', 'success');
                        }
                    }
                });
            }
            
            // Función para mostrar notificaciones
            function showNotification(message, type = 'info') {
                // Crear div de notificación
                const notification = document.createElement('div');
                notification.className = `notification notification-${type}`;
                
                // Icono según tipo
                let icon = 'info-circle';
                if (type === 'success') icon = 'check-circle';
                if (type === 'warning') icon = 'exclamation-triangle';
                if (type === 'error') icon = 'times-circle';
                
                notification.innerHTML = `<i class="fas fa-${icon}"></i> ${message}`;
                
                // Añadir al body
                document.body.appendChild(notification);
                
                // Mostrar con animación
                setTimeout(() => {
                    notification.classList.add('show');
                }, 10);
                
                // Ocultar después de 3 segundos
                setTimeout(() => {
                    notification.classList.remove('show');
                    setTimeout(() => {
                        document.body.removeChild(notification);
                    }, 300);
                }, 3000);
            }
        } else {
            // Modo de emergencia: mostrar mensaje de error
            const chatbotMessages = document.getElementById('chatbot-messages');
            if (chatbotMessages) {
                chatbotMessages.innerHTML = '<div class="message bot-message">Error en la carga del chatbot. Algunos componentes no están disponibles. Por favor, recarga la página.</div>';
            }
        }
    } catch (error) {
        console.error("ERROR CRÍTICO en la inicialización del chatbot:", error);
        if (window.DebugSystem) {
            window.DebugSystem.log('ERROR CRÍTICO en la inicialización del chatbot: ' + error.message, 'error');
        }
        
        // Intentar mostrar mensaje de error en la interfaz
        try {
            const messages = document.getElementById('chatbot-messages');
            if (messages) {
                messages.innerHTML += `<div class="message bot-message">
                    Error de inicialización: ${error.message}. Por favor, recarga la página.
                </div>`;
            }
        } catch (e) {
            // Si todo falla, último recurso
            console.error("No se pudo mostrar mensaje de error en la interfaz");
        }
    }
    
    // Agregar evento global para manejar resultados de búsqueda
    document.addEventListener('searchResult', function(event) {
        console.log("Evento de resultado de búsqueda recibido:", event.detail);
        if (window.DebugSystem) {
            window.DebugSystem.log('Resultado de búsqueda recibido: ' + 
                JSON.stringify(event.detail), 'info');
        }
        
        // Aquí puedes añadir código para actualizar la interfaz del chatbot
        // con los resultados de la búsqueda si es necesario
    });
});
