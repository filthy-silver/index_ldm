<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
    <xsl:template match="/">
        <html lang="es">
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Videojuegos por Precio</title>
                <link rel="stylesheet" href="videojuegos.css"/>
            </head>
            <body>
                <h1>Videojuegos ordenados por precio (mayor a menor)</h1>
                
                <div class="nav">
                    <a href="index.html">Volver al Índice</a>
                </div>
                
                <table>
                    <tr>
                        <th>Título</th>
                        <th>Año</th>
                        <th>Género</th>
                        <th>Imagen</th>
                        <th>Precio</th>
                        <th>Precio con Descuento</th>
                        <th>Ahorro</th>
                    </tr>
                    <xsl:for-each select="videojuegos/videojuego">
                        <xsl:sort select="precio" order="descending" data-type="number"/>
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
                            <td class="precio">
                                <xsl:choose>
                                    <xsl:when test="precio = 0">Gratis</xsl:when>
                                    <xsl:otherwise><xsl:value-of select="concat(precio, ' €')"/></xsl:otherwise>
                                </xsl:choose>
                            </td>
                            <td class="descuento">
                                <xsl:choose>
                                    <xsl:when test="precioDescuento = 0">Gratis</xsl:when>
                                    <xsl:otherwise><xsl:value-of select="concat(precioDescuento, ' €')"/></xsl:otherwise>
                                </xsl:choose>
                            </td>
                            <td>
                                <xsl:variable name="ahorro" select="number(precio) - number(precioDescuento)"/>
                                <xsl:choose>
                                    <xsl:when test="$ahorro &gt; 0">
                                        <span class="descuento">
                                            <xsl:value-of select="format-number($ahorro, '0.00')"/> € 
                                            (<xsl:value-of select="format-number($ahorro div number(precio) * 100, '0.0')"/>%)
                                        </span>
                                    </xsl:when>
                                    <xsl:otherwise>-</xsl:otherwise>
                                </xsl:choose>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
                
                <h2>Estadísticas de Precios</h2>
                
                <table>
                    <tr>
                        <th>Rango de Precio</th>
                        <th>Cantidad de Juegos</th>
                    </tr>
                    <tr>
                        <td>Gratuitos</td>
                        <td><xsl:value-of select="count(videojuegos/videojuego[precio = 0])"/></td>
                    </tr>
                    <tr>
                        <td>Menos de 20€</td>
                        <td><xsl:value-of select="count(videojuegos/videojuego[precio &gt; 0 and precio &lt; 20])"/></td>
                    </tr>
                    <tr>
                        <td>Entre 20€ y 50€</td>
                        <td><xsl:value-of select="count(videojuegos/videojuego[precio &gt;= 20 and precio &lt;= 50])"/></td>
                    </tr>
                    <tr>
                        <td>Más de 50€</td>
                        <td><xsl:value-of select="count(videojuegos/videojuego[precio &gt; 50])"/></td>
                    </tr>
                </table>
                
                <div class="volver">
                    <a href="index.html">Volver al Índice</a>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>