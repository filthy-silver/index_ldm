/**
 * chatbot.js - Script independiente para el chatbot
 * Separar el código en un archivo JS externo facilita la mantenibilidad
 */

// Depurador para verificar carga
console.log("¡Chatbot.js cargado correctamente!");

// Base de conocimientos del chatbot
const chatbotKnowledge = [
    {
        keywords: ['hola', 'buenas', 'saludos', 'hey'],
        responses: [
            '¡Hola! ¿En qué puedo ayudarte hoy?',
            '¡Buenas! Estoy aquí para resolver tus dudas sobre el curso.',
            '¡Saludos! ¿Tienes alguna pregunta sobre Lenguajes de Marcas?'
        ]
    },
    {
        keywords: ['html', 'estructura', 'etiquetas', 'web'],
        responses: [
            'HTML es el lenguaje estándar para crear páginas web. Puedes encontrar ejemplos en la sección de ejercicios del primer trimestre.',
            'HTML utiliza etiquetas para definir la estructura de una página web. Consulta los ejercicios de tablas y formularios para ver ejemplos.',
            'Para aprender más sobre HTML, te recomiendo revisar los ejercicios del primer trimestre y visitar W3Schools o MDN Web Docs.'
        ]
    },
    {
        keywords: ['css', 'estilos', 'diseño'],
        responses: [
            'CSS se utiliza para dar estilo a las páginas web. Puedes encontrar ejemplos en la sección de ejercicios CSS.',
            'Para practicar CSS, revisa los ejercicios de FlexBox y CSS del primer trimestre.',
            'CSS3 incluye animaciones, transiciones y muchas otras características. Los ejercicios del curso te ayudarán a entenderlo mejor.'
        ]
    },
    {
        keywords: ['javascript', 'js', 'interactivo', 'script'],
        responses: [
            'JavaScript es un lenguaje de programación que permite crear páginas web interactivas.',
            'En el curso aplicamos JavaScript principalmente en el segundo trimestre. Revisa los ejemplos para entender su funcionamiento.',
            'JavaScript permite validar formularios, crear animaciones y mucho más. ¡Como este chatbot que está hecho con JavaScript!'
        ]
    },
    {
        keywords: ['wordpress', 'cms', 'gestor'],
        responses: [
            'WordPress es un sistema de gestión de contenidos (CMS) que facilita la creación de sitios web.',
            'En el segundo trimestre trabajamos con WordPress. Revisa los ejercicios para aprender a instalarlo y configurarlo.',
            'WordPress es muy popular para blogs y sitios web comerciales. Consulta los materiales del segundo trimestre para más información.'
        ]
    },
    {
        keywords: ['xampp', 'servidor', 'local', 'apache'],
        responses: [
            'XAMPP es un paquete de software libre que permite instalar Apache, MySQL, PHP y más en tu ordenador.',
            'Para instalar WordPress en local, necesitas XAMPP. Consulta la guía "Instalación de XAMPP y WordPress en local" en el segundo trimestre.',
            'XAMPP te permite desarrollar sitios web sin necesidad de conexión a internet. Es perfecto para practicar.'
        ]
    },
    {
        keywords: ['ejercicio', 'tarea', 'práctica', 'actividad'],
        responses: [
            'Todos los ejercicios están organizados por trimestres y categorías en el menú lateral.',
            'Para acceder a los ejercicios, selecciona el trimestre y la categoría en el menú de la izquierda.',
            'Si tienes dudas sobre algún ejercicio específico, puedes preguntarme indicando el nombre del ejercicio.'
        ]
    },
    {
        keywords: ['examen', 'evaluación', 'test', 'prueba'],
        responses: [
            'La evaluación consta de ejercicios prácticos y exámenes teórico-prácticos.',
            'Para preparar los exámenes, te recomiendo revisar todos los ejercicios realizados en clase.',
            'Los exámenes evalúan los conocimientos de HTML, CSS, JavaScript y WordPress vistos durante el curso.'
        ]
    },
    {
        keywords: ['fecha', 'entrega', 'plazo', 'cuando'],
        responses: [
            'El curso finaliza el 20 de mayo. Todos los ejercicios deben entregarse antes de esa fecha.',
            'La fecha límite para entregar los ejercicios es el 20 de mayo.',
            'Recuerda que la entrega final del proyecto debe realizarse antes del 20 de mayo.'
        ]
    },
    {
        keywords: ['ejercicios css', 'css ejercicio'],
        responses: [
            'Los ejercicios de CSS se encuentran en el primer trimestre. Haz clic en "Trimestre 1" y luego en "Ejercicios CSS" en el menú lateral.',
            'Hay 4 ejercicios de CSS disponibles. Puedes acceder a ellos desde la sección "Ejercicios CSS" del primer trimestre.'
        ]
    },
    {
        keywords: ['ejercicios flexbox', 'flexbox ejercicio'],
        responses: [
            'Los ejercicios de FlexBox se encuentran en el primer trimestre. Haz clic en "Trimestre 1" y luego en "Ejercicios FlexBox" en el menú lateral.',
            'Actualmente hay 1 ejercicio de FlexBox disponible. Puedes acceder a él desde la sección "Ejercicios FlexBox" del primer trimestre.'
        ]
    },
    {
        keywords: ['ejercicios formularios', 'formularios ejercicio'],
        responses: [
            'Los ejercicios de Formularios se encuentran en el primer trimestre. Haz clic en "Trimestre 1" y luego en "Ejercicios Formularios" en el menú lateral.',
            'Hay 4 ejercicios de Formularios disponibles. Puedes acceder a ellos desde la sección "Ejercicios Formularios" del primer trimestre.'
        ]
    },
    {
        keywords: ['ejercicios tablas', 'tablas ejercicio'],
        responses: [
            'Los ejercicios de Tablas se encuentran en el primer trimestre. Haz clic en "Trimestre 1" y luego en "Ejercicios Tablas" en el menú lateral.',
            'Hay 3 ejercicios de Tablas disponibles. Puedes acceder a ellos desde la sección "Ejercicios Tablas" del primer trimestre.'
        ]
    },
    {
        keywords: ['recursos', 'enlaces', 'sitios', 'ayuda'],
        responses: [
            'En la página principal encontrarás un carousel con recursos útiles como W3Schools, MDN Web Docs, CodePen, CSS-Tricks y WordPress.org.',
            'Te recomiendo visitar W3Schools para tutoriales completos, MDN para documentación técnica y CodePen para ver ejemplos prácticos.',
            'Los recursos están disponibles en la página de bienvenida. Haz clic en los enlaces para acceder a ellos.'
        ]
    },
    {
        keywords: ['ia', 'inteligencia artificial', 'chatgpt', 'chatbot'],
        responses: [
            'La inteligencia artificial (IA) se utiliza cada vez más en el desarrollo web. Puedes encontrar recursos sobre IA en el carousel de la página principal.',
            'Herramientas como ChatGPT, Claude, DALL-E o Midjourney pueden ayudarte a generar código, imágenes o textos para tus proyectos web.',
            'La IA puede ser una gran aliada para aprender programación, ya que puede explicarte conceptos y ayudarte a depurar código.'
        ]
    },
    {
        keywords: ['gracias', 'muchas gracias', 'thank', 'thanks'],
        responses: [
            '¡De nada! Estoy aquí para ayudarte.',
            'No hay de qué. Si tienes más preguntas, no dudes en consultarme.',
            'Un placer poder ayudarte. ¡Ánimo con el curso!'
        ]
    },
    {
        keywords: ['adios', 'chao', 'hasta luego', 'bye'],
        responses: [
            '¡Hasta luego! No dudes en volver si tienes más preguntas.',
            '¡Adiós! Espero haber sido de ayuda.',
            '¡Nos vemos! Recuerda que estoy aquí para resolver tus dudas sobre el curso.'
        ]
    },
    // Nuevas entradas con código de ejemplo
    {
        keywords: ['html ejemplo', 'ejemplo html', 'código html'],
        responses: [
            `Aquí tienes un ejemplo básico de HTML:
            \`\`\`html
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <title>Mi página web</title>
            </head>
            <body>
                <h1>Hola mundo</h1>
                <p>Este es un párrafo en HTML.</p>
            </body>
            </html>
            \`\`\``,

            `Este es un ejemplo de una lista en HTML:
            \`\`\`html
            <ul>
                <li>Elemento 1</li>
                <li>Elemento 2</li>
                <li>Elemento 3</li>
            </ul>
            \`\`\``
        ]
    },
    {
        keywords: ['css ejemplo', 'ejemplo css', 'código css'],
        responses: [
            `Aquí tienes un ejemplo de CSS para centrar un elemento:
            \`\`\`css
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }
            \`\`\``,

            `Ejemplo de CSS para una tarjeta con sombra:
            \`\`\`css
            .card {
                background-color: white;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                padding: 20px;
                margin: 10px;
            }
            \`\`\``
        ]
    },
    {
        keywords: ['flexbox ejemplo', 'ejemplo flexbox'],
        responses: [
            `Aquí tienes un ejemplo de FlexBox:
            \`\`\`css
            .container {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-between;
            }
            
            .item {
                flex: 1 0 200px;
                margin: 10px;
            }
            \`\`\``
        ]
    },
    {
        keywords: ['xml ejemplo', 'ejemplo xml', 'dtd ejemplo'],
        responses: [
            `Ejemplo de un documento XML con DTD interno:
            \`\`\`xml
            <?xml version="1.0" encoding="UTF-8"?>
            <!DOCTYPE biblioteca [
                <!ELEMENT biblioteca (libro+)>
                <!ELEMENT libro (titulo, autor, anyo)>
                <!ELEMENT titulo (#PCDATA)>
                <!ELEMENT autor (#PCDATA)>
                <!ELEMENT anyo (#PCDATA)>
            ]>
            <biblioteca>
                <libro>
                    <titulo>Don Quijote de la Mancha</titulo>
                    <autor>Miguel de Cervantes</autor>
                    <anyo>1605</anyo>
                </libro>
            </biblioteca>
            \`\`\``
        ]
    },
    {
        keywords: ['buscar', 'encuentra', 'encontrar', 'busca ejercicio'],
        responses: [
            "Puedo ayudarte a buscar ejercicios. Dime qué tema te interesa o qué estás buscando.",
            "¿Qué tipo de ejercicio estás buscando? Puedo ayudarte a encontrarlo."
        ]
    },
    {
        keywords: ['ayuda chat', 'comandos', 'qué puedes hacer'],
        responses: [
            `Puedo ayudarte con varias cosas:
            
            - Información sobre HTML, CSS, JavaScript, WordPress
            - Ejemplos de código (pide "ejemplo de HTML/CSS/etc")
            - Búsqueda de ejercicios (di "buscar [tema]")
            - Información sobre fechas y plazos
            - Recursos útiles para el curso
            
            También puedes usar los botones de sugerencias debajo para preguntas frecuentes.`
        ]
    }
];

