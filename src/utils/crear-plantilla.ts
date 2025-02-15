import pkg from 'fs-extra'
const {copy, existsSync} = pkg
import {dirname, resolve} from 'node:path'
import {fileURLToPath} from 'node:url'

import {crearDirectorio} from './interacion-sistema.js'

const rutas = {
  react: '../../templates/template-react',
  vanilla: '../../templates/template-vanilla',
}

/**
 * Genera una plantilla con el framework o tecnología seleccionada
 * en el directorio donde se ejecutó el CLI.
 *
 * @summary Genera una plantilla base para un nuevo proyecto.
 *
 * @example
 * try {
 *   crearPlantilla('react', 'mi-proyecto');
 *   console.log('Proyecto generado correctamente');
 * } catch (error) {
 *   console.error('No se pudo generar la plantilla:', error);
 * }
 *
 * @param {'react' | 'vanilla'} plantilla - Nombre de la plantilla o framework que se va a utilizar.
 * @param {string} nombre - Nombre del directorio donde se generará el proyecto.
 *
 * @throws {Error} Puede generar errores al intentar copiar la plantilla
 * seleccionada, generalmente debido a problemas de permisos o errores del sistema de archivos.
 */
export async function crearPlantilla(plantilla: 'react' | 'vanilla', nombre: string) {
  crearDirectorio(nombre)

  try {
    const templateDir = resolve(dirname(fileURLToPath(import.meta.url)), rutas[plantilla])

    if (!existsSync(templateDir)) {
      console.error('Error: La carpeta "template" no existe en el CLI.')
    }

    await copy(templateDir, nombre)
    console.log(`Carpeta copiada de ${templateDir} a ./${nombre}`)
  } catch {
    console.error('Error al copiar la carpeta')
  }
}
