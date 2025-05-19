/**
 * chatbot-ui.js - Gestión de la interfaz del chatbot
 */

const ChatbotUI = {
    /**
     * Inicializar la interfaz de usuario
     */
    init: function() {
        console.log("Inicializando UI del chatbot");
        
        // Referencias a elementos del DOM
        this.chatbotButton = document.getElementById('chatbot-button');
        this.chatbotContainer = document.getElementById('chatbot-container');
        this.chatbotToggle = document.getElementById('chatbot-toggle');
        this.chatbotMessages = document.getElementById('chatbot-messages');
        this.chatbotInput = document.getElementById('chatbot-input-field');
        this.chatbotSendBtn = document.getElementById('chatbot-send-btn');
        this.chatbotHeader = document.querySelector('.chatbot-header');
        this.chatbotResize = document.getElementById('chatbot-resize');
        this.suggestionsContainer = document.getElementById('chatbot-suggestions');
        
        // Verificar que los elementos básicos existen
        if (!this.chatbotContainer || !this.chatbotButton) {
            console.error("No se encontraron los elementos necesarios del chatbot");
            return false;
        }
        
        // Inicializar componentes de la UI
        this.initDraggable();
        this.initButtons();
        this.initSuggestions();
        this.loadSettings();
        
        return true;
    },
    
    /**
     * Inicializar la función de arrastrar el chatbot
     */
    initDraggable: function() {
        if (!this.chatbotHeader || !this.chatbotContainer) return;
        
        let isDragging = false;
        let offsetX, offsetY;
        
        // Cuando se pulsa el ratón en el encabezado
        this.chatbotHeader.addEventListener('mousedown', (e) => {
            // Solo iniciar arrastre si no se hizo clic en un botón
            if (e.target.tagName !== 'BUTTON' && !e.target.closest('button')) {
                isDragging = true;
                this.chatbotHeader.style.cursor = 'grabbing';
                this.chatbotContainer.classList.add('chatbot-dragging');
                
                // Calcular el offset relativo al contenedor
                const rect = this.chatbotContainer.getBoundingClientRect();
                offsetX = e.clientX - rect.left;
                offsetY = e.clientY - rect.top;
                
                e.preventDefault();
            }
        });
        
        // Cuando se mueve el ratón
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            // Calcular nueva posición
            const newX = e.clientX - offsetX;
            const newY = e.clientY - offsetY;
            
            // Limitar posición para no salir de la pantalla
            const isLarge = this.chatbotContainer.classList.contains('chatbot-large');
            const width = isLarge ? 450 : 350;
            const height = isLarge ? 550 : 450;
            
            const maxX = window.innerWidth - width;
            const maxY = window.innerHeight - height;
            
            const boundedX = Math.max(0, Math.min(newX, maxX));
            const boundedY = Math.max(0, Math.min(newY, maxY));
            
            // Cambiar a posición absoluta si no lo es ya
            if (this.chatbotContainer.style.position !== 'absolute') {
                const rectBeforeChange = this.chatbotContainer.getBoundingClientRect();
                this.chatbotContainer.style.position = 'absolute';
                this.chatbotContainer.style.bottom = 'auto';
                this.chatbotContainer.style.right = 'auto';
                this.chatbotContainer.style.left = rectBeforeChange.left + 'px';
                this.chatbotContainer.style.top = rectBeforeChange.top + 'px';
            }
            
            // Aplicar nueva posición
            this.chatbotContainer.style.left = boundedX + 'px';
            this.chatbotContainer.style.top = boundedY + 'px';
            
            // Guardar posición
            localStorage.setItem('chatbotPosX', boundedX);
            localStorage.setItem('chatbotPosY', boundedY);
        });
        
        // Cuando se suelta el ratón
        document.addEventListener('mouseup', () => {
            if (!isDragging) return;
            
            isDragging = false;
            this.chatbotHeader.style.cursor = 'grab';
            this.chatbotContainer.classList.remove('chatbot-dragging');
        });
        
        // Configurar cursor al pasar sobre el encabezado
        this.chatbotHeader.addEventListener('mouseover', (e) => {
            if (e.target.tagName !== 'BUTTON' && !e.target.closest('button')) {
                this.chatbotHeader.style.cursor = 'grab';
            }
        });
        
        this.chatbotHeader.addEventListener('mouseout', () => {
            if (!isDragging) {
                this.chatbotHeader.style.cursor = '';
            }
        });
    },
    
    /**
     * Inicializar botones y controles
     */
    initButtons: function() {
        // Botón para abrir el chatbot
        if (this.chatbotButton) {
            this.chatbotButton.addEventListener('click', () => {
                this.chatbotContainer.style.display = 'flex';
                this.chatbotButton.style.display = 'none';
                if (this.chatbotInput) this.chatbotInput.focus();
                localStorage.setItem('chatbotOpen', 'true');
            });
        }
        
        // Botón para cerrar el chatbot
        if (this.chatbotToggle) {
            this.chatbotToggle.addEventListener('click', () => {
                this.chatbotContainer.style.display = 'none';
                this.chatbotButton.style.display = 'flex';
                localStorage.setItem('chatbotOpen', 'false');
            });
        }
        
        // Botón para cambiar tamaño
        if (this.chatbotResize) {
            this.chatbotResize.addEventListener('click', () => {
                this.chatbotContainer.classList.toggle('chatbot-large');
                const isLarge = this.chatbotContainer.classList.contains('chatbot-large');
                localStorage.setItem('chatbotSize', isLarge ? 'large' : 'normal');
                
                // Cambiar icono según el tamaño
                const icon = this.chatbotResize.querySelector('i');
                if (isLarge) {
                    icon.classList.remove('fa-expand-alt');
                    icon.classList.add('fa-compress-alt');
                } else {
                    icon.classList.remove('fa-compress-alt');
                    icon.classList.add('fa-expand-alt');
                }
            });
        }
        
        // CRÍTICO: Campo de entrada y botón de envío
        if (this.chatbotInput && this.chatbotSendBtn) {
            // Función para manejar el envío de mensajes
            const handleSendMessage = () => {
                const message = this.chatbotInput.value.trim();
                if (message) {
                    // Disparar evento personalizado con el mensaje
                    document.dispatchEvent(new CustomEvent('chatbot-message-sent', {
                        detail: { message: message }
                    }));
                    
                    // Limpiar campo de entrada
                    this.chatbotInput.value = '';
                    this.chatbotInput.focus();
                }
            };
            
            // Enviar al hacer clic en el botón
            this.chatbotSendBtn.addEventListener('click', handleSendMessage);
            
            // Enviar al presionar Enter
            this.chatbotInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    handleSendMessage();
                }
            });
        }
        
        // Inicializar panel de configuración
        this.initSettingsPanel();
    },
    
    /**
     * Inicializar panel de configuración
     */
    initSettingsPanel: function() {
        const chatbotSettings = document.getElementById('chatbot-settings');
        if (!chatbotSettings) return;
        
        // Crear panel si no existe
        let settingsPanel = document.getElementById('chatbot-settings-panel');
        if (!settingsPanel) {
            settingsPanel = document.createElement('div');
            settingsPanel.id = 'chatbot-settings-panel';
            settingsPanel.className = 'chatbot-settings-panel';
            
            settingsPanel.innerHTML = `
                <div class="settings-header">
                    <h3>Configuración</h3>
                    <button class="settings-close"><i class="fas fa-times"></i></button>
                </div>
                <div class="settings-content">
                    <div class="settings-section">
                        <h4>Posición del chat</h4>
                        <div class="settings-buttons">
                            <button id="reset-position" class="reset-position-button">
                                <i class="fas fa-sync-alt"></i> Restaurar posición
                            </button>
                        </div>
                    </div>
                    <div class="settings-section">
                        <h4>Tamaño de texto</h4>
                        <div class="settings-buttons">
                            <button id="font-size-small" class="font-button"><i class="fas fa-font"></i> Pequeño</button>
                            <button id="font-size-medium" class="font-button active"><i class="fas fa-font"></i> Medio</button>
                            <button id="font-size-large" class="font-button"><i class="fas fa-font"></i> Grande</button>
                        </div>
                    </div>
                    <div class="settings-section">
                        <h4>Historial</h4>
                        <div class="settings-buttons">
                            <button id="export-chat" class="history-button"><i class="fas fa-download"></i> Exportar chat</button>
                            <button id="clear-chat" class="history-button"><i class="fas fa-trash-alt"></i> Limpiar chat</button>
                        </div>
                    </div>
                </div>
            `;
            
            this.chatbotContainer.appendChild(settingsPanel);
            
            // Botón para cerrar panel
            const closeSettingsBtn = settingsPanel.querySelector('.settings-close');
            closeSettingsBtn.addEventListener('click', () => {
                settingsPanel.style.display = 'none';
            });
            
            // Botón para resetear posición
            const resetPosBtn = document.getElementById('reset-position');
            if (resetPosBtn) {
                resetPosBtn.addEventListener('click', () => {
                    this.resetPosition();
                });
            }
            
            // Botones de tamaño de texto
            this.initFontSizeButtons();
            
            // Botones de historial
            this.initHistoryButtons();
        }
        
        // Mostrar/ocultar panel de configuración
        chatbotSettings.addEventListener('click', () => {
            settingsPanel.style.display = settingsPanel.style.display === 'block' ? 'none' : 'block';
        });
    },
    
    /**
     * Inicializar botones de tamaño de texto
     */
    initFontSizeButtons: function() {
        const fontSmallBtn = document.getElementById('font-size-small');
        const fontMediumBtn = document.getElementById('font-size-medium');
        const fontLargeBtn = document.getElementById('font-size-large');
        
        if (!fontSmallBtn || !fontMediumBtn || !fontLargeBtn || !this.chatbotMessages) return;
        
        const updateFontButtons = (size) => {
            fontSmallBtn.classList.remove('active');
            fontMediumBtn.classList.remove('active');
            fontLargeBtn.classList.remove('active');
            
            if (size === 'small') fontSmallBtn.classList.add('active');
            else if (size === 'large') fontLargeBtn.classList.add('active');
            else fontMediumBtn.classList.add('active');
        };
        
        fontSmallBtn.addEventListener('click', () => {
            this.chatbotMessages.classList.remove('font-medium', 'font-large');
            this.chatbotMessages.classList.add('font-small');
            updateFontButtons('small');
            localStorage.setItem('chatbotFontSize', 'small');
        });
        
        fontMediumBtn.addEventListener('click', () => {
            this.chatbotMessages.classList.remove('font-small', 'font-large');
            this.chatbotMessages.classList.add('font-medium');
            updateFontButtons('medium');
            localStorage.setItem('chatbotFontSize', 'medium');
        });
        
        fontLargeBtn.addEventListener('click', () => {
            this.chatbotMessages.classList.remove('font-small', 'font-medium');
            this.chatbotMessages.classList.add('font-large');
            updateFontButtons('large');
            localStorage.setItem('chatbotFontSize', 'large');
        });
    },
    
    /**
     * Inicializar botones de historial
     */
    initHistoryButtons: function() {
        const exportChatBtn = document.getElementById('export-chat');
        const clearChatBtn = document.getElementById('clear-chat');
        
        if (exportChatBtn) {
            exportChatBtn.addEventListener('click', () => {
                this.exportChatHistory();
            });
        }
        
        if (clearChatBtn) {
            clearChatBtn.addEventListener('click', () => {
                if (confirm('¿Estás seguro de que quieres borrar todo el historial del chat?')) {
                    this.clearChatHistory();
                }
            });
        }
    },
    
    /**
     * Inicializar sugerencias interactivas
     */
    initSuggestions: function() {
        if (!this.suggestionsContainer || !window.chatbotData) return;
        
        // Limpiar contenedor
        this.suggestionsContainer.innerHTML = '';
        
        // Obtener sugerencias iniciales
        const initialSuggestions = window.chatbotData.suggestions.initial || 
            ["Ejemplo de HTML", "Buscar ejercicios", "¿Cuándo termina el curso?"];
        
        // Crear botones de sugerencias
        initialSuggestions.forEach(suggestion => {
            const suggestionBtn = document.createElement('button');
            suggestionBtn.className = 'chatbot-suggestion-btn';
            suggestionBtn.textContent = suggestion;
            suggestionBtn.addEventListener('click', () => {
                if (this.chatbotInput) {
                    this.chatbotInput.value = suggestion;
                    this.sendMessage();
                }
            });
            
            this.suggestionsContainer.appendChild(suggestionBtn);
        });
    },
    
    /**
     * Actualizar sugerencias mostradas
     */
    updateSuggestions: function(useSecondary = false) {
        if (!this.suggestionsContainer || !window.chatbotData) return;
        
        // Limpiar contenedor
        this.suggestionsContainer.innerHTML = '';
        
        // Determinar qué conjunto de sugerencias usar
        const suggestions = useSecondary ? 
            (window.chatbotData.suggestions.secondary || ["Ejemplo de CSS", "¿Qué es XML?", "Ayuda chat"]) :
            (window.chatbotData.suggestions.initial || ["Ejemplo de HTML", "Buscar ejercicios", "¿Cuándo termina el curso?"]);
        
        // Mostrar el contenedor
        this.suggestionsContainer.style.display = 'flex';
        
        // Crear nuevos botones
        suggestions.forEach(suggestion => {
            const suggestionBtn = document.createElement('button');
            suggestionBtn.className = 'chatbot-suggestion-btn';
            suggestionBtn.textContent = suggestion;
            suggestionBtn.addEventListener('click', () => {
                if (this.chatbotInput) {
                    this.chatbotInput.value = suggestion;
                    this.sendMessage();
                }
            });
            
            this.suggestionsContainer.appendChild(suggestionBtn);
        });
    },
    
    /**
     * Cargar configuraciones guardadas
     */
    loadSettings: function() {
        // Estado del chatbot (abierto o cerrado)
        if (localStorage.getItem('chatbotOpen') === 'true') {
            this.chatbotContainer.style.display = 'flex';
            this.chatbotButton.style.display = 'none';
        } else {
            this.chatbotContainer.style.display = 'none';
            this.chatbotButton.style.display = 'flex';
        }
        
        // Tamaño del chatbot
        if (localStorage.getItem('chatbotSize') === 'large' && this.chatbotResize) {
            this.chatbotContainer.classList.add('chatbot-large');
            const icon = this.chatbotResize.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-expand-alt');
                icon.classList.add('fa-compress-alt');
                this.chatbotResize.title = 'Reducir tamaño';
            }
        }
        
        // Tamaño de fuente
        const chatbotFontSize = localStorage.getItem('chatbotFontSize');
        if (chatbotFontSize && this.chatbotMessages) {
            this.chatbotMessages.classList.remove('font-small', 'font-medium', 'font-large');
            this.chatbotMessages.classList.add('font-' + chatbotFontSize);
            
            // Actualizar botones activos
            const activeBtn = document.getElementById('font-size-' + chatbotFontSize);
            if (activeBtn) {
                document.querySelectorAll('.font-button').forEach(btn => btn.classList.remove('active'));
                activeBtn.classList.add('active');
            }
        }
        
        // Posición del chatbot
        const posX = localStorage.getItem('chatbotPosX');
        const posY = localStorage.getItem('chatbotPosY');
        
        if (posX !== null && posY !== null) {
            this.chatbotContainer.style.position = 'absolute';
            this.chatbotContainer.style.bottom = 'auto';
            this.chatbotContainer.style.right = 'auto';
            this.chatbotContainer.style.left = posX + 'px';
            this.chatbotContainer.style.top = posY + 'px';
        }
    },
    
    /**
     * Resetear posición del chatbot
     */
    resetPosition: function() {
        // Eliminar posición guardada
        localStorage.removeItem('chatbotPosX');
        localStorage.removeItem('chatbotPosY');
        
        // Restaurar posición inicial
        this.chatbotContainer.style.position = 'fixed';
        this.chatbotContainer.style.left = 'auto';
        this.chatbotContainer.style.top = 'auto';
        this.chatbotContainer.style.bottom = '90px';
        this.chatbotContainer.style.right = '90px';
        this.chatbotContainer.style.transform = 'none';
        
        // Mostrar confirmación
        this.showNotification('Posición restaurada', 'success');
    },
    
    /**
     * Mostrar indicador de escritura
     */
    showTypingIndicator: function() {
        if (!this.chatbotMessages) return;
        
        const typingDiv = document.createElement('div');
        typingDiv.classList.add('typing-indicator');
        typingDiv.id = 'typing-indicator';
        
        for (let i = 0; i < 3; i++) {
            const span = document.createElement('span');
            typingDiv.appendChild(span);
        }
        
        this.chatbotMessages.appendChild(typingDiv);
        this.chatbotMessages.scrollTop = this.chatbotMessages.scrollHeight;
    },
    
    /**
     * Eliminar indicador de escritura
     */
    removeTypingIndicator: function() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    },
    
    /**
     * Añadir mensaje al chat
     */
    addMessage: function(text, sender) {
        if (!this.chatbotMessages) return;
        
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
        
        // Formatear código si hay bloques de código
        if (sender === 'bot' && text.includes('```')) {
            messageDiv.innerHTML = text;
        } else {
            messageDiv.textContent = text;
        }
        
        this.chatbotMessages.appendChild(messageDiv);
        
        // Auto-scroll al último mensaje
        this.chatbotMessages.scrollTop = this.chatbotMessages.scrollHeight;
    },
    
    /**
     * Reemplazar el último mensaje del bot
     */
    replaceLastBotMessage: function(newText) {
        const botMessages = document.querySelectorAll('.bot-message');
        if (botMessages.length > 0) {
            const lastBotMessage = botMessages[botMessages.length - 1];
            
            // Preservar el formato si contiene saltos de línea
            if (newText.includes('\n')) {
                lastBotMessage.innerHTML = newText.replace(/\n/g, '<br>');
            } else {
                lastBotMessage.textContent = newText;
            }
        }
    },
    
    /**
     * Crea un bloque de código con formato
     */
    createCodeBlock: function(codeSegment) {
        // Extraer el contenido del código y el lenguaje
        const content = codeSegment.substring(3, codeSegment.length - 3);
        const languageMatch = content.match(/^([a-zA-Z]+)/);
        let language = 'plaintext';
        let codeContent = content;
        
        if (languageMatch) {
            language = languageMatch[1];
            codeContent = content.substring(language.length).trim();
        }
        
        // Crear el contenedor del bloque de código
        const codeBlock = document.createElement('div');
        codeBlock.classList.add('code-block');
        
        // Crear la cabecera del bloque con el lenguaje y botón de copia
        const codeHeader = document.createElement('div');
        codeHeader.classList.add('code-header');
        
        const langSpan = document.createElement('span');
        langSpan.classList.add('code-language');
        langSpan.textContent = language;
        
        const copyButton = document.createElement('button');
        copyButton.classList.add('copy-code-btn');
        copyButton.innerHTML = '<i class="fas fa-copy"></i>';
        copyButton.title = 'Copiar código';
        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(codeContent).then(() => {
                // Cambiar el icono temporalmente para indicar éxito
                copyButton.innerHTML = '<i class="fas fa-check"></i>';
                setTimeout(() => {
                    copyButton.innerHTML = '<i class="fas fa-copy"></i>';
                }, 2000);
            });
        });
        
        codeHeader.appendChild(langSpan);
        codeHeader.appendChild(copyButton);
        
        // Crear el contenido del código
        const pre = document.createElement('pre');
        const code = document.createElement('code');
        code.textContent = codeContent;
        pre.appendChild(code);
        
        // Ensamblar el bloque completo
        codeBlock.appendChild(codeHeader);
        codeBlock.appendChild(pre);
        
        return codeBlock;
    },
    
    /**
     * Guarda un mensaje en el historial
     */
    saveChatHistory: function(text, sender) {
        const history = JSON.parse(localStorage.getItem('chatHistory') || '[]');
        history.push({ text, sender, timestamp: new Date().getTime() });
        
        // Limitar el historial a los últimos 50 mensajes
        if (history.length > 50) {
            history.shift(); // Eliminar el mensaje más antiguo
        }
        
        localStorage.setItem('chatHistory', JSON.stringify(history));
    },
    
    /**
     * Carga el historial de chat
     */
    loadChatHistory: function() {
        if (!this.chatbotMessages) return;
        
        const history = JSON.parse(localStorage.getItem('chatHistory') || '[]');
        
        // Limpiar mensajes actuales
        this.chatbotMessages.innerHTML = '';
        
        // Si no hay historial, mostrar mensaje de bienvenida
        if (history.length === 0) {
            const welcomeMsg = document.createElement('div');
            welcomeMsg.classList.add('message', 'bot-message');
            welcomeMsg.textContent = '¡Hola! Soy el asistente del curso de Lenguajes de Marcas. ¿En qué puedo ayudarte?';
            this.chatbotMessages.appendChild(welcomeMsg);
            return;
        }
        
        // Restaurar historial de mensajes
        history.forEach(msg => {
            this.addMessage(msg.text, msg.sender);
        });
    }
};

// Exportar el objeto para uso en otros scripts
window.ChatbotUI = ChatbotUI;
