import {Command} from '@oclif/core'

import vigilarCambio from '../utils/recargar.js'
import {verificarEstructuraProyecto} from '../utils/validacion-estructura.js'

export default class Run extends Command {
  static override description = 'Comando para recargar el proyecto de paket'
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

    this.log('El proyecto se recargara automaticamente :)')

    await vigilarCambio()
  }
}
