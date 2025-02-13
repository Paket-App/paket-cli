import {input, select} from '@inquirer/prompts'
import {Command} from '@oclif/core'
import * as fs from 'fs-extra'
import {access, constants, copyFile, mkdir, readdir} from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

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
        // {
        //   description: 'Framework progresivo para interfaces web',
        //   name: 'Vue',
        //   value: 'vue',
        // },
        // {
        //   description: 'Framework reactivo sin virtual DOM',
        //   name: 'Svelte',
        //   value: 'svelte',
        // },
      ],
      message: '¿Qué framework quieres usar?',
    })

    const templateDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), `../templates/${framework}`)
    const projectDir = path.resolve(process.cwd(), projectName)

    try {
      access(templateDir, constants.F_OK, (err) => {
        console.log(`${templateDir} ${err ? 'does not exist' : 'exists'}`)
      }) // Verifica si el template existe
      mkdir(projectDir, {recursive: true}, (err) => {
        if (err) throw err
      }) // Crea el directorio del proyecto
      await copyDirectory(templateDir, projectDir) // Copia los archivos del template
      this.log(`Proyecto '${projectName}' creado exitosamente en '${projectDir}' usando el framework '${framework}'.`)
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error al cargar la configuración: ${error.message}`)
      } else {
        console.error('Error al cargar la configuración: Error desconocido')
      }
    }
  }
}

async function copyDirectory(source: string, destination: string): Promise<void> {
  const entries = readdir(source, {withFileTypes: true}, (err) => {
    console.log(err);
  })

  for (const entry of entries) {
    const srcPath = path.join(source, entry.name)
    const destPath = path.join(destination, entry.name)

    if (entry.isDirectory()) {
      mkdir(destPath, {recursive: true}, (err) => {
        if (err) throw err
      })

      copyDirectory(srcPath, destPath)
    } else {
      copyFile(srcPath, destPath, (err) => {
        if (err) throw err
        console.log('source.txt was copied to destination.txt')
      })
    }
  }
}
