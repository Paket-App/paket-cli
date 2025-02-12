import swc from '@swc/core'
import { promises } from 'node:fs'

import configPaket from '../config.packet.js'


export default async function transformCodeSWC() {
  const paketConfig = await configPaket()

  try {
    const code = await promises.readFile('src/index.js', 'utf8')
    
    const output = await swc.transform(code, {
      filename: `${paketConfig?.output.path}/index.js`,
      jsc: {
        parser: {
          dynamicImport: true,
          functionBind: true,
          jsx: paketConfig?.js.frameworks !== 'vanilla',
          syntax: 'ecmascript',
        },
        transform: {},
      },
      sourceMaps: true,
    })

    await promises.writeFile(`${paketConfig?.output.path}/index.js`, output.code, 'utf8')
  } catch (error) {
    console.error('Error al transformar el código:', error)
  }
}

