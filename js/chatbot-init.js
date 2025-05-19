/**
 * chatbot-init.js - Inicialización y configuración del chatbot
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log("Inicializando chatbot modular...");
    
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
    
    // Conectar eventos para comunicación entre módulos
    document.addEventListener('chatbot-message-sent', function(event) {
        if (window.ChatbotLogic && event.detail && event.detail.message) {
            // Mostrar mensaje del usuario
            window.ChatbotUI.addMessage(event.detail.message, 'user');
            
            // Mostrar indicador de escritura
            window.ChatbotUI.showTypingIndicator();
            
            // Simular tiempo de respuesta
            setTimeout(function() {
                // Eliminar indicador de escritura
                window.ChatbotUI.removeTypingIndicator();
                
                // Generar respuesta
                const response = window.ChatbotLogic.generateResponse(event.detail.message);
                
                // Mostrar respuesta
                window.ChatbotUI.addMessage(response, 'bot');
            }, Math.random() * 1000 + 500);
        }
    });
    
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
});
