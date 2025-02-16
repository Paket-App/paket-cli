export type PaketConfig = {
  css: {
    inline: boolean
    minify: boolean
  }
  entry: string
  js: {
    minify: boolean
    transpile: boolean
  }
  output: {
    filename: string
    html: string
    path: string
  }
}
