import { Command } from '@oclif/core'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

export default class Run extends Command {
  static override description = 'Comando para recargar el proyecto de paket'
  static override examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  public async run(): Promise<void> {
    const configPath = path.resolve(process.cwd(), 'paket.config.js')
    const configURL = pathToFileURL(configPath).href    

    try {
      const config = await import(configURL)

      this.log('Configuración del proyecto cargada con éxito:')
      this.log(JSON.stringify(config, null, 2))
    } catch (error) {
      if (error instanceof Error) {
        this.error(`Error al cargar la configuración: ${error.message}`)
      } else {
        this.error('Error al cargar la configuración: Error desconocido')
      }
    }

    this.log('El proyecto se recargara automaticamente :)')

    
  }
}
