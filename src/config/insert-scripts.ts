import {load} from 'cheerio'
import {readFile, writeFile} from 'node:fs'

export default function insertScriptAndCSS() {
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
