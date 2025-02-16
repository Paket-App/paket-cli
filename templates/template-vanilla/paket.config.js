const config = {
  css: {
    inline: false, minify: true
  },
  entry: "./index.html",
  js: {
    minify: true,
    transpile: true
  },
  output: {
    filename: "bundle.js",
    html: "index.html",
    path: "./dist"
  },
};

export default config
