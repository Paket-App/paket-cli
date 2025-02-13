import {rolldown} from 'rolldown'
import css from 'rollup-plugin-import-css'

export default async function bundlerRollup() {
  const bundle = await rolldown({
    external: [],
    input: 'src/index.js',
    plugins: [css]
  })

  await bundle.write({
    dir: 'build/',
    format: 'umd',
    inlineDynamicImports: true,
  })
}
