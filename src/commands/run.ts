import {Command} from '@oclif/core'

import vigilarCambio from '../utils/recargar.js'
import {verificarEstructuraProyecto} from '../utils/validacion-estructura.js'

export default class Run extends Command {
  static override description = 'Recarga automáticamente el proyecto cuando hay cambios.'
  static override examples = ['<%= config.bin %> <%= command.id %>']

  public async run(): Promise<void> {
    try {
      verificarEstructuraProyecto()
    } catch (error) {
      if (error instanceof Error) {
        this.error(`Error al verificar la estructura del proyecto: ${error.message}`)
      } else {
        this.error('Error desconocido al verificar la estructura del proyecto.')
      }
    }

    this.log('El proyecto se recargará automáticamente cuando haya cambios.')
    await vigilarCambio()
  }
}
