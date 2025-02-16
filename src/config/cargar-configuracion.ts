import {resolve} from 'node:path'
import {pathToFileURL} from 'node:url'

import { PaketConfig } from '../types/paket-config'

/**
 * Obtiene el archivo de configuracion del proyecto
 * para poder saber como se va a utilizar el proyecto
 *
 * @summary Obtener el archivo de configuracion
 *
 * @example
 * try {
 *   const configuracion = cargarConfiguracion()
 *   console.log(configuracion)
 * } catch (error) {
 *   console.error('Error al cargar el archivo de configuración', error)
 * }
 *
 * @returns {Promise<PaketConfig>} Retorna el archivo de configuracion
 *
 * @throws Puede generar errores al intentar cargar el archivo de configuracion
 * Tal vez porque justo se borro o no existe o incluso que no sea correcto
 *
 */
export async function cargarConfiguracion(): Promise<PaketConfig> {
  const rutaArchivoConfiguracion = resolve(process.cwd(), 'paket.config.js')
  const urlConfiguracion = pathToFileURL(rutaArchivoConfiguracion).href

  let configuracion: PaketConfig

  try {
    configuracion = (await import(urlConfiguracion)).default
  } catch (error) {
    const error_ =
      error instanceof Error
        ? new TypeError(`Error al cargar la configuración: ${error.message}`)
        : new TypeError('Error al cargar la configuración: Error desconocido')
    throw error_
  }

  if (!comprobarConfiguracion(configuracion)) {
    throw new TypeError('El archivo de configuración no tiene el formato esperado')
  }

  return configuracion
}

/**
 * Comprobar la configuracion sea igual a la esperada para evitar
 * cualquier problema al momento de hacer el build
 *
 * @summary Comprueba si la configuracion es correcta
 *
 * @example
 * if (!comprobarConfiguracion(configuracion)) {
 *   throw new TypeError('El archivo de configuración no tiene el formato esperado')
 * }
 *
 * @param configuracion Configuración a comprobarConfiguracion
 * @returns Retorna un true si coincide o false si no coincide
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function comprobarConfiguracion(configuracion: any): configuracion is PaketConfig {
  return (
    typeof configuracion === 'object' &&
    configuracion !== null &&
    typeof configuracion.entry === 'string' &&
    typeof configuracion.css?.inline === 'boolean' &&
    typeof configuracion.css?.minify === 'boolean' &&
    typeof configuracion.js?.minify === 'boolean' &&
    typeof configuracion.js?.transpile === 'boolean' &&
    typeof configuracion.output?.filename === 'string' &&
    typeof configuracion.output?.html === 'string' &&
    typeof configuracion.output?.path === 'string'
  )
}
