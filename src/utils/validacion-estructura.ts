import {access, constants, stat} from 'node:fs'
import {resolve} from 'node:path'

import configDefault from '../templates/paket-config-default.js'
import {crearArchivo, crearDirectorio} from './interacion-sistema.js'

/**
 * Verifica y corrige la estructura del proyecto asegurando la existencia
 * de archivos y directorios esenciales para el correcto funcionamiento del CLI.
 *
 * @summary Valida y corrige la estructura básica del proyecto.
 *
 * @example
 * try {
 *   verificarEstructuraProyecto();
 *   console.log('Estructura validada correctamente');
 * } catch (error) {
 *   console.error('No se pudo generar los archivos faltantes:', error);
 * }
 *
 * @throws {Error} Si ocurre un problema al crear archivos o directorios necesarios.
 */
export function verificarEstructuraProyecto(): void {
  try {
    verificarArchivoConfig()
  } catch {
    console.error('Ocurrio un error inesperado')
  }

  try {
    verificarDirectorio('public')
  } catch {
    console.error('Ocurrio un error inesperado')
  }
}

/**
 * Verifica la existencia del archivo `paket.config.js` en la raíz del proyecto
 * y lo crea con una configuración por defecto si no existe.
 *
 * @summary Verifica o crea el archivo `paket.config.js`.
 *
 * @example
 * verificarArchivoConfig();
 *
 * @throws {Error} Si no se puede crear el archivo de configuración.
 */
export function verificarArchivoConfig() {
  access(resolve(process.cwd(), 'paket.config.js'), constants.F_OK, (error) => {
    if (error) {
      crearArchivo('paket.config.js', JSON.stringify(configDefault))
    }
  })
}

/**
 * Verifica si el directorio especificado existe en la raíz del proyecto y lo crea si no está presente.
 *
 * @summary Verifica o crea un directorio.
 *
 * @example
 * verificarDirectorio('public');
 *
 * @param {string} ruta - Nombre del directorio relativo a la raíz del proyecto.
 *
 * @throws {Error} Si la ruta existe pero no es un directorio.
 */
export function verificarDirectorio(ruta: string): void {
  const rutaCompleta = resolve(process.cwd(), ruta)

  stat(rutaCompleta, (err, stats) => {
    if (err) {
      crearDirectorio(ruta)
      return
    }

    if (!stats.isDirectory()) {
      throw new Error('Existe pero no es un directorio')
    }
  })
}
