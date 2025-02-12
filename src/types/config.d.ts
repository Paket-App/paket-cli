/**
 * Definiciones de tipos para la configuración de Paket Bundler.
 */

/** Configuración de salida para el build final. */
export interface OutputConfig {
  /** Nombre del archivo JavaScript resultante. */
  filename: string;
  /** Nombre del archivo HTML final. */
  html: string;
  /** Directorio donde se colocarán los archivos finales. */
  path: string;
}


/** Configuración relacionada con JavaScript. */
export interface JSConfig {
  /**
   * Lista de dependencias externas a incluir o empaquetar.
   * Si se deja vacía se considerarán todas las dependencias internas.
   */
  externals: string[];
  /** Configuración específica para frameworks. */
  frameworks: 'react' | 'svelte' | 'vanilla' | 'vue';
  /** Minifica el código JavaScript para producción. */
  minify: boolean;
  /** Habilita la transpilación (por ejemplo, con Babel). */
  transpile: boolean;
}

/** Configuración relacionada con CSS. */
export interface CSSConfig {
  /**
   * Si es `true` el CSS se inyectará directamente en el HTML final,
   * de lo contrario se generará un archivo CSS separado.
   */
  inline: boolean;
  /** Minifica el CSS para producción. */
  minify: boolean;
  /**
   * (Opcional) Preprocesador a utilizar (por ejemplo, "sass" o "less").
   * Requiere configuración adicional.
   */
  preprocessor?: string;
}

/** Configuración relacionada con HTML. */
export interface HTMLConfig {
  /**
   * Archivo de plantilla HTML que servirá como base para inyectar
   * los bundles de JavaScript y CSS.
   */
  template: string;
}

/** Configuración principal para Paket Bundler. */
export interface PaketConfig {
  /** Configuración para el procesamiento de CSS. */
  css: CSSConfig;
  /** Punto de entrada de la aplicación (HTML o JS). */
  entry: string;
  /** Configuración para el procesamiento del HTML. */
  html: HTMLConfig;
  /** Configuración para el procesamiento de JavaScript. */
  js: JSConfig;
  /** Configuración de salida del build final. */
  output: OutputConfig;
  /**
   * Lista de plugins adicionales para extender las funcionalidades
   * de Paket Bundler.
   */
  plugins: unknown[];
}

/** Configuración por defecto exportada. */
declare const defaultConfig: PaketConfig;
export default defaultConfig;
