/**
 * chatbot-logic.js - Lógica del chatbot para procesar mensajes y generar respuestas
 */

// Asegurarse de que el objeto se define correctamente
window.ChatbotLogic = {
    // Códigos de error para facilitar la depuración
    ERROR_CODES: {
        MISSING_DATA: 'E001',
        KEYWORD_PROCESSING: 'E002',
        MATCHING_ALGORITHM: 'E003',
        RESPONSE_FORMATTING: 'E004',
        PREPROCESSING: 'E005',
        UNKNOWN: 'E999'
    },
    
    // Modo debug para mostrar información detallada en la consola
    debugMode: true,
    
    /**
     * Inicializa la lógica del chatbot
     */
    init: function() {
        console.log("Inicializando lógica del chatbot");
        
        // Verificación adicional
        if (typeof window.ChatbotLogic === 'undefined') {
            console.error("Error crítico: window.ChatbotLogic no está definido correctamente");
            return false;
        }
        
        // Verificar que los datos estén disponibles
        if (!window.chatbotData) {
            console.error("Error: No se encontraron los datos del chatbot (chatbot-data.js)");
            // Crear datos mínimos de emergencia
            window.chatbotData = {
                knowledge: [
                    {
                        keywords: ['hola', 'buenas', 'saludos'],
                        responses: ['Hola. Soy una versión simplificada del chatbot.']
                    }
                ],
                fallback: [
                    'Lo siento, no puedo responder a eso en modo de emergencia.',
                    'No entiendo tu pregunta. Estoy funcionando en modo limitado.'
                ]
            };
        }
        
        // Verificar la estructura de datos esencial de forma simple
        if (!this.basicValidation()) {
            console.error("Error: La estructura de datos del chatbot es inválida");
            return false;
        }
        
        // Inicializar el historial de chat
        this.chatHistory = this.loadChatHistory() || [];
        
        console.log("Chatbot inicializado correctamente");
        console.log("Datos cargados:", 
            window.chatbotData.knowledge?.length || 0, "entradas de conocimiento",
            window.chatbotData.fallback?.length || 0, "respuestas predeterminadas");
        
        return true;
    },
    
    /**
     * Validación básica de los datos del chatbot
     */
    basicValidation: function() {
        try {
            // Verificar si chatbotData existe y tiene estructura básica
            if (!window.chatbotData) {
                console.error("chatbotData no existe");
                return false;
            }
            
            // Verificar si knowledge existe y es un array
            if (!Array.isArray(window.chatbotData.knowledge)) {
                console.error("chatbotData.knowledge no es un array");
                return false;
            }
            
            // Verificar si fallback existe y es un array
            if (!Array.isArray(window.chatbotData.fallback)) {
                console.error("chatbotData.fallback no es un array");
                return false;
            }
            
            return true;
        } catch (error) {
            console.error("Error en validación:", error);
            return false;
        }
    },
    
    /**
     * Genera una respuesta basada en el mensaje del usuario - VERSIÓN SIMPLIFICADA
     */
    generateResponse: function(message) {
        try {
            console.log("Generando respuesta para:", message);
            
            // Validar mensaje de entrada
            if (!message || typeof message !== 'string' || message.trim() === '') {
                return "Por favor, escribe un mensaje.";
            }
            
            // Verificar que chatbotData exista
            if (!window.chatbotData) {
                console.error("chatbotData no está disponible");
                return "Error: Base de conocimientos no disponible.";
            }
            
            // Simplificar el mensaje para búsqueda
            const lowerMsg = message.toLowerCase().trim();
            console.log("Mensaje procesado:", lowerMsg);
            
            // VERIFICAR SI ES UN COMANDO DE DEPURACIÓN
            if (lowerMsg === "debug on") {
                if (window.DebugSystem) {
                    window.DebugSystem.enableDebugMode();
                }
                this.debugMode = true;
                return "Modo debug activado. Ahora verás información detallada y el panel de depuración.";
            } else if (lowerMsg === "debug off") {
                if (window.DebugSystem) {
                    window.DebugSystem.disableDebugMode();
                }
                this.debugMode = false;
                return "Modo debug desactivado.";
            }
            
            // VERIFICAR SI ES UNA BÚSQUEDA
            if (this.isSearchQuery(lowerMsg)) {
                console.log("Se ha detectado una consulta de búsqueda");
                return this.handleSearchQuery(lowerMsg);
            }
            
            // VERSIÓN SIMPLIFICADA: buscar palabras clave directamente
            for (const entry of window.chatbotData.knowledge) {
                if (!entry.keywords || !entry.responses) continue;
                
                // Verificar si alguna keyword coincide con el mensaje
                for (const keyword of entry.keywords) {
                    if (lowerMsg.includes(keyword)) {
                        console.log("Coincidencia encontrada con keyword:", keyword);
                        
                        // Seleccionar respuesta aleatoria
                        const randomIndex = Math.floor(Math.random() * entry.responses.length);
                        const response = entry.responses[randomIndex];
                        
                        return response;
                    }
                }
            }
            
            // Si no hay coincidencias, usar respuesta predeterminada
            const randomIndex = Math.floor(Math.random() * window.chatbotData.fallback.length);
            return window.chatbotData.fallback[randomIndex];
            
        } catch (error) {
            console.error("Error en generateResponse:", error);
            return "Lo siento, ocurrió un error al procesar tu consulta.";
        }
    },
    
    /**
     * Maneja errores y devuelve un mensaje de error amigable
     * @param {string} code - Código de error
     * @param {string} message - Mensaje de error
     * @return {string} Mensaje de error formateado
     */
    handleError: function(code, message) {
        console.error(`Error [${code}]: ${message}`);
        
        // Si está en modo debug, devolver información detallada
        if (this.debugMode) {
            return `Lo siento, ocurrió un error (${code}). Intenta con otra pregunta.\n\nDEBUG: ${message}`;
        }
        
        // Respuesta de error genérica para el usuario final
        return this.getErrorResponse(code);
    },
    
    /**
     * Devuelve una respuesta de error según el código
     * @param {string} code - Código de error
     * @return {string} Mensaje de error amigable
     */
    getErrorResponse: function(code) {
        // Mensajes específicos según el código de error
        const errorMessages = {
            [this.ERROR_CODES.MISSING_DATA]: "No pude encontrar la información necesaria. Por favor, intenta con otra pregunta.",
            [this.ERROR_CODES.KEYWORD_PROCESSING]: "No pude entender bien tu consulta. ¿Podrías reformularla?",
            [this.ERROR_CODES.MATCHING_ALGORITHM]: "Tuve problemas para encontrar una respuesta adecuada. ¿Podrías preguntar de otra manera?",
            [this.ERROR_CODES.RESPONSE_FORMATTING]: "Encontré una respuesta pero no pude formatearla correctamente. Por favor, intenta nuevamente.",
            [this.ERROR_CODES.PREPROCESSING]: "No pude procesar tu pregunta correctamente. ¿Podrías escribirla de otra forma?",
            [this.ERROR_CODES.UNKNOWN]: "Ocurrió un error inesperado. Por favor, intenta con otra pregunta."
        };
        
        return errorMessages[code] || "Lo siento, ocurrió un error al procesar tu consulta. Intenta con otra pregunta.";
    },
    
    /**
     * Devuelve una respuesta predeterminada aleatoria
     */
    getRandomFallback: function() {
        try {
            if (!window.chatbotData || !window.chatbotData.fallback || 
                !Array.isArray(window.chatbotData.fallback) || 
                window.chatbotData.fallback.length === 0) {
                return "Lo siento, no puedo entender tu consulta en este momento.";
            }
            
            const randomIndex = Math.floor(Math.random() * window.chatbotData.fallback.length);
            return window.chatbotData.fallback[randomIndex] || window.chatbotData.fallback[0];
        } catch (error) {
            console.error("Error al obtener respuesta predeterminada:", error);
            return "Lo siento, no puedo entender tu consulta en este momento.";
        }
    },
    
    /**
     * Verifica si el mensaje es una consulta de búsqueda
     * @param {string} message - Mensaje en minúsculas
     * @return {boolean} true si es una búsqueda
     */
    isSearchQuery: function(message) {
        const searchPatterns = [
            'buscar ', 'busca ', 'encuentra ', 'buscame ',
            'donde esta', 'dónde está', 'mostrar ', 
            // Patrones más específicos que coinciden con lo que escriben los usuarios
            'busca ejercicios', 'buscar ejercicios', 'encuentra ejercicios'
        ];
        
        const lcMessage = message.toLowerCase().trim();
        return searchPatterns.some(pattern => lcMessage.includes(pattern) || lcMessage.startsWith(pattern));
    },
    
    /**
     * Maneja una consulta de búsqueda
     * @param {string} message - Mensaje en minúsculas
     * @return {string} Mensaje informando sobre la búsqueda
     */
    handleSearchQuery: function(message) {
        // Extraer término de búsqueda
        let searchTerm = message.toLowerCase().trim()
            .replace(/^buscar?\s+/i, '')
            .replace(/^busca\s+/i, '')
            .replace(/^encuentra\s+/i, '')
            .replace(/^buscame\s+/i, '')
            .replace(/^donde\s+esta\s+/i, '')
            .replace(/^dónde\s+está\s+/i, '')
            .replace(/^mostrar\s+/i, '')
            .replace(/ejercicios\s+de\s+/i, '')
            .replace(/ejercicios\s+sobre\s+/i, '')
            .replace(/ejercicios\s+/i, '')
            .trim();
        
        console.log("[BÚSQUEDA] Término de búsqueda extraído:", searchTerm);
        
        // Verificar que hay un término válido
        if (!searchTerm || searchTerm.length < 2) {
            return "Por favor, especifica qué quieres buscar con más detalle.";
        }
        
        // Si hay una función de búsqueda global, utilizarla
        if (typeof window.performSearch === 'function') {
            // Poner el término en el input
            const searchInput = document.getElementById('search-input');
            if (searchInput) {
                searchInput.value = searchTerm;
                
                // Ejecutar búsqueda
                window.performSearch();
                console.log("[BÚSQUEDA] Búsqueda ejecutada para:", searchTerm);
                return `Buscando "${searchTerm}"... Revisa los resultados en la ventana de búsqueda.`;
            }
        }
        
        return `Lo siento, no puedo realizar la búsqueda de "${searchTerm}" en este momento.`;
    },
    
    /**
     * Preprocesa el mensaje para mejorar las coincidencias
     * @param {string} message - Mensaje del usuario en minúsculas
     * @return {string} Mensaje preprocesado
     */
    preprocessMessage: function(message) {
        try {
            if (!message || typeof message !== 'string') {
                console.error("Mensaje inválido para preprocesar:", message);
                return "";
            }
            
            // Eliminar palabras comunes, artículos y optimizar palabras clave
            let processed = message
                .replace(/dame un|dame una|dame|muestra|muéstrame|enseñame|enseñar|ver|quiero ver/g, '')
                .replace(/ejemplo de|ejemplos de|un ejemplo de|ejemplos sobre|ejemplo|ejemplos/g, 'ejemplo')
                .replace(/código de|código en|código para|código/g, 'codigo')
                .trim();
            
            // Si el mensaje se vuelve vacío después del preprocesamiento, devolver al menos parte del original
            if (!processed && message) {
                const words = message.split(' ');
                return words[words.length - 1] || message; // Último término o mensaje original
            }
            
            return processed;
        } catch (error) {
            console.error("Error en preprocessMessage:", error);
            return message; // Devolver mensaje original en caso de error
        }
    },
    
    /**
     * Calcula la puntuación de coincidencia
     * @param {string} message - Mensaje preprocesado
     * @param {array} keywords - Palabras clave a buscar
     * @return {number} Puntuación entre 0 y 1
     */
    calculateMatchScore: function(message, keywords) {
        try {
            if (!message || !keywords || !Array.isArray(keywords)) {
                return 0;
            }

            let totalScore = 0;
            let bestKeywordScore = 0;
            
            for (const keyword of keywords) {
                let currentKeywordScore = 0;
                
                // Si el mensaje está vacío o el keyword está vacío, continuar
                if (!message.trim() || !keyword.trim()) {
                    continue;
                }
                
                // Coincidencia exacta (prioridad alta)
                if (message === keyword) {
                    currentKeywordScore = 1.0; // Coincidencia perfecta
                    console.log(`Coincidencia exacta: "${message}" con "${keyword}"`);
                }
                // Coincidencia de frase completa (prioridad alta)
                else if (message.includes(keyword)) {
                    // Longitud relativa para favorecer coincidencias más largas
                    currentKeywordScore = 0.7 + (0.3 * (keyword.length / Math.max(keyword.length, message.length)));
                    console.log(`Coincidencia de frase: "${message}" incluye "${keyword}" (score: ${currentKeywordScore})`);
                } 
                // Coincidencia inversa (cuando el keyword contiene el mensaje completo)
                else if (keyword.includes(message)) {
                    currentKeywordScore = 0.6; // Buen match pero no perfecto
                    console.log(`Coincidencia inversa: "${keyword}" incluye "${message}" (score: ${currentKeywordScore})`);
                }
                // Coincidencia parcial de palabras (prioridad media)
                else {
                    const keywordWords = keyword.split(' ');
                    const messageWords = message.split(' ');
                    
                    let matchedWords = 0;
                    let importantWordMatches = 0;
                    
                    for (const keywordWord of keywordWords) {
                        // Ignorar palabras muy cortas
                        if (keywordWord.length <= 2) continue;
                        
                        // Buscar palabra completa en el mensaje
                        if (messageWords.some(word => word === keywordWord)) {
                            matchedWords++;
                            
                            // Palabras más largas son generalmente más importantes
                            if (keywordWord.length > 4) {
                                importantWordMatches++;
                            }
                        }
                    }
                    
                    if (matchedWords > 0) {
                        // Base score por palabras coincidentes
                        const wordMatchRatio = matchedWords / keywordWords.length;
                        const importantBonus = 0.1 * importantWordMatches;
                        currentKeywordScore = 0.4 * wordMatchRatio + importantBonus;
                        console.log(`Coincidencia parcial: ${matchedWords}/${keywordWords.length} palabras en "${keyword}" (score: ${currentKeywordScore})`);
                    }
                }
                
                // Actualizar mejor puntuación de palabra clave
                if (currentKeywordScore > bestKeywordScore) {
                    bestKeywordScore = currentKeywordScore;
                }
                
                // Acumular puntuación para todas las palabras clave
                totalScore += currentKeywordScore;
            }
            
            // La puntuación final es una combinación ponderada de
            // la mejor coincidencia individual y la puntuación total
            const weightedScore = (bestKeywordScore * 0.7) + (Math.min(totalScore / keywords.length, 1) * 0.3);
            
            console.log("Puntuación final calculada:", weightedScore, "para keywords:", keywords);
            return weightedScore;
        } catch (error) {
            console.error("Error en calculateMatchScore:", error);
            return 0;
        }
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
        try {
            // Asegurarse de que this.chatHistory siempre esté inicializado
            if (!this.chatHistory) {
                console.warn("Chat history no inicializado, creando nuevo array");
                this.chatHistory = [];
            }
            
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
            
            if this.debugMode) {
                console.log("[DEBUG] Mensaje guardado en historial:", text);
                console.log("[DEBUG] Historial actual:", this.chatHistory);
            }
        } catch (error) {
            console.error("Error al guardar en el historial:", error);
        }
    },
    
    /**
     * Carga el historial de chat desde localStorage
     * @return {Array} Historial de chat
     */
    loadChatHistory: function() {
        try {
            const history = localStorage.getItem('chatHistory');
            if (history) {
                return JSON.parse(history);
            }
        } catch (error) {
            console.error("Error al cargar el historial de chat:", error);
        }
        
        return [];
    },
    
    /**
     * Limpia el historial de chat
     */
    clearChatHistory: function() {
        try {
            this.chatHistory = [];
            localStorage.removeItem('chatHistory');
            console.log("Historial de chat limpiado");
        } catch (error) {
            console.error("Error al limpiar el historial de chat:", error);
        }
    }
};

// Registrar explícitamente en la consola que el objeto ha sido creado
console.log("ChatbotLogic cargado correctamente:", !!window.ChatbotLogic);
