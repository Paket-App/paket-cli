import { input, select } from '@inquirer/prompts'
import { Command } from '@oclif/core'

import { crearPlantilla } from '../utils/crear-plantilla.js'

export default class Create extends Command {
  static override description = 'Crea un nuevo proyecto con Paket, eligiendo entre diferentes frameworks.'
  static override examples = ['<%= config.bin %> <%= command.id %>']

  public async run(): Promise<void> {
    const projectName = await input({message: 'Introduce el nombre del proyecto'})
    const framework: 'react' | 'vanilla' = await select({
      choices: [
        {
          description: 'Un enfoque tradicional usando solo JavaScript.',
          name: 'JavaScript Vanilla',
          value: 'vanilla',
        },
        {
          description: 'Usa el popular framework React para interfaces.',
          name: 'React',
          value: 'react',
        },
      ],
      message: '¿Qué framework deseas usar para tu proyecto?',
    })

    crearPlantilla(framework, projectName)

    this.log(`Tu proyecto se llama: ${projectName}`)
    this.log(`Framework seleccionado: ${framework}`)
  }
}
