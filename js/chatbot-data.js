/**
 * chatbot-data.js - Base de conocimientos y configuraciones del chatbot
 */

// Estructura de datos global para el chatbot
window.chatbotData = {
    // Respuestas para mensajes de error específicos
    errors: {
        notFound: [
            "No encontré información sobre eso. ¿Podrías preguntar sobre HTML, CSS, XML u otros temas del curso?",
            "No tengo datos sobre ese tema. Prueba a preguntar sobre ejercicios, fechas del curso o ejemplos de código.",
            "No puedo responder a eso. ¿Quizás quieres ver un ejemplo de HTML o CSS?"
        ],
        malformed: [
            "No entendí bien tu pregunta. ¿Puedes reformularla?",
            "No estoy seguro de lo que me pides. ¿Podrías preguntar de otra manera?",
            "Parece que hay un problema para entender tu consulta. Intenta usar otras palabras."
        ]
    },

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
            keywords: ['html ejemplo', 'ejemplo html', 'código html', 'template html', 'ejemplo de html', 'dame html', 'muestra html', 'enseñame html', 'ver html'],
            responses: [
                `Aquí tienes un ejemplo básico de HTML:
                \`\`\`html
                <!DOCTYPE html>
                <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <title>Mi página web</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="estilo.css">
                </head>
                <body>
                    <header>
                        <h1>Mi Sitio Web</h1>
                        <nav>
                            <ul>
                                <li><a href="#inicio">Inicio</a></li>
                                <li><a href="#acerca">Acerca de</a></li>
                                <li><a href="#contacto">Contacto</a></li>
                            </ul>
                        </nav>
                    </header>
                    <main>
                        <section id="inicio">
                            <h2>Bienvenido a mi sitio</h2>
                            <p>Este es un ejemplo de estructura HTML5 semántica.</p>
                        </section>
                        <section id="acerca">
                            <h2>Acerca de</h2>
                            <p>Información sobre el sitio y su creador.</p>
                        </section>
                        <section id="contacto">
                            <h2>Contacto</h2>
                            <form>
                                <label for="nombre">Nombre:</label>
                                <input type="text" id="nombre" name="nombre" required>
                                <label for="email">Email:</label>
                                <input type="email" id="email" name="email" required>
                                <button type="submit">Enviar</button>
                            </form>
                        </section>
                    </main>
                    <footer>
                        <p>&copy; 2024 Mi Sitio Web</p>
                    </footer>
                </body>
                </html>
                \`\`\``,
                
                `Este es un ejemplo de una tabla HTML con estructura completa:
                \`\`\`html
                <table border="1">
                    <caption>Horario de Clases</caption>
                    <thead>
                        <tr>
                            <th>Hora</th>
                            <th>Lunes</th>
                            <th>Martes</th>
                            <th>Miércoles</th>
                            <th>Jueves</th>
                            <th>Viernes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>8:00-9:00</td>
                            <td rowspan="2">Lenguajes de Marcas</td>
                            <td>Bases de Datos</td>
                            <td>Programación</td>
                            <td colspan="2">Entornos de Desarrollo</td>
                        </tr>
                        <tr>
                            <td>9:00-10:00</td>
                            <td>Sistemas Informáticos</td>
                            <td>Bases de Datos</td>
                            <td>Lenguajes de Marcas</td>
                            <td>Programación</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="6">Horario del primer semestre</td>
                        </tr>
                    </tfoot>
                </table>
                \`\`\``
            ]
        },
        {
            keywords: ['css ejemplo', 'ejemplo css', 'código css', 'estilos css'],
            responses: [
                `Aquí tienes un ejemplo de CSS para diseño responsive:
                \`\`\`css
                /* Variables CSS para tema consistente */
                :root {
                    --color-primary: #3498db;
                    --color-secondary: #2ecc71;
                    --color-dark: #333333;
                    --color-light: #f8f9fa;
                    --font-main: 'Segoe UI', Arial, sans-serif;
                }

                body {
                    font-family: var(--font-main);
                    line-height: 1.6;
                    color: var(--color-dark);
                    margin: 0;
                    padding: 0;
                    background-color: var(--color-light);
                }

                .container {
                    width: 100%;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 15px;
                }

                header {
                    background-color: var(--color-primary);
                    color: white;
                    padding: 1rem 0;
                }

                /* Diseño responsive */
                @media (max-width: 768px) {
                    .container {
                        padding: 0 10px;
                    }
                    
                    header {
                        padding: 0.5rem 0;
                    }
                }

                @media (max-width: 480px) {
                    body {
                        font-size: 14px;
                    }
                }
                \`\`\``,

                `Ejemplo de animación y transición con CSS:
                \`\`\`css
                .btn {
                    padding: 10px 20px;
                    background-color: #3498db;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .btn:hover {
                    background-color: #2980b9;
                    transform: translateY(-3px);
                    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                .animated {
                    animation: fadeIn 1s ease-out;
                }

                /* Ejemplo de transición al hacer scroll */
                .reveal {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.6s ease, transform 0.6s ease;
                }

                .reveal.active {
                    opacity: 1;
                    transform: translateY(0);
                }
                \`\`\``
            ]
        },
        {
            keywords: ['flexbox ejemplo', 'ejemplo flexbox', 'css flexbox'],
            responses: [
                `Aquí tienes un ejemplo completo de FlexBox para una tarjeta de producto:
                \`\`\`css
                .productos-container {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                    justify-content: center;
                }

                .producto-card {
                    display: flex;
                    flex-direction: column;
                    width: 300px;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                }

                .producto-imagen {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                }

                .producto-info {
                    padding: 15px;
                    display: flex;
                    flex-direction: column;
                    flex-grow: 1;
                }

                .producto-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px 15px;
                    background-color: #f8f9fa;
                    border-top: 1px solid #eee;
                }

                .precio {
                    font-weight: bold;
                    font-size: 1.2em;
                }

                .btn-comprar {
                    padding: 8px 15px;
                    background-color: #3498db;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }
                \`\`\`

                Aquí está el HTML para usar con ese CSS:

                \`\`\`html
                <div class="productos-container">
                    <div class="producto-card">
                        <img src="producto1.jpg" alt="Producto 1" class="producto-imagen">
                        <div class="producto-info">
                            <h3>Cámara Digital</h3>
                            <p>Cámara digital de alta resolución con zoom óptico 10x.</p>
                        </div>
                        <div class="producto-footer">
                            <span class="precio">299.99€</span>
                            <button class="btn-comprar">Comprar</button>
                        </div>
                    </div>
                    <!-- Más productos aquí -->
                </div>
                \`\`\``
            ]
        },
        {
            keywords: ['css grid', 'ejemplo grid', 'grid layout'],
            responses: [
                `Aquí tienes un ejemplo de CSS Grid para crear un layout de página completo:
                \`\`\`css
                body {
                    display: grid;
                    grid-template-areas:
                        "header header header"
                        "nav content sidebar"
                        "footer footer footer";
                    grid-template-columns: 200px 1fr 200px;
                    grid-template-rows: auto 1fr auto;
                    min-height: 100vh;
                    margin: 0;
                    gap: 10px;
                    padding: 10px;
                    box-sizing: border-box;
                }

                header {
                    grid-area: header;
                    background-color: #3498db;
                    padding: 20px;
                    color: white;
                }

                nav {
                    grid-area: nav;
                    background-color: #2ecc71;
                    padding: 20px;
                }

                main {
                    grid-area: content;
                    background-color: #f8f9fa;
                    padding: 20px;
                }

                aside {
                    grid-area: sidebar;
                    background-color: #f0f0f0;
                    padding: 20px;
                }

                footer {
                    grid-area: footer;
                    background-color: #34495e;
                    padding: 20px;
                    color: white;
                }

                /* Diseño responsive con Grid */
                @media (max-width: 768px) {
                    body {
                        grid-template-areas:
                            "header"
                            "nav"
                            "content"
                            "sidebar"
                            "footer";
                        grid-template-columns: 1fr;
                        grid-template-rows: auto auto 1fr auto auto;
                    }
                }
                \`\`\`

                El HTML correspondiente sería:

                \`\`\`html
                <body>
                    <header>Cabecera del sitio</header>
                    <nav>Menú de navegación</nav>
                    <main>Contenido principal</main>
                    <aside>Barra lateral</aside>
                    <footer>Pie de página</footer>
                </body>
                \`\`\``
            ]
        },
        {
            keywords: ['xml ejemplo', 'ejemplo xml', 'código xml', 'xml básico'],
            responses: [
                `Aquí tienes un ejemplo de documento XML para una biblioteca:
                \`\`\`xml
                <?xml version="1.0" encoding="UTF-8"?>
                <biblioteca>
                    <libro categoria="novela" id="L001">
                        <titulo>Don Quijote de la Mancha</titulo>
                        <autor>
                            <nombre>Miguel</nombre>
                            <apellido>de Cervantes</apellido>
                            <nacionalidad>Española</nacionalidad>
                        </autor>
                        <anyo>1605</anyo>
                        <editorial>Juan de la Cuesta</editorial>
                        <paginas>863</paginas>
                        <disponible>true</disponible>
                    </libro>
                    <libro categoria="ciencia-ficcion" id="L002">
                        <titulo>Dune</titulo>
                        <autor>
                            <nombre>Frank</nombre>
                            <apellido>Herbert</apellido>
                            <nacionalidad>Estadounidense</nacionalidad>
                        </autor>
                        <anyo>1965</anyo>
                        <editorial>Chilton Books</editorial>
                        <paginas>412</paginas>
                        <disponible>false</disponible>
                    </libro>
                </biblioteca>
                \`\`\``
            ]
        },
        {
            keywords: ['dtd ejemplo', 'ejemplo dtd', 'xml dtd'],
            responses: [
                `Aquí tienes un ejemplo de XML con DTD interno:
                \`\`\`xml
                <?xml version="1.0" encoding="UTF-8"?>
                <!DOCTYPE biblioteca [
                    <!ELEMENT biblioteca (libro+)>
                    <!ELEMENT libro (titulo, autor, anyo, editorial?, paginas?, disponible?)>
                    <!ATTLIST libro 
                        categoria CDATA #REQUIRED
                        id ID #REQUIRED>
                    <!ELEMENT titulo (#PCDATA)>
                    <!ELEMENT autor (nombre, apellido, nacionalidad?)>
                    <!ELEMENT nombre (#PCDATA)>
                    <!ELEMENT apellido (#PCDATA)>
                    <!ELEMENT nacionalidad (#PCDATA)>
                    <!ELEMENT anyo (#PCDATA)>
                    <!ELEMENT editorial (#PCDATA)>
                    <!ELEMENT paginas (#PCDATA)>
                    <!ELEMENT disponible (#PCDATA)>
                ]>
                <biblioteca>
                    <libro categoria="novela" id="L001">
                        <titulo>Don Quijote de la Mancha</titulo>
                        <autor>
                            <nombre>Miguel</nombre>
                            <apellido>de Cervantes</apellido>
                            <nacionalidad>Española</nacionalidad>
                        </autor>
                        <anyo>1605</anyo>
                        <editorial>Juan de la Cuesta</editorial>
                        <paginas>863</paginas>
                        <disponible>true</disponible>
                    </libro>
                </biblioteca>
                \`\`\``,

                `Ejemplo de DTD externo para validar un XML de alumnos:
                \`\`\`dtd
                <!-- alumnos.dtd -->
                <!ELEMENT alumnos (alumno+)>
                <!ELEMENT alumno (nombre, apellidos, email?, telefono?, calificaciones)>
                <!ATTLIST alumno 
                    id ID #REQUIRED
                    curso CDATA #REQUIRED>
                <!ELEMENT nombre (#PCDATA)>
                <!ELEMENT apellidos (#PCDATA)>
                <!ELEMENT email (#PCDATA)>
                <!ELEMENT telefono (#PCDATA)>
                <!ELEMENT calificaciones (asignatura+)>
                <!ELEMENT asignatura (nombre, nota)>
                <!ATTLIST asignatura 
                    codigo CDATA #REQUIRED>
                <!ELEMENT nota (#PCDATA)>
                \`\`\`

                Y así se usaría en un documento XML:
                
                \`\`\`xml
                <?xml version="1.0" encoding="UTF-8"?>
                <!DOCTYPE alumnos SYSTEM "alumnos.dtd">
                <alumnos>
                    <alumno id="A001" curso="1DAW">
                        <nombre>Ana</nombre>
                        <apellidos>García López</apellidos>
                        <email>ana.garcia@ejemplo.com</email>
                        <calificaciones>
                            <asignatura codigo="LM">
                                <nombre>Lenguajes de Marcas</nombre>
                                <nota>8.5</nota>
                            </asignatura>
                            <asignatura codigo="PROG">
                                <nombre>Programación</nombre>
                                <nota>7.8</nota>
                            </asignatura>
                        </calificaciones>
                    </alumno>
                </alumnos>
                \`\`\``
            ]
        },
        {
            keywords: ['xsd ejemplo', 'ejemplo xsd', 'xml schema', 'schema xml'],
            responses: [
                `Aquí tienes un ejemplo de XML Schema (XSD):
                \`\`\`xml
                <?xml version="1.0" encoding="UTF-8"?>
                <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

                  <!-- Definición del elemento raíz -->
                  <xs:element name="biblioteca">
                    <xs:complexType>
                      <xs:sequence>
                        <xs:element name="libro" maxOccurs="unbounded">
                          <xs:complexType>
                            <xs:sequence>
                              <xs:element name="titulo" type="xs:string"/>
                              <xs:element name="autor">
                                <xs:complexType>
                                  <xs:sequence>
                                    <xs:element name="nombre" type="xs:string"/>
                                    <xs:element name="apellido" type="xs:string"/>
                                    <xs:element name="nacionalidad" type="xs:string" minOccurs="0"/>
                                  </xs:sequence>
                                </xs:complexType>
                              </xs:element>
                              <xs:element name="anyo" type="xs:integer"/>
                              <xs:element name="editorial" type="xs:string" minOccurs="0"/>
                              <xs:element name="paginas" type="xs:positiveInteger" minOccurs="0"/>
                              <xs:element name="disponible" type="xs:boolean" minOccurs="0"/>
                            </xs:sequence>
                            <xs:attribute name="id" type="xs:ID" use="required"/>
                            <xs:attribute name="categoria" type="xs:string" use="required"/>
                          </xs:complexType>
                        </xs:element>
                      </xs:sequence>
                    </xs:complexType>
                  </xs:element>
                
                </xs:schema>
                \`\`\`

                Y así es como se referencia en un documento XML:

                \`\`\`xml
                <?xml version="1.0" encoding="UTF-8"?>
                <biblioteca
                  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                  xsi:noNamespaceSchemaLocation="biblioteca.xsd">
                  
                  <libro id="L001" categoria="novela">
                    <titulo>Don Quijote de la Mancha</titulo>
                    <autor>
                      <nombre>Miguel</nombre>
                      <apellido>de Cervantes</apellido>
                      <nacionalidad>Española</nacionalidad>
                    </autor>
                    <anyo>1605</anyo>
                    <editorial>Juan de la Cuesta</editorial>
                    <paginas>863</paginas>
                    <disponible>true</disponible>
                  </libro>
                </biblioteca>
                \`\`\``
            ]
        },
        {
            keywords: ['xslt ejemplo', 'ejemplo xslt', 'xml transformation', 'xsl ejemplo'],
            responses: [
                `Aquí tienes un ejemplo de transformación XSLT para convertir XML a HTML:
                \`\`\`xml
                <?xml version="1.0" encoding="UTF-8"?>
                <xsl:stylesheet version="1.0" 
                  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
                  
                  <xsl:output method="html" indent="yes"/>
                  
                  <!-- Plantilla para el nodo raíz -->
                  <xsl:template match="/">
                    <html>
                      <head>
                        <title>Biblioteca</title>
                        <style>
                          table { border-collapse: collapse; width: 100%; }
                          th, td { border: 1px solid #ddd; padding: 8px; }
                          th { background-color: #f2f2f2; text-align: left; }
                          tr:nth-child(even) { background-color: #f9f9f9; }
                        </style>
                      </head>
                      <body>
                        <h1>Catálogo de libros</h1>
                        <table>
                          <tr>
                            <th>ID</th>
                            <th>Título</th>
                            <th>Autor</th>
                            <th>Año</th>
                            <th>Categoría</th>
                          </tr>
                          <xsl:apply-templates select="biblioteca/libro"/>
                        </table>
                      </body>
                    </html>
                  </xsl:template>
                  
                  <!-- Plantilla para cada libro -->
                  <xsl:template match="libro">
                    <tr>
                      <td><xsl:value-of select="@id"/></td>
                      <td><xsl:value-of select="titulo"/></td>
                      <td>
                        <xsl:value-of select="autor/nombre"/>
                        <xsl:text> </xsl:text>
                        <xsl:value-of select="autor/apellido"/>
                      </td>
                      <td><xsl:value-of select="anyo"/></td>
                      <td><xsl:value-of select="@categoria"/></td>
                    </tr>
                  </xsl:template>
                  
                </xsl:stylesheet>
                \`\`\``

                Para aplicar esta transformación a un XML, necesitarías:

                1. Guardar el XSLT como "biblioteca.xsl"
                2. Guardar tu XML como "biblioteca.xml"
                3. Usar un procesador XSLT como Saxon, Xalan o incluso navegadores para transformarlo
                4. También puedes incluir una referencia en el XML:

                \`\`\`xml
                <?xml version="1.0" encoding="UTF-8"?>
                <?xml-stylesheet type="text/xsl" href="biblioteca.xsl"?>
                <biblioteca>
                  <!-- contenido del XML -->
                </biblioteca>
                \`\`\``
            ]
        },
        {
            keywords: ['xpath ejemplo', 'ejemplo xpath', 'consulta xpath'],
            responses: [
                `Ejemplos de expresiones XPath para seleccionar nodos en un documento XML:
                
                \`\`\`xpath
                # Selecciona todos los elementos libro
                /biblioteca/libro
                
                # Selecciona todos los títulos de libros
                //titulo
                
                # Selecciona el libro con id "L001"
                //libro[@id='L001']
                
                # Selecciona títulos de libros de categoría "novela"
                //libro[@categoria='novela']/titulo
                
                # Selecciona libros publicados después de 1900
                //libro[anyo > 1900]
                
                # Selecciona el primer libro
                //libro[1]
                
                # Selecciona el último libro
                //libro[last()]
                
                # Cuenta cuántos libros hay
                count(//libro)
                
                # Selecciona libros con título que contiene la palabra "Quijote"
                //libro[contains(titulo, 'Quijote')]
                
                # Selecciona el nombre del autor del libro con id "L001"
                //libro[@id='L001']/autor/nombre
                
                # Selecciona libros disponibles
                //libro[disponible='true']
                \`\`\`
                
                Estas expresiones XPath se pueden usar en XSLT para transformar documentos XML o en aplicaciones para consultar datos específicos en un documento XML.
                `
            ]
        },
        {
            keywords: ['formulario html', 'ejemplo formulario', 'form html'],
            responses: [
                `Aquí tienes un ejemplo completo de formulario HTML con validación:
                \`\`\`html
                <!DOCTYPE html>
                <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Formulario de Contacto</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            line-height: 1.6;
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                        }
                        
                        .form-group {
                            margin-bottom: 15px;
                        }
                        
                        label {
                            display: block;
                            font-weight: bold;
                            margin-bottom: 5px;
                        }
                        
                        input, select, textarea {
                            width: 100%;
                            padding: 8px;
                            border: 1px solid #ddd;
                            border-radius: 4px;
                            box-sizing: border-box;
                        }
                        
                        .radio-group label, .checkbox-group label {
                            font-weight: normal;
                            display: inline-block;
                            margin-right: 15px;
                        }
                        
                        .radio-group input, .checkbox-group input {
                            width: auto;
                            margin-right: 5px;
                        }
                        
                        button {
                            padding: 10px 15px;
                            background-color: #4CAF50;
                            color: white;
                            border: none;
                            border-radius: 4px;
                            cursor: pointer;
                        }
                        
                        button:hover {
                            background-color: #45a049;
                        }
                        
                        .invalid {
                            border-color: #ff0000;
                        }
                        
                        .error-message {
                            color: #ff0000;
                            font-size: 12px;
                            display: none;
                        }
                    </style>
                </head>
                <body>
                    <h1>Formulario de Contacto</h1>
                    
                    <form id="contactForm" novalidate>
                        <div class="form-group">
                            <label for="nombre">Nombre completo: *</label>
                            <input type="text" id="nombre" name="nombre" placeholder="Tu nombre completo" required>
                            <span class="error-message" id="nombre-error">Por favor, introduce tu nombre.</span>
                        </div>
                        
                        <div class="form-group">
                            <label for="email">Email: *</label>
                            <input type="email" id="email" name="email" placeholder="tu.email@ejemplo.com" required>
                            <span class="error-message" id="email-error">Por favor, introduce un email válido.</span>
                        </div>
                        
                        <div class="form-group">
                            <label for="telefono">Teléfono:</label>
                            <input type="tel" id="telefono" name="telefono" placeholder="123456789" pattern="[0-9]{9}">
                            <span class="error-message" id="telefono-error">Por favor, introduce un teléfono válido (9 dígitos).</span>
                        </div>
                        
                        <div class="form-group">
                            <label for="asunto">Asunto: *</label>
                            <select id="asunto" name="asunto" required>
                                <option value="">-- Selecciona --</option>
                                <option value="consulta">Consulta</option>
                                <option value="soporte">Soporte</option>
                                <option value="sugerencia">Sugerencia</option>
                                <option value="otro">Otro</option>
                            </select>
                            <span class="error-message" id="asunto-error">Por favor, selecciona un asunto.</span>
                        </div>
                        
                        <div class="form-group">
                            <label>¿Cómo nos has conocido?</label>
                            <div class="radio-group">
                                <label><input type="radio" name="conocido" value="web"> Web</label>
                                <label><input type="radio" name="conocido" value="amigo"> Amigo</label>
                                <label><input type="radio" name="conocido" value="redes"> Redes Sociales</label>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label>Intereses:</label>
                            <div class="checkbox-group">
                                <label><input type="checkbox" name="intereses" value="html"> HTML</label>
                                <label><input type="checkbox" name="intereses" value="css"> CSS</label>
                                <label><input type="checkbox" name="intereses" value="js"> JavaScript</label>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="mensaje">Mensaje: *</label>
                            <textarea id="mensaje" name="mensaje" rows="5" placeholder="Escribe tu mensaje aquí..." required></textarea>
                            <span class="error-message" id="mensaje-error">Por favor, introduce tu mensaje.</span>
                        </div>
                        
                        <div class="form-group checkbox-group">
                            <label>
                                <input type="checkbox" id="terminos" name="terminos" required>
                                Acepto los términos y condiciones *
                            </label>
                            <span class="error-message" id="terminos-error">Debes aceptar los términos.</span>
                        </div>
                        
                        <button type="submit">Enviar</button>
                    </form>
                    
                    <script>
                        document.addEventListener('DOMContentLoaded', function() {
                            const form = document.getElementById('contactForm');
                            
                            form.addEventListener('submit', function(event) {
                                event.preventDefault();
                                if (validateForm()) {
                                    alert('Formulario enviado correctamente!');
                                    form.reset();
                                }
                            });
                            
                            function validateForm() {
                                let isValid = true;
                                
                                // Validar nombre
                                const nombre = document.getElementById('nombre');
                                if (!nombre.value.trim()) {
                                    showError(nombre, 'nombre-error');
                                    isValid = false;
                                } else {
                                    hideError(nombre, 'nombre-error');
                                }
                                
                                // Validar email
                                const email = document.getElementById('email');
                                const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
                                if (!email.value.trim() || !emailRegex.test(email.value)) {
                                    showError(email, 'email-error');
                                    isValid = false;
                                } else {
                                    hideError(email, 'email-error');
                                }
                                
                                // Validar teléfono (opcional)
                                const telefono = document.getElementById('telefono');
                                const telefonoRegex = /^[0-9]{9}$/;
                                if (telefono.value.trim() && !telefonoRegex.test(telefono.value)) {
                                    showError(telefono, 'telefono-error');
                                    isValid = false;
                                } else {
                                    hideError(telefono, 'telefono-error');
                                }
                                
                                // Validar asunto
                                const asunto = document.getElementById('asunto');
                                if (!asunto.value) {
                                    showError(asunto, 'asunto-error');
                                    isValid = false;
                                } else {
                                    hideError(asunto, 'asunto-error');
                                }
                                
                                // Validar mensaje
                                const mensaje = document.getElementById('mensaje');
                                if (!mensaje.value.trim()) {
                                    showError(mensaje, 'mensaje-error');
                                    isValid = false;
                                } else {
                                    hideError(mensaje, 'mensaje-error');
                                }
                                
                                // Validar términos
                                const terminos = document.getElementById('terminos');
                                if (!terminos.checked) {
                                    showError(terminos, 'terminos-error');
                                    isValid = false;
                                } else {
                                    hideError(terminos, 'terminos-error');
                                }
                                
                                return isValid;
                            }
                            
                            function showError(input, errorId) {
                                input.classList.add('invalid');
                                document.getElementById(errorId).style.display = 'block';
                            }
                            
                            function hideError(input, errorId) {
                                input.classList.remove('invalid');
                                document.getElementById(errorId).style.display = 'none';
                            }
                        });
                    </script>
                </body>
                </html>
                \`\`\``
            ]
        },
        {
            keywords: ['javascript ejemplo', 'ejemplo javascript', 'js ejemplo', 'código js'],
            responses: [
                `Aquí tienes un ejemplo de JavaScript para manipulación del DOM:
                \`\`\`javascript
                // Esperar a que el DOM esté completamente cargado
                document.addEventListener('DOMContentLoaded', function() {
                    // Selección de elementos
                    const titulo = document.getElementById('titulo');
                    const boton = document.querySelector('.btn-accion');
                    const items = document.querySelectorAll('.item');
                    const lista = document.getElementById('lista');
                    
                    // Modificar contenido
                    if (titulo) {
                        titulo.textContent = 'Título modificado con JavaScript';
                        titulo.style.color = '#3498db';
                    }
                    
                    // Añadir evento al botón
                    if (boton) {
                        boton.addEventListener('click', function(event) {
                            event.preventDefault();
                            
                            // Crear un nuevo elemento
                            const nuevoItem = document.createElement('li');
                            nuevoItem.classList.add('item');
                            nuevoItem.textContent = 'Nuevo elemento añadido';
                            
                            // Añadir a la lista
                            if (lista) {
                                lista.appendChild(nuevoItem);
                            }
                            
                            // Alertar al usuario
                            alert('¡Elemento añadido con éxito!');
                        });
                    }
                    
                    // Recorrer elementos con forEach
                    items.forEach(function(item, index) {
                        // Añadir números a los elementos
                        item.textContent = \`Elemento \${index + 1}: \${item.textContent}\`;
                        
                        // Añadir eventos a cada elemento
                        item.addEventListener('click', function() {
                            this.classList.toggle('destacado');
                        });
                    });
                    
                    // Función para filtrar elementos (ejemplo más avanzado)
                    function filtrarElementos(filtro) {
                        items.forEach(function(item) {
                            if (item.textContent.toLowerCase().includes(filtro.toLowerCase())) {
                                item.style.display = 'block';
                            } else {
                                item.style.display = 'none';
                            }
                        });
                    }
                    
                    // Ejemplo de uso de promesas (código asíncrono)
                    function cargarDatos() {
                        return new Promise((resolve, reject) => {
                            // Simulando una solicitud fetch
                            setTimeout(() => {
                                const exito = Math.random() > 0.2; // 80% de éxito
                                
                                if (exito) {
                                    const datos = {
                                        items: ['Dato 1', 'Dato 2', 'Dato 3']
                                    };
                                    resolve(datos);
                                } else {
                                    reject(new Error('No se pudieron cargar los datos'));
                                }
                            }, 1500);
                        });
                    }
                    
                    // Usar la promesa
                    cargarDatos()
                        .then(datos => {
                            console.log('Datos cargados:', datos);
                            // Aquí podrías actualizar la interfaz con los datos recibidos
                        })
                        .catch(error => {
                            console.error('Error:', error);
                            // Aquí podrías mostrar un mensaje de error al usuario
                        });
                });
                \`\`\``
            ]
        },
        // Añadir sección sobre técnicas avanzadas con ejemplos más complejos
        {
            keywords: ['responsive', 'diseño responsivo', 'media queries'],
            responses: [
                `Aquí tienes un ejemplo de diseño responsivo completo con media queries:
                \`\`\`css
                /* Variables CSS para consistencia */
                :root {
                    --color-primary: #3498db;
                    --color-secondary: #2ecc71;
                    --color-text: #333;
                    --color-background: #f9f9f9;
                    --spacing-unit: 1rem;
                }

                /* Reset básico */
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    line-height: 1.6;
                    color: var(--color-text);
                    background-color: var(--color-background);
                }

                /* Layout principal */
                .container {
                    width: 100%;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: var(--spacing-unit);
                }

                /* Sistema de rejilla simple */
                .row {
                    display: flex;
                    flex-wrap: wrap;
                    margin: 0 -15px;
                }

                .col {
                    padding: 0 15px;
                    flex-grow: 1;
                }

                /* Columnas con diferentes tamaños */
                .col-1 { flex-basis: 8.33%; }
                .col-2 { flex-basis: 16.66%; }
                .col-3 { flex-basis: 25%; }
                .col-4 { flex-basis: 33.33%; }
                .col-6 { flex-basis: 50%; }
                .col-8 { flex-basis: 66.66%; }
                .col-12 { flex-basis: 100%; }

                /* Navegación */
                .navbar {
                    background-color: var(--color-primary);
                    padding: var(--spacing-unit) 0;
                }

                .nav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .nav-logo {
                    color: white;
                    font-weight: bold;
                    font-size: 1.5rem;
                    text-decoration: none;
                }

                .nav-menu {
                    display: flex;
                    list-style: none;
                }

                .nav-item {
                    margin-left: var(--spacing-unit);
                }

                .nav-link {
                    color: white;
                    text-decoration: none;
                    transition: opacity 0.3s;
                }

                .nav-link:hover {
                    opacity: 0.8;
                }

                .nav-toggle {
                    display: none; /* Oculto en desktop */
                    background: none;
                    border: none;
                    color: white;
                    font-size: 1.5rem;
                    cursor: pointer;
                }

                /* Hero section */
                .hero {
                    background-color: var(--color-primary);
                    color: white;
                    padding: calc(var(--spacing-unit) * 4) 0;
                    text-align: center;
                    margin-bottom: var(--spacing-unit);
                }

                .hero h1 {
                    font-size: 2.5rem;
                    margin-bottom: var(--spacing-unit);
                }

                .btn {
                    display: inline-block;
                    padding: calc(var(--spacing-unit) * 0.5) calc(var(--spacing-unit) * 1.5);
                    background-color: var(--color-secondary);
                    color: white;
                    text-decoration: none;
                    border-radius: 4px;
                    transition: opacity 0.3s;
                }

                .btn:hover {
                    opacity: 0.9;
                }

                /* Tarjetas */
                .card {
                    background-color: white;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    margin-bottom: var(--spacing-unit);
                    overflow: hidden;
                }

                .card-image {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                }

                .card-content {
                    padding: var(--spacing-unit);
                }

                .card-title {
                    margin-bottom: calc(var(--spacing-unit) * 0.5);
                }

                /* Footer */
                .footer {
                    background-color: #333;
                    color: white;
                    padding: calc(var(--spacing-unit) * 2) 0;
                    margin-top: calc(var(--spacing-unit) * 2);
                }

                /* Media queries para responsividad */
                /* Tabletas */
                @media screen and (max-width: 768px) {
                    /* Ajustar columnas */
                    .col-md-6 { flex-basis: 50%; }
                    .col-md-12 { flex-basis: 100%; }
                    
                    /* Navegación */
                    .nav-toggle {
                        display: block; /* Mostrar en tablet */
                    }
                    
                    .nav-menu {
                        position: fixed;
                        top: 0;
                        right: -100%;
                        width: 80%;
                        height: 100%;
                        background-color: var(--color-primary);
                        flex-direction: column;
                        padding: calc(var(--spacing-unit) * 3) var(--spacing-unit);
                        transition: right 0.3s;
                        z-index: 100;
                    }
                    
                    .nav-menu.active {
                        right: 0;
                    }
                    
                    .nav-item {
                        margin: calc(var(--spacing-unit) * 0.5) 0;
                    }
                }

                /* Móviles */
                @media screen and (max-width: 480px) {
                    /* Ajustar columnas */
                    [class*="col-"] { flex-basis: 100%; }
                    
                    /* Ajustar hero */
                    .hero {
                        padding: calc(var(--spacing-unit) * 2) 0;
                    }
                    
                    .hero h1 {
                        font-size: 2rem;
                    }
                    
                    /* Reducir espaciado */
                    :root {
                        --spacing-unit: 0.8rem;
                    }
                }
                \`\`\``
            ]
        }
    ],
    
    // Respuestas cuando no se encuentra coincidencia
    fallback: [
        'Lo siento, no he entendido bien tu pregunta. ¿Podrías reformularla o ser más específico?',
        'No tengo información sobre eso en este momento. Intenta preguntar sobre temas del curso como HTML, CSS, JavaScript, XML, o busca un ejercicio específico.',
        'Mmm, eso se escapa un poco de lo que sé. ¿Quizás puedas preguntar de otra manera? También puedes escribir "ayuda chat" para ver qué puedo hacer.',
        'No estoy seguro de cómo responder a eso. ¿Tiene que ver con los ejercicios, WordPress, HTML, CSS o XML?'
    ],
    
    // Sugerencias de preguntas para mostrar al usuario
    suggestions: {
        initial: ["Ejemplo de HTML", "Ejemplo de XML", "¿Qué es XPath?", "Buscar ejercicios CSS", "Modo Turbo"],
        secondary: ["Ejemplo de XSLT", "CSS Grid", "Ejemplo de formulario", "¿Cuándo termina el curso?"]
    },
    
    // Configuración de la interfaz
    ui: {
        typingDelay: { min: 500, max: 1500 },
        messageHistoryMax: 50,
        maxSuggestionsInitial: 4,
        maxSuggestionsContextual: 3,
        turboAsistenteURL: 'guia-chatbot.html'
    }
};