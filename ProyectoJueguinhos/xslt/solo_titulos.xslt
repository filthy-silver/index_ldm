<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
    <xsl:template match="/">
        <html lang="es">
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Títulos de Videojuegos</title>
                <link rel="stylesheet" href="videojuegos.css"/>
            </head>
            <body>
                <h1>Títulos de Videojuegos</h1>
                
                <div class="nav">
                    <a href="index.html">Volver al Índice</a>
                </div>
                
                <table>
                    <tr>
                        <th>Título</th>
                        <th>Año</th>
                        <th>Género</th>
                    </tr>
                    <xsl:for-each select="videojuegos/videojuego">
                        <xsl:sort select="titulo"/>
                        <tr>
                            <td><xsl:value-of select="titulo"/></td>
                            <td><xsl:value-of select="@anyo"/></td>
                            <td><xsl:value-of select="genero"/></td>
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