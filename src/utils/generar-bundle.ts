import swc from '@swc/core'
import {readFile, writeFile} from 'node:fs/promises'
import {join} from 'node:path'
import {rolldown} from 'rolldown'
import css from 'rollup-plugin-import-css'

import {PaketConfig} from '../types/paket-config'
import {borrarArchivo} from './interacion-sistema.js'

/**
 * Configura y transforma el código fuente usando SWC para optimizar el archivo de salida.
 * La función permite minificar y transpilar el código según los parámetros proporcionados.
 *
 * @summary Configura y transforma el código fuente utilizando SWC.
 *
 * @param {string} directorioSalida - Ruta del directorio donde se generarán los archivos de salida.
 * @param {string} nombreArchivo - Nombre del archivo de salida que se generará.
 * @param {boolean} minificar - Indica si se debe minificar el código fuente (comprimir).
 * @param {boolean} transpile - Indica si se debe transpilar el código (modificar nombres de variables).
 *
 * @throws {Error} Lanza un error si no se puede leer el archivo de entrada o escribir el archivo de salida,
 * o si ocurre algún problema al transformar el código con SWC.
 *
 * @example
 * try {
 *   await configurarSWC('./dist', 'output.js', true, false);
 *   console.log('Código transformado exitosamente');
 * } catch (error) {
 *   console.error('Error en la transformación del código:', error);
 * }
 */
async function configurarSWC(directorioSalida: string, nombreArchivo: string, minificar: boolean, transpile: boolean) {
  const archivoEntrada = join(directorioSalida, 'index.js')
  const archivoSalida = join(directorioSalida, nombreArchivo)

  const opcionesSWC = {
    filename: nombreArchivo,
    jsc: {
      minify: {
        compress: minificar,
        mangle: transpile,
      },
      parser: {
        dynamicImport: true,
        functionBind: true,
        jsx: false,
        syntax: 'ecmascript',
      },
      target: 'es5',
      transform: {},
    },
    sourceMaps: true,
  } as const

  try {
    const codigoFuente = await readFile(archivoEntrada, 'utf8')
    const salidaCodigo = await swc.transform(codigoFuente, opcionesSWC)
    await writeFile(archivoSalida, salidaCodigo.code, 'utf8')
  } catch (error) {
    console.error('Error al transformar el código:', error)
  }
}

/**
 * Empaqueta todo el proyecto utilizando RollDown, preparándolo para
 * pasar a SWC y generar el proyecto final.
 *
 * Esta función usa RollDown para empaquetar los archivos del proyecto
 * en un único archivo, con opciones personalizadas, y luego genera el
 * archivo empaquetado en el directorio de salida proporcionado.
 *
 * @summary Empaqueta el proyecto y prepara el código para ser procesado por SWC.
 *
 * @param {string} directorioSalida - El directorio donde se generará el archivo empaquetado final.
 *
 * @example
 * await configurarRollDown('build');
 *
 * @returns {Promise<void>} Retorna una promesa que se resuelve cuando el empaquetado se complete.
 *
 * @throws {Error} Lanza un error si hay problemas al empaquetar o escribir el archivo de salida.
 */
async function configurarRollDown(directorioSalida: string) {
  const bundleOptions = {
    external: [],
    input: 'src/index.js',
    plugins: [css],
  }

  const bundle = await rolldown(bundleOptions)
  const formatoSalida = 'umd' as const

  const outputOptions = {
    dir: directorioSalida,
    format: formatoSalida,
    inlineDynamicImports: true,
  }

  await bundle.write(outputOptions)
}

/**
 * Compila y empaqueta todo el código del proyecto con ayuda del archivo
 * de configuracion.
 *
 * @summary compila y empaqueta el proyecto
 *
 * @example
 * //... mucho código
 * try {
 *   generarBundle(configPaket);
 * } catch (error) {
 *   console.error('No se pudo generar el bundle:', error);
 * }
 *
 * @param {PaketConfig} configuracion Archivo de configuracion de paket
 *
 * @throws {Error} Puede generar los tipicos errores al generar el bundle, por
 * diferentes motivos, el archivo esta mal o incluso puede que tenga errores el
 * código, etc.
 */
export async function generarBundle(configuracion: PaketConfig) {
  await configurarRollDown(configuracion.output.path)
  await configurarSWC(
    configuracion.output.path,
    configuracion.output.filename,
    configuracion.js.minify,
    configuracion.js.transpile,
  )
  if (configuracion.output.filename !== 'index.js') borrarArchivo(`${configuracion.output.path}/index.js`)
}
