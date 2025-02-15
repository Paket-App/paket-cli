const configDefault = {
  css: {inline: true, minify: false, preprocessor: 'sass'},
  entry: './index.html',
  html: {template: './src/template.html'},
  js: {externals: [], frameworks: 'vanilla', minify: true, transpile: true},
  output: {filename: 'bundle.js', html: 'index.html', path: './build'},
  plugins: [],
}

export default configDefault
