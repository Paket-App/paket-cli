import {load} from 'cheerio'
import {access, constants, mkdir, readFile, writeFile} from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

export default function insertScriptAndCSS() {

  const dirPath = join(dirname(fileURLToPath(import.meta.url)), 'build')
  access(dirPath, constants.F_OK, (err) => {
    if (err) {
      console.log('El directorio build/ no existe, creando directorio...')

      mkdir(dirPath, {recursive: true}, (err) => {
        if (err) {
          return console.error('Error al crear el directorio:', err)
        }

        console.log('Directorio creado con éxito.')
      })
    }
  })

  writeFile('build/index.html', 'Hola, Mundo!', (err) => {
    if (err) {
      return console.log(err)
    }

    console.log('index.html Generado :)');
  })

  readFile('index.html', 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }

    const $ = load(data)

    $('head').append('<link rel="stylesheet" href="index.css">')
    $('body').append('<script src="index.js"></script>')

    writeFile('build/index.html', $.html(), (err) => {
      if (err) {
        console.error(err)
      }
    })
  })
}
