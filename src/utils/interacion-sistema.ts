import {mkdirSync, writeFile} from 'node:fs'
import {resolve} from 'node:path'

/**
 * Crea un archivo en una ruta específica a partir de la raíz del proyecto.
 *
 * @summary Crea un archivo con el contenido indicado.
 *
 * @example
 * try {
 *   crearArchivo('texto.txt', 'Hola :D');
 * } catch (error) {
 *   console.error('No se pudo crear el archivo:', error);
 * }
 *
 * @param {string} ruta - Ruta del archivo relativa a la raíz del proyecto.
 * @param {string} contenido - Contenido del archivo que se desea crear.
 *
 * @throws {Error} Puede generar errores si el directorio no existe,
 * no se tienen permisos de escritura o por otros problemas relacionados con el sistema de archivos.
 */
export function crearArchivo(ruta: string, contenido: string): void {
  const rutaCompleta = resolve(process.cwd(), ruta)

  writeFile(rutaCompleta, contenido, (error) => {
    if (error) {
      throw error
    }
  })
}

/**
 * Crea un directorio en una ruta específica a partir de la raíz del proyecto.
 *
 * @summary Crea un directorio de manera recursiva.
 *
 * @example
 * try {
 *   crearDirectorio('public');
 * } catch (error) {
 *   console.error('No se pudo crear el directorio:', error);
 * }
 *
 * @param {string} ruta - Ruta relativa a la raíz del proyecto donde se desea crear el directorio.
 *
 * @throws {Error} Puede generar un error si no se tienen permisos de escritura,
 * si la ruta no es válida o por otros problemas del sistema de archivos.
 */
export function crearDirectorio(ruta: string): void {
  const rutaCompleta = resolve(process.cwd(), ruta)

  try {
    mkdirSync(rutaCompleta, {recursive: true})
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error al crear el directorio: ${error.message}`)
    } else {
      console.error('Error al crear el directorio: Error desconocido')
    }

    throw error
  }
}
