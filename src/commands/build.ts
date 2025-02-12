import { Command } from '@oclif/core'

import build from '../config/build.js'
import configPaket from '../config/config.packet.js'

export default class Build extends Command {
  static override description = 'Comadno para construir proyecto de paket'
  static override examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  public async run(): Promise<void> {
    const paketConfig = await configPaket()
    if (paketConfig?.js.frameworks === undefined) {
      this.error('Error al cargar al elegir el framework')
    } else {
      build(paketConfig?.js.frameworks)
    }
  }
}
