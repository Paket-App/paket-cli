import { input, select } from '@inquirer/prompts'
import { Command } from '@oclif/core'

export default class Create extends Command {
  static override description = 'Comando para crea un proyecto de paket'
  static override examples = ['<%= config.bin %> <%= command.id %>']

  public async run(): Promise<void> {
    const projectName = await input({message: 'Nombre del proyecto'})
    const framework = await select({
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
        {
          description: 'Framework progresivo para interfaces web',
          name: 'Vue',
          value: 'vue',
        },
        {
          description: 'Framework reactivo sin virtual DOM',
          name: 'Svelte',
          value: 'svelte',
        },
      ],
      message: '¿Qué framework quieres usar?',
    })

    this.log(`Nombre del proyecto: ${projectName}`)
    this.log(`Framework seleccionado: ${framework}`)
  }
}
