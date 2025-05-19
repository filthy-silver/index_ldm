/**
 * chatbot-logic.js - Lógica del chatbot para procesar mensajes y generar respuestas
 */

const ChatbotLogic = {
    /**
     * Inicializa la lógica del chatbot
     */
    init: function() {
        console.log("Inicializando lógica del chatbot");
        
        // Verificar que los datos estén disponibles
        if (!window.chatbotData) {
            console.error("Error: No se encontraron los datos del chatbot (chatbot-data.js)");
            return false;
        }
        
        // Inicializar el historial de chat
        this.chatHistory = this.loadChatHistory() || [];
        
        return true;
    },
    
    /**
     * Genera una respuesta basada en el mensaje del usuario
     * @param {string} message - Mensaje del usuario
     * @return {string} Respuesta del chatbot
     */
    generateResponse: function(message) {
        // Convertir a minúsculas para facilitar la búsqueda
        const lowerMessage = message.toLowerCase();
        
        // Comprobar si es una búsqueda
        if (this.isSearchQuery(lowerMessage)) {
            return this.handleSearchQuery(lowerMessage);
        }
        
        // Buscar en la base de conocimientos
        for (const entry of window.chatbotData.knowledge) {
            for (const keyword of entry.keywords) {
                if (lowerMessage.includes(keyword)) {
                    // Manejar acciones especiales (Restaurado)
                    if (entry.action === 'openTurboAsistente') {
                        if (window.ChatbotUI && typeof window.ChatbotUI.showTurboAsistente === 'function') {
                            window.ChatbotUI.showTurboAsistente();
                            // Si la acción es abrir el modal, podemos devolver un mensaje específico o
                            // simplemente dejar que la respuesta asociada (si existe) se muestre.
                            // Por ahora, si hay una respuesta asociada, se mostrará.
                            // Si no, se podría añadir un mensaje como "Abriendo el Turbo Asistente..."
                        } else {
                            console.warn("Función showTurboAsistente no encontrada en ChatbotUI.");
                        }
                    }

                    // Seleccionar respuesta aleatoria de este tema
                    const randomIndex = Math.floor(Math.random() * entry.responses.length);
                    return entry.responses[randomIndex];
                }
            }
        }
        
        // Si no hay coincidencias, usar respuesta predeterminada
        const randomIndex = Math.floor(Math.random() * window.chatbotData.fallback.length);
        return window.chatbotData.fallback[randomIndex];
    },
    
    /**
     * Verifica si el mensaje es una consulta de búsqueda
     * @param {string} message - Mensaje en minúsculas
     * @return {boolean} true si es una búsqueda
     */
    isSearchQuery: function(message) {
        const searchPatterns = [
            'buscar ', 'busca ', 'encuentra ', 'buscame ',
            'donde esta', 'dónde está', 'mostrar '
        ];
        
        return searchPatterns.some(pattern => message.includes(pattern));
    },
    
    /**
     * Maneja una consulta de búsqueda
     * @param {string} message - Mensaje en minúsculas
     * @return {string} Mensaje informando sobre la búsqueda
     */
    handleSearchQuery: function(message) {
        // Extraer término de búsqueda
        let searchTerm = message
            .replace('buscar ', '')
            .replace('busca ', '')
            .replace('encuentra ', '')
            .replace('buscame ', '')
            .replace('donde esta ', '')
            .replace('dónde está ', '')
            .replace('mostrar ', '')
            .replace('ejercicios de ', '')
            .replace('ejercicios sobre ', '')
            .trim();
        
        // Si hay una función de búsqueda global, utilizarla
        if (typeof window.performSearch === 'function') {
            // Poner el término en el input
            const searchInput = document.getElementById('search-input');
            if (searchInput) {
                searchInput.value = searchTerm;
                
                // Configurar listener para recibir resultados
                const handleSearchResults = (event) => {
                    if (event.detail && event.detail.type === 'searchCompleted') {
                        // Recibimos resultados, actualizar mensaje para indicar que se completó
                        // y que los resultados están en el modal.
                        const results = event.detail.results;
                        if (results && results.count > 0) {
                            window.ChatbotUI.replaceLastBotMessage(
                                `Búsqueda completada para "${searchTerm}". Revisa los resultados en la ventana emergente.`
                            );
                        } else {
                            window.ChatbotUI.replaceLastBotMessage(
                                `No encontré resultados para "${searchTerm}" en la búsqueda. Intenta con otros términos.`
                            );
                        }
                        
                        // Eliminar listener
                        document.removeEventListener('searchResult', handleSearchResults);
                    }
                };
                
                // Registrar listener para recibir resultados
                document.addEventListener('searchResult', handleSearchResults);
                
                // Ejecutar búsqueda
                window.performSearch();
                return `Buscando "${searchTerm}"... Los resultados aparecerán en una ventana emergente.`;
            }
        }
        
        return `Lo siento, no puedo realizar la búsqueda de "${searchTerm}" en este momento.`;
    },
    
    /**
     * Formatea el mensaje del usuario o del chatbot con código si es necesario
     * @param {string} text - Texto del mensaje
     * @return {string} Texto formateado con HTML
     */
    formatMessage: function(text) {
        // Buscar bloques de código (```código```
        if (text.includes('```')) {
            let parts = text.split('```');
            // Procesar la parte inicial antes del primer bloque de código
            let result = parts[0].replace(/\n/g, '<br>');
            
            for (let i = 1; i < parts.length; i++) {
                if (i % 2 === 1) { // Es un bloque de código
                    let codeBlock = parts[i];
                    let language = 'plaintext';
                    
                    // Detectar lenguaje
                    if (codeBlock.startsWith('html') || codeBlock.startsWith('HTML')) {
                        language = 'html';
                        codeBlock = codeBlock.substring(4).trimStart(); // Eliminar 'html' y espacios iniciales
                    } else if (codeBlock.startsWith('css') || codeBlock.startsWith('CSS')) {
                        language = 'css';
                        codeBlock = codeBlock.substring(3).trimStart(); // Eliminar 'css' y espacios iniciales
                    } else if (codeBlock.startsWith('javascript') || codeBlock.startsWith('js')) {
                        language = 'javascript';
                        codeBlock = codeBlock.substring(codeBlock.startsWith('javascript') ? 10 : 2).trimStart();
                    } else if (codeBlock.startsWith('xml')) {
                        language = 'xml';
                        codeBlock = codeBlock.substring(3).trimStart();
                    }
                    
                    // Escapar HTML dentro del bloque de código para evitar que se renderice
                    const escapedCode = codeBlock.replace(/</g, '&lt;').replace(/>/g, '&gt;');

                    // Crear bloque de código HTML
                    result += `<div class="code-block">
                        <div class="code-header">
                            <span class="code-language">${language}</span>
                            <button class="copy-code-btn" onclick="navigator.clipboard.writeText(this.parentNode.nextElementSibling.textContent)">
                                <i class="fas fa-copy"></i> Copiar
                            </button>
                        </div>
                        <pre><code class="language-${language}">${escapedCode}</code></pre>
                    </div>`;
                } else { // Es texto normal entre bloques de código o al final
                    result += parts[i].replace(/\n/g, '<br>');
                }
            }
            
            return result;
        }
        
        // Si no hay bloques de código, simplemente reemplazar saltos de línea.
        // Si el texto ya contiene HTML (ej. <a>), se preservará.
        return text.replace(/\n/g, '<br>');
    },
    
    /**
     * Guarda un mensaje en el historial
     * @param {string} text - Texto del mensaje
     * @param {string} sender - 'user' o 'bot'
     */
    saveToHistory: function(text, sender) {
        this.chatHistory.push({
            text: text,
            sender: sender,
            timestamp: new Date().toISOString()
        });
        
        // Limitar el tamaño del historial
        const maxHistory = window.chatbotData?.ui?.messageHistoryMax || 50;
        if (this.chatHistory.length > maxHistory) {
            this.chatHistory = this.chatHistory.slice(-maxHistory);
        }
        
        // Guardar en localStorage
        localStorage.setItem('chatHistory', JSON.stringify(this.chatHistory));
    },
    
    /**
     * Carga el historial de chat desde localStorage
     */
    loadChatHistory: function() {
        try {
            const history = localStorage.getItem('chatHistory');
            return history ? JSON.parse(history) : [];
        } catch (error) {
            console.error("Error al cargar historial:", error);
            return [];
        }
    },
    
    /**
     * Limpia el historial de chat
     */
    clearChatHistory: function() {
        this.chatHistory = [];
        localStorage.removeItem('chatHistory');
    },
    
    /**
     * Exporta el historial de chat como un archivo de texto
     */
    exportChatHistory: function() {
        if (this.chatHistory.length === 0) {
            return false;
        }
        
        let exportText = "# Historial del Chatbot\n\n";
        
        this.chatHistory.forEach(message => {
            const date = new Date(message.timestamp).toLocaleString();
            const sender = message.sender === 'user' ? 'Usuario' : 'Chatbot';
            exportText += `## ${sender} (${date})\n\n${message.text}\n\n`;
        });
        
        const blob = new Blob([exportText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = 'chatbot-historial.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        return true;
    }
};

// Exportar el objeto para uso en otros scripts
window.ChatbotLogic = ChatbotLogic;
