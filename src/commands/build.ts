import { Command } from '@oclif/core'

import { cargarConfiguracion } from '../config/cargar-configuracion.js'
import { generarBundle } from '../utils/generar-bundle.js'
import { verificarEstructuraProyecto } from '../utils/validacion-estructura.js'

export default class Build extends Command {
  static override description = 'Construye el proyecto de Paket, generando los archivos finales listos para usar.'
  static override examples = ['<%= config.bin %> <%= command.id %>']

  public async run(): Promise<void> {
    try {
      verificarEstructuraProyecto()
    } catch (error) {
      if (error instanceof Error) {
        this.error(`Ocurrió un error al verificar el proyecto: ${error.message}`)
      } else {
        this.error('Error desconocido al verificar la estructura del proyecto.')
      }
    }

    generarBundle(await cargarConfiguracion())
    this.log('¡Tu proyecto ha sido construido con éxito!')
  }
}
