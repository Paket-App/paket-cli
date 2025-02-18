import { load } from 'cheerio'
import pkg from 'fs-extra'
import { format } from 'prettier'
const {readFileSync, writeFileSync} = pkg

/**
 * Inserta las etiquetas de `<script>` y `<link>` en un archivo HTML,
 * integrando el CSS y el JavaScript generados por Paket.
 *
 * La función realiza lo siguiente:
 * - Lee el archivo HTML de entrada.
 * - Inserta una etiqueta `<link>` en el `<head>` para el archivo CSS (index.css).
 * - Inserta una etiqueta `<script>` en el `<body>` para cargar el archivo JS especificado.
 * - Formatea el HTML resultante y lo escribe en la ruta de salida indicada.
 *
 * @summary Inserta los scripts y CSS generados por Paket en el HTML.
 *
 * @param {string} rutaHTML - Ruta del archivo HTML principal de entrada.
 * @param {string} rutaSalidaHTML - Ruta del archivo HTML de salida donde se guardará el HTML modificado.
 * @param {string} rutaJS - Nombre del archivo JavaScript a insertar en el HTML.
 *
 * @example
 * await insertarScriptYCSS('index.html', 'out/index.html', 'bundle.js');
 *
 * @throws {Error} Lanza un error si ocurre un problema al leer o escribir los archivos,
 * o al formatear el HTML.
 *
 * @returns {Promise<void>} Una promesa que se resuelve cuando la operación se completa.
 */
export default async function insertarScriptYCSS(
  rutaHTML: string,
  rutaSalidaHTML: string,
  rutaJS: string,
): Promise<void> {
  try {
    const data = readFileSync(rutaHTML, 'utf8')
    const $ = load(data)

    $('head').append('<link rel="stylesheet" href="index.css">')
    $('body').append(`<script src="${rutaJS}"></script>`)

    const salidaFormateada = await format($.html(), {parser: 'html', semi: false})    

    writeFileSync(rutaSalidaHTML, salidaFormateada)
  } catch (error) {
    console.error(error)
  }
}
