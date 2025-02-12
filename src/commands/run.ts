import { Command } from '@oclif/core'

import watcherSource from '../config/reaload.js'

export default class Run extends Command {
  static override description = 'Comando para recargar el proyecto de paket'
  static override examples = ['<%= config.bin %> <%= command.id %>']

  public async run(): Promise<void> {
    
    this.log('El proyecto se recargara automaticamente :)')

    await watcherSource()
  }
}
