// paket.config.js
const config = {
  // =============================
  // 4. Configuración para CSS
  // =============================
  css: {
    inline: false,                    // Genera un archivo CSS separado en lugar de inyectarlo.
    minify: true,                     // Minifica el archivo CSS.
    preprocessor: "sass",             // Usa SASS como preprocesador (requiere configuración adicional).
  },

  // ============================
  // 1. Configuración de Entrada
  // ============================
  entry: "./index.html",              // El archivo HTML de entrada de la aplicación.

  // =============================
  // 5. Configuración para HTML
  // =============================
  html: {
    template: "./src/template.html",  // Archivo de plantilla HTML para el build final.
  },

  // =============================
  // 3. Configuración para JavaScript
  // =============================
  js: {
    externals: [],                    // No hay dependencias externas por defecto.
    frameworks: 'vanilla',
    minify: true,                     // Minifica el código JavaScript.
    transpile: true,                  // Activa la transpilación con Babel.
  },

  // =============================
  // 2. Configuración de Salida
  // =============================
  output: {
    filename: "bundle.js",            // Nombre del archivo JS resultante.
    html: "index.html",               // Nombre del archivo HTML final.
    path: "./build",                  // Carpeta donde se guardará el build.
  },
  // =============================
  // 7. Plugins
  // =============================
  plugins: [],                        // Proximamente
};

export default config;
