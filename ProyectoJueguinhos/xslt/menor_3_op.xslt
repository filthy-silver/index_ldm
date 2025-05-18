<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
    <xsl:template match="/">
        <html lang="es">
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Videojuegos con Opiniones ≤ 3</title>
                <link rel="stylesheet" href="videojuegos.css"/>
            </head>
            <body>
                <h1>Videojuegos con valoración de opiniones menor o igual a 3</h1>
                
                <div class="nav">
                    <a href="index.html">Volver al Índice</a>
                </div>
                
                <table>
                    <tr>
                        <th>Título</th>
                        <th>Año</th>
                        <th>Género</th>
                        <th>Imagen</th>
                        <th>Valoración</th>
                        <th>Precio</th>
                    </tr>
                    <xsl:for-each select="videojuegos/videojuego[valorOpiniones &lt;= 3]">
                        <xsl:sort select="valorOpiniones" order="ascending"/>
                        <tr>
                            <td><xsl:value-of select="titulo"/></td>
                            <td><xsl:value-of select="@anyo"/></td>
                            <td><xsl:value-of select="genero"/></td>
                            <td>
                                <xsl:for-each select="imagenes/imagen[1]">
                                    <img class="thumbnail">
                                        <xsl:attribute name="src">
                                            <xsl:value-of select="."/>
                                        </xsl:attribute>
                                        <xsl:attribute name="alt">
                                            <xsl:value-of select="../../titulo"/>
                                        </xsl:attribute>
                                    </img>
                                </xsl:for-each>
                            </td>
                            <td>
                                <span class="valoracion valoracion-baja"><xsl:value-of select="valorOpiniones"/>/5</span>
                            </td>
                            <td class="precio">
                                <xsl:choose>
                                    <xsl:when test="precio = 0">Gratis</xsl:when>
                                    <xsl:otherwise><xsl:value-of select="concat(precio, ' €')"/></xsl:otherwise>
                                </xsl:choose>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
                
                <h2>Opiniones negativas</h2>
                
                <xsl:for-each select="videojuegos/videojuego[valorOpiniones &lt;= 3]">
                    <div class="detalle-juego">
                        <h3><xsl:value-of select="titulo"/> (<xsl:value-of select="@anyo"/>) - <span class="valoracion valoracion-baja"><xsl:value-of select="valorOpiniones"/>/5</span></h3>
                        
                        <h4>Opiniones</h4>
                        <xsl:for-each select="opiniones/opinion">
                            <div class="opinion">
                                <span class="opinion-autor"><xsl:value-of select="autor"/></span>
                                <span class="opinion-fecha"><xsl:value-of select="fecha"/></span>
                                <span class="opinion-nota">★ <xsl:value-of select="nota"/>/5</span>
                                <p class="opinion-texto"><xsl:value-of select="texto"/></p>
                            </div>
                        </xsl:for-each>
                    </div>
                </xsl:for-each>
                
                <div class="volver">
                    <a href="index.html">Volver al Índice</a>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>