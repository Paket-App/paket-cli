import {watch} from 'chokidar'

import build from './build.js'
import configPaket from './config.packet.js'

export default async function watcherSource() {
  const watcher = watch('./src', {ignored: /node_modules/, persistent: true})
  const paketConfig = await configPaket()

  watcher.on('change', (path) => {
    console.log(`Archivo cambiado: ${path}`)
    if (paketConfig?.js.frameworks === undefined) {
      console.error('Error al cargar al elegir el framework')
    } else {
      build(paketConfig?.js.frameworks)
    }
  })
}