// Respuestas para cuando no se encuentra coincidencia
const fallbackResponses = [
    'Lo siento, no entiendo tu pregunta. ¿Podrías reformularla?',
    'No tengo información sobre eso. ¿Puedo ayudarte con algo relacionado con el curso de Lenguajes de Marcas?',
    'Disculpa, no tengo respuesta para eso. Prueba a preguntar sobre HTML, CSS, JavaScript o WordPress.',
    'No estoy seguro de entender tu pregunta. ¿Quieres saber algo sobre los ejercicios del curso?'
];

// Inicializar elementos del chatbot - hacemos esto más robusto
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM cargado. Inicializando chatbot...");
    
    // Verificar elementos críticos del chatbot
    const criticalElements = [
        'chatbot-container',
        'chatbot-button',
        'chatbot-toggle',
        'chatbot-input-field',
        'chatbot-send-btn',
        'chatbot-messages'
    ];
    
    let allElementsExist = true;
    criticalElements.forEach(id => {
        const element = document.getElementById(id);
        if (!element) {
            console.error(`Elemento crítico faltante: #${id}`);
            allElementsExist = false;
        }
    });
    
    if (!allElementsExist) {
        console.error("No se pueden inicializar las funciones del chatbot porque faltan elementos críticos.");
        return;
    }
    
    console.log("Todos los elementos críticos verificados. El chatbot debería funcionar correctamente.");
    
    const chatbotButton = document.getElementById('chatbot-button');
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-input-field');
    const chatbotSendBtn = document.getElementById('chatbot-send-btn');
    const chatbotHeader = document.querySelector('.chatbot-header');
    
    // Asegúrate de que los elementos existen antes de intentar acceder a ellos
    if (!chatbotButton || !chatbotContainer) {
        console.error("No se encontraron los elementos necesarios para el chatbot");
        return;
    }
    
    // Hacer que el chatbot sea arrastrable
    if (chatbotHeader) {
        let isDragging = false;
        let offsetX, offsetY;
        
        // Cuando el usuario presiona el mouse en el header
        chatbotHeader.addEventListener('mousedown', function(e) {
            // Solo permitir arrastrar si el clic no fue en un botón
            if (e.target.tagName !== 'BUTTON' && !e.target.closest('button')) {
                isDragging = true;
                
                // Cambiar el cursor durante el arrastre
                chatbotHeader.style.cursor = 'grabbing';
                
                // Agregar clase para marcar que está siendo arrastrado
                chatbotContainer.classList.add('chatbot-dragging');
                
                // Calcular el offset relativo al contenedor
                const rect = chatbotContainer.getBoundingClientRect();
                offsetX = e.clientX - rect.left;
                offsetY = e.clientY - rect.top;
                
                // Prevenir selección de texto durante el arrastre
                e.preventDefault();
            }
        });
        
        // Cuando el usuario mueve el mouse
        document.addEventListener('mousemove', function(e) {
            if (!isDragging) return;
            
            // Actualizar posición del chat
            const newX = e.clientX - offsetX;
            const newY = e.clientY - offsetY;
            
            // Limitar la posición para que no salga de la ventana
            // considerando si el chat está en modo grande o normal
            const isLarge = chatbotContainer.classList.contains('chatbot-large');
            const width = isLarge ? 450 : 350;
            const height = isLarge ? 550 : 450;
            
            const maxX = window.innerWidth - width;
            const maxY = window.innerHeight - height;
            
            // Aplicar límites
            const boundedX = Math.max(0, Math.min(newX, maxX));
            const boundedY = Math.max(0, Math.min(newY, maxY));
            
            // Cambiar posición a absoluta si no lo es ya
            if (chatbotContainer.style.position !== 'absolute') {
                // Primero guardar las posiciones actuales para un cambio suave
                const rectBeforeChange = chatbotContainer.getBoundingClientRect();
                
                // Cambiar a position: absolute
                chatbotContainer.style.position = 'absolute';
                chatbotContainer.style.bottom = 'auto';
                chatbotContainer.style.right = 'auto';
                chatbotContainer.style.left = rectBeforeChange.left + 'px';
                chatbotContainer.style.top = rectBeforeChange.top + 'px';
            }
            
            // Aplicar nueva posición directamente with left/top para mayor estabilidad
            chatbotContainer.style.left = boundedX + 'px';
            chatbotContainer.style.top = boundedY + 'px';
            
            // Guardar la posición en localStorage
            localStorage.setItem('chatbotPosX', boundedX);
            localStorage.setItem('chatbotPosY', boundedY);
        });
        
        // Cuando el usuario suelta el mouse
        document.addEventListener('mouseup', function() {
            if (!isDragging) return;
            
            isDragging = false;
            chatbotHeader.style.cursor = 'grab';
            chatbotContainer.classList.remove('chatbot-dragging');
        });
        
        // Configurar el header como "agarrable" al pasar el mouse
        chatbotHeader.addEventListener('mouseover', function(e) {
            // Solo cambiar el cursor si no está sobre un botón
            if (e.target.tagName !== 'BUTTON' && !e.target.closest('button')) {
                chatbotHeader.style.cursor = 'grab';
            }
        });
        
        // Restaurar cursor al salir del header
        chatbotHeader.addEventListener('mouseout', function() {
            if (!isDragging) {
                chatbotHeader.style.cursor = '';
            }
        });
    }
    
    // Cargar historial de chat si existe
    loadChatHistory();
    
    // Recuperar el estado del modo oscuro - por defecto oscuro
    if (localStorage.getItem('darkMode') === null) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
    } else if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    
    // Mostrar/ocultar chatbot
    chatbotButton.addEventListener('click', function() {
        chatbotContainer.style.display = 'flex';
        chatbotButton.style.display = 'none';
        if (chatbotInput) chatbotInput.focus();
        
        // Restaurar estado minimizado si estaba guardado
        if (localStorage.getItem('chatbotMinimized') === 'true') {
            chatbotContainer.classList.add('chatbot-minimized');
        }
        
        // Guardar estado del chatbot
        localStorage.setItem('chatbotOpen', 'true');
    });
    
    // Cerrar chatbot
    if (chatbotToggle) {
        chatbotToggle.addEventListener('click', function() {
            chatbotContainer.style.display = 'none';
            chatbotButton.style.display = 'flex';
            
            // Guardar estado del chatbot
            localStorage.setItem('chatbotOpen', 'false');
        });
    }
    
    // Minimizar/maximizar chatbot
    const chatbotMinimize = document.getElementById('chatbot-minimize');
    if (chatbotMinimize) {
        chatbotMinimize.addEventListener('click', function() {
            chatbotContainer.classList.toggle('chatbot-minimized');
            
            // Cambiar el ícono según el estado
            const icon = this.querySelector('i');
            if (chatbotContainer.classList.contains('chatbot-minimized')) {
                icon.classList.remove('fa-window-minimize');
                icon.classList.add('fa-window-maximize');
                localStorage.setItem('chatbotMinimized', 'true');
            } else {
                icon.classList.remove('fa-window-maximize');
                icon.classList.add('fa-window-minimize');
                localStorage.setItem('chatbotMinimized', 'false');
            }
        });
    }
    
    // Toggle modo oscuro
    const chatbotDarkmode = document.getElementById('chatbot-darkmode');
    if (chatbotDarkmode) {
        chatbotDarkmode.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            updateDarkModeIcon();
            
            // Guardar preferencia
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
            
            // Enviar mensaje al iframe para sincronizar modo oscuro
            try {
                const iframe = document.querySelector('.content iframe');
                if (iframe && iframe.contentWindow) {
                    iframe.contentWindow.postMessage({
                        type: 'toggleDarkMode',
                        darkMode: document.body.classList.contains('dark-mode')
                    }, '*');
                }
            } catch (e) {
                console.error('Error al comunicarse con el iframe:', e);
            }
        });
        
        // Función para actualizar el ícono del modo oscuro
        function updateDarkModeIcon() {
            const icon = chatbotDarkmode.querySelector('i');
            if (document.body.classList.contains('dark-mode')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        }
    }
    
    // Implementar la funcionalidad del botón de configuración (engranaje)
    const chatbotSettings = document.getElementById('chatbot-settings');
    if (chatbotSettings) {
        // Crear panel de configuración si no existe
        let settingsPanel = document.getElementById('chatbot-settings-panel');
        if (!settingsPanel) {
            settingsPanel = document.createElement('div');
            settingsPanel.id = 'chatbot-settings-panel';
            settingsPanel.className = 'chatbot-settings-panel';
            
            // Contenido del panel de configuración - Removemos la sección de tamaño
            settingsPanel.innerHTML = `
                <div class="settings-header">
                    <h3>Configuración</h3>
                    <button class="settings-close"><i class="fas fa-times"></i></button>
                </div>
                <div class="settings-content">
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
            
            // Añadir el panel al contenedor del chatbot
            chatbotContainer.appendChild(settingsPanel);
            
            // Evento para cerrar el panel
            const closeSettingsBtn = settingsPanel.querySelector('.settings-close');
            closeSettingsBtn.addEventListener('click', function() {
                settingsPanel.style.display = 'none';
            });
            
            // Implementar cambio de tamaño de texto
            const fontSmallBtn = document.getElementById('font-size-small');
            const fontMediumBtn = document.getElementById('font-size-medium');
            const fontLargeBtn = document.getElementById('font-size-large');
            
            fontSmallBtn.addEventListener('click', function() {
                chatbotMessages.classList.remove('font-medium', 'font-large');
                chatbotMessages.classList.add('font-small');
                updateFontButtons('small');
                localStorage.setItem('chatbotFontSize', 'small');
            });
            
            fontMediumBtn.addEventListener('click', function() {
                chatbotMessages.classList.remove('font-small', 'font-large');
                chatbotMessages.classList.add('font-medium');
                updateFontButtons('medium');
                localStorage.setItem('chatbotFontSize', 'medium');
            });
            
            fontLargeBtn.addEventListener('click', function() {
                chatbotMessages.classList.remove('font-small', 'font-medium');
                chatbotMessages.classList.add('font-large');
                localStorage.setItem('chatbotFontSize', 'large');
            });
            
            function updateFontButtons(size) {
                fontSmallBtn.classList.remove('active');
                fontMediumBtn.classList.remove('active');
                fontLargeBtn.classList.remove('active');
                
                if (size === 'small') fontSmallBtn.classList.add('active');
                else if (size === 'large') fontLargeBtn.classList.add('active');
                else fontMediumBtn.classList.add('active');
            }
            
            // Implementar exportación del chat
            const exportChatBtn = document.getElementById('export-chat');
            exportChatBtn.addEventListener('click', function() {
                exportChatHistory();
            });
            
            // Implementar limpieza del chat
            const clearChatBtn = document.getElementById('clear-chat');
            clearChatBtn.addEventListener('click', function() {
                if (confirm('¿Estás seguro de que quieres borrar todo el historial del chat?')) {
                    clearChatHistory();
                }
            });
        }
        
        // Mostrar/ocultar el panel de configuración al hacer clic en el engranaje
        chatbotSettings.addEventListener('click', function() {
            if (settingsPanel.style.display === 'block') {
                settingsPanel.style.display = 'none';
            } else {
                settingsPanel.style.display = 'block';
            }
        });
    }
    
    // Enviar mensaje al pulsar Enter
    chatbotInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Enviar mensaje al hacer clic en el botón
    chatbotSendBtn.addEventListener('click', sendMessage);
    
    // Función para enviar mensaje con búsqueda integrada
    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (message === '') return;
        
        // Añadir mensaje del usuario
        addMessage(message, 'user');
        chatbotInput.value = '';
        
        // Mostrar indicador de escritura
        showTypingIndicator();
        
        // Ocultar sugerencias mientras se procesa
        const suggestionsContainer = document.getElementById('chatbot-suggestions');
        if (suggestionsContainer) {
            suggestionsContainer.style.display = 'none';
        }
        
        // Comprobar si es una búsqueda
        if (message.toLowerCase().startsWith('buscar ') || 
            message.toLowerCase().includes('busca ') || 
            message.toLowerCase().includes('encuentra ') ||
            message.toLowerCase().includes('buscame ')) {
            
            // Extraer término de búsqueda
            let searchTerm = message.toLowerCase()
                .replace('buscar ', '')
                .replace('busca ', '')
                .replace('encuentra ', '')
                .replace('buscame ', '')
                .replace('ejercicios de ', '')
                .replace('ejercicios sobre ', '')
                .trim();
            
            // Simular tiempo de respuesta
            setTimeout(() => {
                // Eliminar indicador de escritura
                removeTypingIndicator();
                
                // Realizar búsqueda
                performSearchFromChatbot(searchTerm);
            }, Math.random() * 800 + 800);
        } else {
            // Respuesta normal
            setTimeout(() => {
                // Eliminar indicador de escritura
                removeTypingIndicator();
                
                // Obtener respuesta del chatbot
                const response = getBotResponse(message);
                
                // Añadir respuesta del chatbot
                addMessage(response, 'bot');
                
                // Volver a mostrar sugerencias después de un tiempo
                setTimeout(() => {
                    if (suggestionsContainer) {
                        suggestionsContainer.style.display = 'flex';
                    }
                }, 1000);
            }, Math.random() * 800 + 800);
        }
    }
    
    // Función para realizar búsqueda desde el chatbot con mejor manejo de resultados
    function performSearchFromChatbot(searchTerm) {
        console.log("Realizando búsqueda desde chatbot:", searchTerm);
        
        // Verificamos que el término de búsqueda no esté vacío
        if (!searchTerm || searchTerm.trim() === '') {
            addMessage(`Por favor, indica qué quieres buscar. Por ejemplo: "buscar ejercicios de CSS"`, 'bot');
            return;
        }
        
        // Referencias a los elementos del sistema de búsqueda global
        const searchInput = document.getElementById('search-input');
        const searchButton = document.getElementById('search-button');
        
        // Verificar que todos los elementos necesarios existen
        if (!searchInput || !searchButton) {
            console.error("No se encontraron los elementos necesarios para la búsqueda");
            addMessage(`Lo siento, ha ocurrido un error con el sistema de búsqueda. Por favor, usa la barra de búsqueda directamente.`, 'bot');
            return;
        }
        
        try {
            // Mostrar mensaje de búsqueda en progreso
            addMessage(`Buscando "${searchTerm}"...`, 'bot');
            
            // Configurar un listener para capturar eventos de búsqueda completada
            const searchResultListener = function(event) {
                if (event.detail && event.detail.type === 'searchCompleted') {
                    // Remover el listener una vez recibido el evento
                    document.removeEventListener('searchResult', searchResultListener);
                    
                    const results = event.detail.results;
                    if (results.count > 0) {
                        // Construir mensaje con los resultados encontrados
                        let responseMsg = `He encontrado ${results.count} resultado${results.count === 1 ? '' : 's'} para "${results.term}":`;
                        
                        // Limitar a mostrar máximo 5 resultados en el chat
                        const maxResultsToShow = Math.min(results.count, 5);
                        responseMsg += "\n\n";
                        
                        for (let i = 0; i < maxResultsToShow; i++) {
                            responseMsg += `- ${results.items[i]}\n`;
                        }
                        
                        if (results.count > maxResultsToShow) {
                            responseMsg += `\nY ${results.count - maxResultsToShow} más...`;
                        }
                        
                        responseMsg += "\n\nPuedes ver todos los resultados en el panel de búsqueda central y guardarlos en marcadores.";
                        
                        // Reemplazar el mensaje "Buscando..." con los resultados
                        replaceLastBotMessage(responseMsg);
                    } else {
                        // Reemplazar el mensaje "Buscando..." con aviso de no resultados
                        replaceLastBotMessage(`He buscado "${searchTerm}" pero no he encontrado resultados. Intenta con otros términos o consulta el menú lateral.`);
                    }
                }
            };
            
            // Añadir evento personalizado para capturar resultados de búsqueda
            document.addEventListener('searchResult', searchResultListener);
            
            // Copiar término de búsqueda al input
            searchInput.value = searchTerm;
            searchInput.dispatchEvent(new Event('input', { bubbles: true }));
            
            // Limpiar resultados anteriores
            window.lastSearchResults = null;
            
            // Ejecutar la búsqueda
            if (typeof window.performSearch === 'function') {
                window.performSearch();
            } else {
                // Usar el botón directamente
                searchButton.click();
            }
            
            // Si después de 3 segundos no se recibió el evento, comprobar lastSearchResults
            setTimeout(() => {
                // Si ya se procesó el evento, no hacer nada
                const lastMsg = document.querySelector('.bot-message:last-child');
                if (lastMsg && lastMsg.textContent.includes(`Buscando "${searchTerm}"...`)) {
                    // Si hay resultados disponibles en window.lastSearchResults
                    if (window.lastSearchResults) {
                        const results = window.lastSearchResults;
                        if (results.count > 0) {
                            // Construir mensaje con los resultados encontrados
                            let responseMsg = `He encontrado ${results.count} resultado${results.count === 1 ? '' : 's'} para "${results.term}":`;
                            
                            // Limitar a mostrar máximo 5 resultados en el chat
                            const maxResultsToShow = Math.min(results.count, 5);
                            responseMsg += "\n\n";
                            
                            for (let i = 0; i < maxResultsToShow; i++) {
                                responseMsg += `- ${results.items[i]}\n`;
                            }
                            
                            if (results.count > maxResultsToShow) {
                                responseMsg += `\nY ${results.count - maxResultsToShow} más...`;
                            }
                            
                            responseMsg += "\n\nPuedes ver todos los resultados en el panel de búsqueda central.";
                            replaceLastBotMessage(responseMsg);
                        } else {
                            replaceLastBotMessage(`He buscado "${searchTerm}" pero no he encontrado resultados. Intenta con otros términos o consulta el menú lateral.`);
                        }
                    } else {
                        // Verificar si hay resultados visibles en el modal
                        const searchOverlay = document.getElementById('search-overlay');
                        if (searchOverlay && window.getComputedStyle(searchOverlay).display === 'flex') {
                            const contentDiv = document.getElementById('search-results-content');
                            if (contentDiv) {
                                const resultItems = contentDiv.querySelectorAll('.search-result-item');
                                const noResultsMsg = contentDiv.querySelector('.search-no-results');
                                
                                if (resultItems.length > 0) {
                                    let responseMsg = `He encontrado ${resultItems.length} resultado${resultItems.length === 1 ? '' : 's'} para "${searchTerm}":`;
                                    
                                    const maxResultsToShow = Math.min(resultItems.length, 5);
                                    responseMsg += "\n\n";
                                    
                                    for (let i = 0; i < maxResultsToShow; i++) {
                                        const titleEl = resultItems[i].querySelector('.result-title');
                                        responseMsg += `- ${titleEl ? titleEl.textContent.trim() : `Resultado ${i+1}`}\n`;
                                    }
                                    
                                    if (resultItems.length > maxResultsToShow) {
                                        responseMsg += `\nY ${resultItems.length - maxResultsToShow} más...`;
                                    }
                                    
                                    responseMsg += "\n\nPuedes ver todos los resultados en el panel de búsqueda central.";
                                    replaceLastBotMessage(responseMsg);
                                } else if (noResultsMsg) {
                                    replaceLastBotMessage(`He buscado "${searchTerm}" pero no he encontrado resultados. Intenta con otros términos o consulta el menú lateral.`);
                                } else {
                                    replaceLastBotMessage(`He realizado la búsqueda de "${searchTerm}". Por favor, verifica los resultados en el panel central.`);
                                }
                            } else {
                                replaceLastBotMessage(`He realizado la búsqueda de "${searchTerm}". Por favor, verifica los resultados en el panel central.`);
                            }
                        } else {
                            // Mensaje genérico si no se puede determinar
                            replaceLastBotMessage(`He realizado la búsqueda de "${searchTerm}". Por favor, verifica los resultados en el panel de búsqueda.`);
                        }
                    }
                }
                
                // Remover el listener
                document.removeEventListener('searchResult', searchResultListener);
            }, 3000);
        } catch (error) {
            console.error("Error al realizar la búsqueda:", error);
            addMessage(`Lo siento, ocurrió un error al buscar "${searchTerm}". Por favor, intenta usar la barra de búsqueda directamente.`, 'bot');
        }
    }
    
    // Función para reemplazar el último mensaje del bot
    function replaceLastBotMessage(newText) {
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
    }
    
    // Corregir la inicialización del panel de configuración para asegurar que los botones funcionen
    document.addEventListener('DOMContentLoaded', function() {
        // Verificar si el botón de configuración existe y añadir listeners de eventos específicos
        const chatbotSettings = document.getElementById('chatbot-settings');
        if (chatbotSettings) {
            // Crear panel de configuración si no existe
            let settingsPanel = document.getElementById('chatbot-settings-panel');
            if (!settingsPanel) {
                settingsPanel = document.createElement('div');
                settingsPanel.id = 'chatbot-settings-panel';
                settingsPanel.className = 'chatbot-settings-panel';
                
                // Contenido del panel de configuración - Removemos la sección de tamaño
                settingsPanel.innerHTML = `
                    <div class="settings-header">
                        <h3>Configuración</h3>
                        <button class="settings-close"><i class="fas fa-times"></i></button>
                    </div>
                    <div class="settings-content">
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
                
                // Añadir el panel al contenedor del chatbot
                chatbotContainer.appendChild(settingsPanel);
                
                // Evento para cerrar el panel
                const closeSettingsBtn = settingsPanel.querySelector('.settings-close');
                closeSettingsBtn.addEventListener('click', function() {
                    settingsPanel.style.display = 'none';
                });
                
                // Implementar cambio de tamaño de texto
                const fontSmallBtn = document.getElementById('font-size-small');
                const fontMediumBtn = document.getElementById('font-size-medium');
                const fontLargeBtn = document.getElementById('font-size-large');
                
                fontSmallBtn.addEventListener('click', function() {
                    chatbotMessages.classList.remove('font-medium', 'font-large');
                    chatbotMessages.classList.add('font-small');
                    updateFontButtons('small');
                    localStorage.setItem('chatbotFontSize', 'small');
                });
                
                fontMediumBtn.addEventListener('click', function() {
                    chatbotMessages.classList.remove('font-small', 'font-large');
                    chatbotMessages.classList.add('font-medium');
                    updateFontButtons('medium');
                    localStorage.setItem('chatbotFontSize', 'medium');
                });
                
                fontLargeBtn.addEventListener('click', function() {
                    chatbotMessages.classList.remove('font-small', 'font-medium');
                    chatbotMessages.classList.add('font-large');
                    localStorage.setItem('chatbotFontSize', 'large');
                });
                
                function updateFontButtons(size) {
                    fontSmallBtn.classList.remove('active');
                    fontMediumBtn.classList.remove('active');
                    fontLargeBtn.classList.remove('active');
                    
                    if (size === 'small') fontSmallBtn.classList.add('active');
                    else if (size === 'large') fontLargeBtn.classList.add('active');
                    else fontMediumBtn.classList.add('active');
                }
                
                // Implementar exportación del chat
                const exportChatBtn = document.getElementById('export-chat');
                exportChatBtn.addEventListener('click', function() {
                    exportChatHistory();
                });
                
                // Implementar limpieza del chat
                const clearChatBtn = document.getElementById('clear-chat');
                clearChatBtn.addEventListener('click', function() {
                    if (confirm('¿Estás seguro de que quieres borrar todo el historial del chat?')) {
                        clearChatHistory();
                    }
                });
            }
            
            // Mostrar/ocultar el panel de configuración al hacer clic en el engranaje
            chatbotSettings.addEventListener('click', function() {
                if (settingsPanel.style.display === 'block') {
                    settingsPanel.style.display = 'none';
                } else {
                    settingsPanel.style.display = 'block';
                }
            });
        }
    });
});

