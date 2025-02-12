/**
 * Configuración por defecto para Paket Bundler
 *
 * Este archivo define las opciones básicas para procesar y generar
 * el build final de tu aplicación. Puedes ajustar cada sección según
 * tus necesidades.
 */

export const defaultConfig = {
  // =============================
  // 4. Configuración para CSS
  // =============================
  css: {
    // Si se establece en true, el CSS se inyectará directamente en el HTML final.
    // De lo contrario, se generará un archivo CSS separado.
    inline: false,
    // Minificar el CSS para producción.
    minify: true,
    // Opción para procesar preprocesadores como SASS o LESS (requiere configuración adicional).
    // preprocessor: "sass",
  },

  // ============================
  // 1. Configuración de Entrada
  // ============================
  // Define el punto de entrada de la aplicación. Puede ser un archivo HTML
  // que incluya referencias a tus scripts y estilos, o un archivo JS principal.
  entry: "./src/index.html",

  // =============================
  // 5. Configuración para HTML
  // =============================
  html: {
    // Archivo de plantilla HTML que servirá como base para inyectar los bundles de JS y CSS.
    // Puedes incluir marcadores de posición que el bundler reemplazará durante el build.
    template: "./src/template.html",
  },

  // =============================
  // 3. Configuración para JavaScript
  // =============================
  js: {
    // Lista de dependencias externas que, de ser necesarias, se pueden incluir
    // o bien tratar de empaquetar. Si está vacía, se considerarán todas las dependencias internas.
    externals: [],
    // Configuración específica para frameworks.
    frameworks: 'vanilla',
    // Minificar el código JavaScript para optimizar el rendimiento en producción.
    minify: true,
    // Habilitar la transpilación del código (por ejemplo, usando Babel)
    // para convertir código ECMAScript moderno a una versión compatible con más navegadores.
    transpile: true,
  },

  // =============================
  // 2. Configuración de Salida
  // =============================
  // Especifica dónde se guardará el build final y el nombre de los archivos generados.
  output: {
    // Nombre del archivo JavaScript resultante.
    filename: "bundle.js",
    // Nombre del archivo HTML final.
    html: "index.html",
    // Directorio donde se colocarán los archivos finales.
    path: "./dist",
  },
  // =============================
  // 7. Opciones Avanzadas (Plugins, etc.)
  // =============================
  // Aquí puedes incluir configuraciones adicionales o plugins que extiendan
  // las funcionalidades básicas del bundler.
  plugins: [
    // Ejemplo: plugin para optimizar imágenes, análisis de código, etc.
    // require('paket-plugin-imagenes')({ quality: 80 })
  ],
};
