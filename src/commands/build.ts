import { Command } from '@oclif/core'

import { cargarConfiguracion } from '../config/cargar-configuracion.js'
import { generarBundle } from '../utils/generar-bundle.js'
import { verificarEstructuraProyecto } from '../utils/validacion-estructura.js'

export default class Build extends Command {
  static override description = 'Comadno para construir proyecto de paket'
  static override examples = ['<%= config.bin %> <%= command.id %>']

  public async run(): Promise<void> {
    try {
      verificarEstructuraProyecto()
    } catch (error) {
      if (error instanceof Error) {
        this.error(`Error al cargar la configuración: ${error.message}`)
      } else {
        this.error('Error al cargar la configuración: Error desconocido')
      }
    }

    generarBundle(await cargarConfiguracion())
  }
}
