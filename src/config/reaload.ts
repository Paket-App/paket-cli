import {watch} from 'chokidar'
import {exec} from 'node:child_process'

export default function watcherSource() {
  const watcher = watch('./src', {ignored: /node_modules/, persistent: true})
  
  watcher.on('change', (path) => {
    console.log(`Archivo cambiado: ${path}`)
    exec('npm run build', (err, stdout, stderr) => {
      if (err) {
        console.error(`Error durante la compilación: ${stderr}`)
        return
      }
  
      console.log(stdout)
    })
  })
}

