import { input, select } from '@inquirer/prompts'
import { Command } from '@oclif/core'

import { crearPlantilla } from '../utils/crear-plantilla.js'

export default class Create extends Command {
  static override description = 'Comando para crea un proyecto de paket'
  static override examples = ['<%= config.bin %> <%= command.id %>']

  public async run(): Promise<void> {
    const projectName = await input({message: 'Nombre del proyecto'})
    const framework: 'react' | 'vanilla' = await select({
      choices: [
        {
          description: 'Desarrollo más tradicional',
          name: 'Javascript Vanilla',
          value: 'vanilla',
        },
        {
          description: 'Framework popular para interfaces de usuario',
          name: 'React',
          value: 'react',
        },
      ],
      message: '¿Qué framework quieres usar?',
    })

    crearPlantilla(framework, projectName)

    this.log(`Nombre del proyecto ${projectName}`)
    this.log(`Framework elegido ${framework}`)
  }
}