// Enviar mensaje al pulsar Enter
chatbotInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Enviar mensaje al hacer clic en el botón
chatbotSendBtn.addEventListener('click', sendMessage);

// Función para enviar mensaje con búsqueda integrada
function sendMessage() {
    const message = chatbotInput.value.trim();
    if (message === '') return;
    
    // Añadir mensaje del usuario
    addMessage(message, 'user');
    chatbotInput.value = '';
    
    // Mostrar indicador de escritura
    showTypingIndicator();
    
    // Ocultar sugerencias mientras se procesa
    const suggestionsContainer = document.getElementById('chatbot-suggestions');
    if (suggestionsContainer) {
        suggestionsContainer.style.display = 'none';
    }
    
    // Comprobar si es una búsqueda
    if (message.toLowerCase().startsWith('buscar ') || 
        message.toLowerCase().includes('busca ') || 
        message.toLowerCase().includes('encuentra ') ||
        message.toLowerCase().includes('buscame ')) {
        
        // Extraer término de búsqueda
        let searchTerm = message.toLowerCase()
            .replace('buscar ', '')
            .replace('busca ', '')
            .replace('encuentra ', '')
            .replace('buscame ', '')
            .replace('ejercicios de ', '')
            .replace('ejercicios sobre ', '')
            .trim();
        
        // Simular tiempo de respuesta
        setTimeout(() => {
            // Eliminar indicador de escritura
            removeTypingIndicator();
            
            // Realizar búsqueda
            performSearchFromChatbot(searchTerm);
        }, Math.random() * 800 + 800);
    } else {
        // Respuesta normal
        setTimeout(() => {
            // Eliminar indicador de escritura
            removeTypingIndicator();
            
            // Obtener respuesta del chatbot
            const response = getBotResponse(message);
            
            // Añadir respuesta del chatbot
            addMessage(response, 'bot');
            
            // Volver a mostrar sugerencias después de un tiempo
            setTimeout(() => {
                if (suggestionsContainer) {
                    suggestionsContainer.style.display = 'flex';
                }
            }, 1000);
        }, Math.random() * 800 + 800);
    }
}

