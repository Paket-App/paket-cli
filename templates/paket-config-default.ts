const configDefault = {
  css: {
    inline: false,
    minify: true,
  },
  entry: './index.html',
  js: {
    frameworks: 'vanilla',
    minify: true,
    transpile: true,
  },
  output: {
    filename: 'bundle.js',
    html: 'index.html',
    path: './dist',
  },
}

export default configDefault
