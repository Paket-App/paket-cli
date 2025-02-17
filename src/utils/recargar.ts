import {watch} from 'chokidar'
import {relative} from 'node:path'

import {cargarConfiguracion} from '../config/cargar-configuracion.js'
import { generarBundle } from './generar-bundle.js'

/**
 * Vigila los cambios en los archivos del proyecto y ejecuta nuevamente el proceso de compilación
 * sin necesidad de volver a ejecutar manualmente el comando `build`.
 *
 * @summary Observa cambios en archivos y ejecuta recompilaciones automáticas.
 *
 * @example
 * vigilarCambio();
 *
 * @throws {Error} Puede lanzar errores si hay problemas con la configuración
 * o si la inicialización del watcher falla.
 *
 * @returns {Promise<void>} Retorna una promesa que se resuelve cuando el watcher comienza a observar cambios.
 */
export default async function vigilarCambio() {
  const configuracion = await cargarConfiguracion()

  const rutaSalida = relative(process.cwd(), configuracion.output.path)
  const rutasIgnorar = ['node_modules', rutaSalida]
  const regexIgnorar = new RegExp(rutasIgnorar.join('|'))

  const watcher = watch('.', {
    ignored: regexIgnorar,
    ignoreInitial: true,
    persistent: true,
  })

  watcher.on('ready', () => {
    console.log('Observando cambios...')
  })

  watcher.on('change', async (path) => {
    console.log('Cambio detectado:', path)
    await generarBundle(await cargarConfiguracion())
  })

  watcher.on('error', (error) => {
    console.error('Error en el watcher:', error)
  })
}
