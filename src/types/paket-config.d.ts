export type PaketConfig = {
  css: {
    inline: boolean
    minify: boolean
  }
  entry: string
  js: {
    frameworks: 'react' | 'svelte' | 'vanilla' | 'vue'
    minify: boolean
    transpile: boolean
  }
  output: {
    filename: string
    html: string
    path: string
  }
}
