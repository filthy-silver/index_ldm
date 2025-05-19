/**
 * chatbot-data.js - Base de conocimientos y configuraciones del chatbot
 */

// Estructura de datos global para el chatbot
window.chatbotData = {
    // Respuestas predefinidas para diferentes temas
    knowledge: [
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
        }
    ],
    
    // Respuestas cuando no se encuentra coincidencia
    fallback: [
        'Lo siento, no entiendo tu pregunta. ¿Podrías reformularla?',
        'No tengo información sobre eso. ¿Puedo ayudarte con algo relacionado con el curso de Lenguajes de Marcas?',
        'Disculpa, no tengo respuesta para eso. Prueba a preguntar sobre HTML, CSS, JavaScript o WordPress.',
        'No estoy seguro de entender tu pregunta. ¿Quieres saber algo sobre los ejercicios del curso?'
    ],
    
    // Sugerencias de preguntas para mostrar al usuario
    suggestions: {
        initial: ["Ejemplo de HTML", "Buscar ejercicios", "¿Cuándo termina el curso?"],
        secondary: ["Ejemplo de CSS", "¿Qué es XML?", "Ayuda chat"]
    },
    
    // Configuración de la interfaz
    ui: {
        typingDelay: { min: 500, max: 1500 },
        messageHistoryMax: 50
    }
};