<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
    <xsl:template match="/">
        <html lang="es">
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Catálogo de Videojuegos</title>
                <link rel="stylesheet" href="videojuegos.css"/>
            </head>
            <body>
                <h1>Catálogo de Videojuegos</h1>
                
                <div class="nav">
                    <a href="todos.html">Ver Todos los Videojuegos</a>
                    <a href="solo_titulos.html">Ver Títulos</a>
                    <a href="titulos_con_t.html">Títulos con 'T'</a>
                    <a href="2000.html">Desde el 2000</a>
                    <a href="mayor_4.html">Nota > 4</a>
                    <a href="mayor_3_op.html">Opiniones > 3</a>
                    <a href="menor_3_op.html">Opiniones ≤ 3</a>
                    <a href="orden_precio.html">Por Precio</a>
                    <a href="genero_rpg.html">Género RPG</a>
                </div>
                
                <h2>Bienvenido al Catálogo de Videojuegos</h2>
                <p>Selecciona una de las opciones de arriba para visualizar el catálogo según diferentes criterios.</p>
                
                <h2>Resumen del Catálogo</h2>
                <p>Actualmente hay <strong><xsl:value-of select="count(videojuegos/videojuego)"/></strong> videojuegos en el catálogo.</p>
                
                <table>
                    <tr>
                        <th>Géneros</th>
                        <th>Cantidad</th>
                    </tr>
                    <xsl:for-each select="videojuegos/videojuego/genero[not(preceding::genero = .)]">
                        <xsl:variable name="generoActual" select="."/>
                        <tr>
                            <td><xsl:value-of select="$generoActual"/></td>
                            <td><xsl:value-of select="count(/videojuegos/videojuego[genero = $generoActual])"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
                
                <h2>Últimos Juegos Añadidos</h2>
                <table>
                    <tr>
                        <th>Título</th>
                        <th>Año</th>
                        <th>Género</th>
                    </tr>
                    <xsl:for-each select="videojuegos/videojuego">
                        <xsl:sort select="@anyo" order="descending"/>
                        <xsl:if test="position() &lt;= 3">
                            <tr>
                                <td><xsl:value-of select="titulo"/></td>
                                <td><xsl:value-of select="@anyo"/></td>
                                <td><xsl:value-of select="genero"/></td>
                            </tr>
                        </xsl:if>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>