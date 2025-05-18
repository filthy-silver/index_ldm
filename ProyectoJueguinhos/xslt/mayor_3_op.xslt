<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
    <xsl:template match="/">
        <html lang="es">
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Videojuegos con Opiniones > 3</title>
                <link rel="stylesheet" href="videojuegos.css"/>
            </head>
            <body>
                <h1>Videojuegos con valoración de opiniones mayor a 3</h1>
                
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
                        <th>Unidades Vendidas</th>
                    </tr>
                    <xsl:for-each select="videojuegos/videojuego[valorOpiniones &gt; 3]">
                        <xsl:sort select="valorOpiniones" order="descending"/>
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
                                <xsl:variable name="valoracion" select="number(valorOpiniones)"/>
                                <xsl:choose>
                                    <xsl:when test="$valoracion &gt;= 4.5">
                                        <span class="valoracion valoracion-alta"><xsl:value-of select="valorOpiniones"/>/5</span>
                                    </xsl:when>
                                    <xsl:when test="$valoracion &gt;= 3.5">
                                        <span class="valoracion valoracion-media"><xsl:value-of select="valorOpiniones"/>/5</span>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <span class="valoracion valoracion-baja"><xsl:value-of select="valorOpiniones"/>/5</span>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </td>
                            <td><xsl:value-of select="unidadesVendidas"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
                
                <div class="volver">
                    <a href="index.html">Volver al Índice</a>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>