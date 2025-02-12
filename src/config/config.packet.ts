import path from 'node:path'
import {pathToFileURL} from 'node:url'

import {PaketConfig} from '../types/config.js'

export default async function configPaket(): Promise<PaketConfig | undefined> {
  const configPath = path.resolve(process.cwd(), 'paket.config.js')
  const configURL = pathToFileURL(configPath).href
  let config: PaketConfig | undefined

  try {
    config = (await import(configURL)).default
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error al cargar la configuración: ${error.message}`)
    } else {
      console.error('Error al cargar la configuración: Error desconocido')
    }
  }

  return config
}
