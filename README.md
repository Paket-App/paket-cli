paket-cli
=================

CLI para construir proyectos con paket :)


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/paket-cli.svg)](https://npmjs.org/package/paket-cli)
[![Downloads/week](https://img.shields.io/npm/dw/paket-cli.svg)](https://npmjs.org/package/paket-cli)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g paket-cli
$ paket COMMAND
running command...
$ paket (--version)
paket-cli/0.0.0 win32-x64 node-v22.12.0
$ paket --help [COMMAND]
USAGE
  $ paket COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`paket build`](#paket-build)
* [`paket create`](#paket-create)
* [`paket help [COMMAND]`](#paket-help-command)
* [`paket plugins`](#paket-plugins)
* [`paket plugins add PLUGIN`](#paket-plugins-add-plugin)
* [`paket plugins:inspect PLUGIN...`](#paket-pluginsinspect-plugin)
* [`paket plugins install PLUGIN`](#paket-plugins-install-plugin)
* [`paket plugins link PATH`](#paket-plugins-link-path)
* [`paket plugins remove [PLUGIN]`](#paket-plugins-remove-plugin)
* [`paket plugins reset`](#paket-plugins-reset)
* [`paket plugins uninstall [PLUGIN]`](#paket-plugins-uninstall-plugin)
* [`paket plugins unlink [PLUGIN]`](#paket-plugins-unlink-plugin)
* [`paket plugins update`](#paket-plugins-update)
* [`paket run`](#paket-run)

## `paket build`

Comadno para construir proyecto de paket

```
USAGE
  $ paket build

DESCRIPTION
  Comadno para construir proyecto de paket

EXAMPLES
  $ paket build
```

_See code: [src/commands/build.ts](https://github.com/Paket-App/paket-cli/blob/v0.0.0/src/commands/build.ts)_

## `paket create`

Comando para crea un proyecto de paket

```
USAGE
  $ paket create

DESCRIPTION
  Comando para crea un proyecto de paket

EXAMPLES
  $ paket create
```

_See code: [src/commands/create.ts](https://github.com/Paket-App/paket-cli/blob/v0.0.0/src/commands/create.ts)_

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

## `paket plugins`

List installed plugins.

```
USAGE
  $ paket plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ paket plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.31/src/commands/plugins/index.ts)_

## `paket plugins add PLUGIN`

Installs a plugin into paket.

```
USAGE
  $ paket plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into paket.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the PAKET_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the PAKET_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ paket plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ paket plugins add myplugin

  Install a plugin from a github url.

    $ paket plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ paket plugins add someuser/someplugin
```

## `paket plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ paket plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ paket plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.31/src/commands/plugins/inspect.ts)_

## `paket plugins install PLUGIN`

Installs a plugin into paket.

```
USAGE
  $ paket plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into paket.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the PAKET_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the PAKET_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ paket plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ paket plugins install myplugin

  Install a plugin from a github url.

    $ paket plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ paket plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.31/src/commands/plugins/install.ts)_

## `paket plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ paket plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ paket plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.31/src/commands/plugins/link.ts)_

## `paket plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ paket plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ paket plugins unlink
  $ paket plugins remove

EXAMPLES
  $ paket plugins remove myplugin
```

## `paket plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ paket plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.31/src/commands/plugins/reset.ts)_

## `paket plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ paket plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ paket plugins unlink
  $ paket plugins remove

EXAMPLES
  $ paket plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.31/src/commands/plugins/uninstall.ts)_

## `paket plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ paket plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ paket plugins unlink
  $ paket plugins remove

EXAMPLES
  $ paket plugins unlink myplugin
```

## `paket plugins update`

Update installed plugins.

```
USAGE
  $ paket plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.31/src/commands/plugins/update.ts)_

## `paket run`

Comando para recargar el proyecto de paket

```
USAGE
  $ paket run

DESCRIPTION
  Comando para recargar el proyecto de paket

EXAMPLES
  $ paket run
```

_See code: [src/commands/run.ts](https://github.com/Paket-App/paket-cli/blob/v0.0.0/src/commands/run.ts)_
<!-- commandsstop -->
