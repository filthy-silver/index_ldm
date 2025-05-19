/**
 * chatbot-data.js - Base de conocimientos y configuraciones del chatbot
 */

// Estructura de datos global para el chatbot
window.chatbotData = {
    // Respuestas predefinidas para diferentes temas
    knowledge: [
        {
            keywords: ['hola', 'buenas', 'saludos', 'hey', 'que tal', 'qué tal'],
            responses: [
                '¡Hola! ¿En qué puedo ayudarte hoy con Lenguajes de Marcas?',
                '¡Buenas! Estoy aquí para resolver tus dudas sobre el curso. ¿Qué necesitas?',
                '¡Saludos! ¿Tienes alguna pregunta sobre HTML, CSS, XML o WordPress?',
                '¡Hola! Listo para ayudarte con tus consultas del curso.'
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
        // Ejemplos de código
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
            keywords: ['xml', 'xsd', 'dtd', 'validación', 'esquema'],
            responses: [
                'XML (Extensible Markup Language) se usa para almacenar y transportar datos. Los DTD y XSD se utilizan para definir la estructura y validar documentos XML.',
                'En el tercer trimestre profundizamos en XML, DTDs y XSDs. Revisa los ejercicios de la RA4.',
                'La validación XML asegura que el documento cumple con las reglas definidas en su DTD o XSD. Es crucial para la integridad de los datos.'
            ]
        },
        {
            keywords: ['xpath', 'xslt', 'xsl'],
            responses: [
                'XPath es un lenguaje para navegar por elementos y atributos en un documento XML.',
                'XSLT se usa para transformar documentos XML en otros formatos, como HTML. Utiliza XPath para seleccionar partes del XML.',
                'Los ejercicios de la RA5 cubren XSLT y XPath. Son herramientas poderosas para trabajar con XML.'
            ]
        },
        {
            keywords: ['ayuda', 'comandos', 'qué puedes hacer', 'funciones', 'capacidades'],
            responses: [
                `Puedo ayudarte con varias cosas:
                - Responder preguntas sobre HTML, CSS, JavaScript, XML, WordPress y otros temas del curso.
                - Mostrarte ejemplos de código (ej. "ejemplo html", "código css").
                - Buscar ejercicios o temas específicos (ej. "buscar tablas", "encuentra ejercicios de flexbox").
                - Darte información sobre fechas importantes y la estructura del curso.
                ¡Prueba a preguntarme algo!`
            ]
        },
        {
            keywords: ['profesor', 'tutor', 'contacto'],
            responses: [
                'Si necesitas contactar con el profesor, puedes hacerlo a través de la plataforma del curso o durante las horas de tutoría.',
                'Para dudas complejas o personales, es mejor que contactes directamente con tu profesor.'
            ]
        },
        {
            keywords: ['trimestre 1', 'primer trimestre'],
            responses: [
                'El primer trimestre se centra en HTML y CSS fundamental, incluyendo selectores, Flexbox, formularios y tablas.',
                'Puedes encontrar los ejercicios del primer trimestre en el menú lateral, bajo "Trimestre 1".'
            ]
        },
        {
            keywords: ['trimestre 2', 'segundo trimestre'],
            responses: [
                'El segundo trimestre cubre WordPress y Sistemas de Gestión Empresarial (SaaS).',
                'Los materiales y ejercicios del segundo trimestre están disponibles en la sección "Trimestre 2" del menú.'
            ]
        },
        {
            keywords: ['trimestre 3', 'tercer trimestre'],
            responses: [
                'El tercer trimestre está dedicado a XML, DTD, XSD, XPath y XSLT.',
                'Accede a los contenidos del tercer trimestre desde la opción "Trimestre 3" en el menú lateral.'
            ]
        },
        {
            keywords: ['turbo asistente', 'asistente turbo', 'modo turbo', 'abrir turbo'],
            responses: [
                'Activando el Turbo Asistente. Un momento...',
                'Claro, abriendo el Turbo Asistente para ti.'
            ],
            action: 'openTurboAsistente' // Acción especial para abrir el modal
        },
        {
            keywords: ['recursos', 'aprender más', 'webs útiles', 'enlaces'],
            responses: [
                `Claro, aquí tienes algunos recursos útiles:
                 <br> - <a href="https://www.w3schools.com" target="_blank">W3Schools</a>
                 <br> - <a href="https://developer.mozilla.org" target="_blank">MDN Web Docs</a>
                 <br> - Para dudas específicas, ¡pregúntame!`,
                'Te recomiendo visitar <a href="https://css-tricks.com" target="_blank">CSS-Tricks</a> para temas de CSS y <a href="https://stackoverflow.com" target="_blank">Stack Overflow</a> para preguntas de programación.'
            ]
        }
    ],
    
    // Respuestas cuando no se encuentra coincidencia
    fallback: [
        'Lo siento, no he entendido bien tu pregunta. ¿Podrías reformularla o ser más específico?',
        'No tengo información sobre eso en este momento. Intenta preguntar sobre temas del curso como HTML, CSS, XML, o busca un ejercicio específico.',
        'Mmm, eso se escapa un poco de lo que sé. ¿Quizás puedas preguntar de otra manera? También puedes escribir "ayuda chat" para ver qué puedo hacer.',
        'No estoy seguro de cómo responder a eso. ¿Tiene que ver con los ejercicios, WordPress, HTML, CSS o XML?'
    ],
    
    // Sugerencias de preguntas para mostrar al usuario
    suggestions: {
        initial: ["Ejemplo de HTML", "Buscar ejercicios CSS", "¿Qué es XML?", "Ayuda chat", "Modo Turbo"], // Añadida sugerencia para Turbo
        secondary: ["Ejemplo de CSS", "Ejemplo de Flexbox", "Buscar WordPress", "¿Cuándo termina el curso?"]
    },
    
    // Configuración de la interfaz
    ui: {
        typingDelay: { min: 500, max: 1500 },
        messageHistoryMax: 50,
        maxSuggestionsInitial: 4, // Ajustado para mostrar más sugerencias si se desea
        maxSuggestionsContextual: 3,
        turboAsistenteURL: 'guia-chatbot.html' // URL para el iframe del Turbo Asistente (ejemplo)
    }
};