// Función para realizar búsqueda desde el chatbot con mejor manejo de resultados
function performSearchFromChatbot(searchTerm) {
    console.log("Realizando búsqueda desde chatbot:", searchTerm);
    
    // Verificamos que el término de búsqueda no esté vacío
    if (!searchTerm || searchTerm.trim() === '') {
        addMessage(`Por favor, indica qué quieres buscar. Por ejemplo: "buscar ejercicios de CSS"`, 'bot');
        return;
    }
    
    // Referencias a los elementos del sistema de búsqueda global
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    
    // Verificar que todos los elementos necesarios existen
    if (!searchInput || !searchButton) {
        console.error("No se encontraron los elementos necesarios para la búsqueda");
        addMessage(`Lo siento, ha ocurrido un error con el sistema de búsqueda. Por favor, usa la barra de búsqueda directamente.`, 'bot');
        return;
    }
    
    try {
        // Mostrar mensaje de búsqueda en progreso
        addMessage(`Buscando "${searchTerm}"...`, 'bot');
        
        // Configurar un listener para capturar eventos de búsqueda completada
        const searchResultListener = function(event) {
            if (event.detail && event.detail.type === 'searchCompleted') {
                // Remover el listener una vez recibido el evento
                document.removeEventListener('searchResult', searchResultListener);
                
                const results = event.detail.results;
                if (results.count > 0) {
                    // Construir mensaje con los resultados encontrados
                    let responseMsg = `He encontrado ${results.count} resultado${results.count === 1 ? '' : 's'} para "${results.term}":`;
                    
                    // Limitar a mostrar máximo 5 resultados en el chat
                    const maxResultsToShow = Math.min(results.count, 5);
                    responseMsg += "\n\n";
                    
                    for (let i = 0; i < maxResultsToShow; i++) {
                        responseMsg += `- ${results.items[i]}\n`;
                    }
                    
                    if (results.count > maxResultsToShow) {
                        responseMsg += `\nY ${results.count - maxResultsToShow} más...`;
                    }
                    
                    responseMsg += "\n\nPuedes ver todos los resultados en el panel de búsqueda central y guardarlos en marcadores.";
                    
                    // Reemplazar el mensaje "Buscando..." con los resultados
                    replaceLastBotMessage(responseMsg);
                } else {
                    // Reemplazar el mensaje "Buscando..." con aviso de no resultados
                    replaceLastBotMessage(`He buscado "${searchTerm}" pero no he encontrado resultados. Intenta con otros términos o consulta el menú lateral.`);
                }
            }
        };
        
        // Añadir evento personalizado para capturar resultados de búsqueda
        document.addEventListener('searchResult', searchResultListener);
        
        // Copiar término de búsqueda al input
        searchInput.value = searchTerm;
        searchInput.dispatchEvent(new Event('input', { bubbles: true }));
        
        // Limpiar resultados anteriores
        window.lastSearchResults = null;
        
        // Ejecutar la búsqueda
        if (typeof window.performSearch === 'function') {
            window.performSearch();
        } else {
            // Usar el botón directamente
            searchButton.click();
        }
        
        // Si después de 3 segundos no se recibió el evento, comprobar lastSearchResults
        setTimeout(() => {
            // Si ya se procesó el evento, no hacer nada
            const lastMsg = document.querySelector('.bot-message:last-child');
            if (lastMsg && lastMsg.textContent.includes(`Buscando "${searchTerm}"...`)) {
                // Si hay resultados disponibles en window.lastSearchResults
                if (window.lastSearchResults) {
                    const results = window.lastSearchResults;
                    if (results.count > 0) {
                        // Construir mensaje con los resultados encontrados
                        let responseMsg = `He encontrado ${results.count} resultado${results.count === 1 ? '' : 's'} para "${results.term}":`;
                        
                        // Limitar a mostrar máximo 5 resultados en el chat
                        const maxResultsToShow = Math.min(results.count, 5);
                        responseMsg += "\n\n";
                        
                        for (let i = 0; i < maxResultsToShow; i++) {
                            responseMsg += `- ${results.items[i]}\n`;
                        }
                        
                        if (results.count > maxResultsToShow) {
                            responseMsg += `\nY ${results.count - maxResultsToShow} más...`;
                        }
                        
                        responseMsg += "\n\nPuedes ver todos los resultados en el panel de búsqueda central.";
                        replaceLastBotMessage(responseMsg);
                    } else {
                        replaceLastBotMessage(`He buscado "${searchTerm}" pero no he encontrado resultados. Intenta con otros términos o consulta el menú lateral.`);
                    }
                } else {
                    // Verificar si hay resultados visibles en el modal
                    const searchOverlay = document.getElementById('search-overlay');
                    if (searchOverlay && window.getComputedStyle(searchOverlay).display === 'flex') {
                        const contentDiv = document.getElementById('search-results-content');
                        if (contentDiv) {
                            const resultItems = contentDiv.querySelectorAll('.search-result-item');
                            const noResultsMsg = contentDiv.querySelector('.search-no-results');
                            
                            if (resultItems.length > 0) {
                                let responseMsg = `He encontrado ${resultItems.length} resultado${resultItems.length === 1 ? '' : 's'} para "${searchTerm}":`;
                                
                                const maxResultsToShow = Math.min(resultItems.length, 5);
                                responseMsg += "\n\n";
                                
                                for (let i = 0; i < maxResultsToShow; i++) {
                                    const titleEl = resultItems[i].querySelector('.result-title');
                                    responseMsg += `- ${titleEl ? titleEl.textContent.trim() : `Resultado ${i+1}`}\n`;
                                }
                                
                                if (resultItems.length > maxResultsToShow) {
                                    responseMsg += `\nY ${resultItems.length - maxResultsToShow} más...`;
                                }
                                
                                responseMsg += "\n\nPuedes ver todos los resultados en el panel de búsqueda central.";
                                replaceLastBotMessage(responseMsg);
                            } else if (noResultsMsg) {
                                replaceLastBotMessage(`He buscado "${searchTerm}" pero no he encontrado resultados. Intenta con otros términos o consulta el menú lateral.`);
                            } else {
                                replaceLastBotMessage(`He realizado la búsqueda de "${searchTerm}". Por favor, verifica los resultados en el panel central.`);
                            }
                        } else {
                            replaceLastBotMessage(`He realizado la búsqueda de "${searchTerm}". Por favor, verifica los resultados en el panel central.`);
                        }
                    } else {
                        // Mensaje genérico si no se puede determinar
                        replaceLastBotMessage(`He realizado la búsqueda de "${searchTerm}". Por favor, verifica los resultados en el panel de búsqueda.`);
                    }
                }
            }
            
            // Remover el listener
            document.removeEventListener('searchResult', searchResultListener);
        }, 3000);
    } catch (error) {
        console.error("Error al realizar la búsqueda:", error);
        addMessage(`Lo siento, ocurrió un error al buscar "${searchTerm}". Por favor, intenta usar la barra de búsqueda directamente.`, 'bot');
    }
}

// Función para reemplazar el último mensaje del bot
function replaceLastBotMessage(newText) {
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
}