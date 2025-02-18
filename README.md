# PAKET CLI

## **¿Qué es paket?**

**Paket** es un empaquetador moderno y minimalista para proyectos web que transforma tu código en puro **HTML, CSS y JavaScript** listo para usar, **sin necesidad de un servidor**.  

A diferencia de otras herramientas de build, Paket genera archivos estáticos que puedes abrir directamente en tu navegador, eliminando la complejidad de configurar servidores locales o dependencias externas. Ideal para **proyectos rápidos**, **prototipos** o **aplicaciones web ligeras**.  

## **¿Por qué usar Paket?**  

- 🚀 **Simple y rápido:** Transforma tu proyecto en segundos.  
- 📦 **Compatible con frameworks populares:** React y proximamente Vue y Svelte.  
- 🌐 **100% Offline:** Abre tu proyecto en cualquier navegador sin necesidad de un servidor web.  
- 🔄 **Transpilación automática:** Convierte tu código a ES5 para garantizar compatibilidad.  
- ✂️ **Optimización automática:** Minifica JS, CSS y elimina dependencias innecesarias.  

## **¿Para quién es Paket?**  

- **Desarrolladores** que quieren una herramienta de build simple y sin configuraciones complicadas.  
- **Diseñadores web** que necesitan entregar prototipos funcionales rápidamente.  
- **Empresas** que requieren aplicaciones web ligeras y auto-suficientes.  

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/paket-cli.svg)](https://npmjs.org/package/paket-cli)
[![Downloads/week](https://img.shields.io/npm/dw/paket-cli.svg)](https://npmjs.org/package/paket-cli)

<!-- toc -->
* [PAKET CLI](#paket-cli)
<!-- tocstop -->
## Usage
<!-- usage -->
```sh-session
$ npm install -g paket-cli
$ paket COMMAND
running command...
$ paket (--version)
paket-cli/0.1.1 win32-x64 node-v23.5.0
$ paket --help [COMMAND]
USAGE
  $ paket COMMAND
...
```
<!-- usagestop -->
## Commands
<!-- commands -->
* [`paket build`](#paket-build)
* [`paket create`](#paket-create)
* [`paket help [COMMAND]`](#paket-help-command)
* [`paket run`](#paket-run)

## `paket build`

Construye el proyecto de Paket, generando los archivos finales listos para usar.

```
USAGE
  $ paket build

DESCRIPTION
  Construye el proyecto de Paket, generando los archivos finales listos para usar.

EXAMPLES
  $ paket build
```

_See code: [src/commands/build.ts](https://github.com/Paket-App/paket-cli/blob/v0.1.1/src/commands/build.ts)_

## `paket create`

Crea un nuevo proyecto con Paket, eligiendo entre diferentes frameworks.

```
USAGE
  $ paket create

DESCRIPTION
  Crea un nuevo proyecto con Paket, eligiendo entre diferentes frameworks.

EXAMPLES
  $ paket create
```

_See code: [src/commands/create.ts](https://github.com/Paket-App/paket-cli/blob/v0.1.1/src/commands/create.ts)_

## `paket help [COMMAND]`

Display help for paket.

```
USAGE
  $ paket help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for paket.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.25/src/commands/help.ts)_

## `paket run`

Recarga automáticamente el proyecto cuando hay cambios.

```
USAGE
  $ paket run

DESCRIPTION
  Recarga automáticamente el proyecto cuando hay cambios.

EXAMPLES
  $ paket run
```

_See code: [src/commands/run.ts](https://github.com/Paket-App/paket-cli/blob/v0.1.1/src/commands/run.ts)_
<!-- commandsstop -->
