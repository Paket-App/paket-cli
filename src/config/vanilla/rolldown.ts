import {rolldown} from 'rolldown'

export default async function bundlerRollup() {
  const bundle = await rolldown({
    external: [],
    input: 'src/index.js',
  })

  await bundle.write({
    dir: 'build/',
    format: 'umd',
    inlineDynamicImports: true,
  })
}
