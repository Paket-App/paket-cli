import {build} from 'rolldown'

import configPaket from '../config.packet.js'

export default async function bundlerRollup() {
  const paketConfig = await configPaket()

  await build({
    input: 'src/index.js',
    output: {
      dir: paketConfig?.output.path,
      format: 'umd',
      inlineDynamicImports: true,
    },
  })
}
