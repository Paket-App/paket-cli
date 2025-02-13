# Estructura

En este documento se especificará el objetivo de cada elemento del proyecto.

## Archivos

Todo comienza en esta sección. En primer lugar, todo el código se encuentra ubicado en la carpeta `src/`.

- **Carpeta `src/commands/`:** Aquí se encuentran todos los comandos disponibles para esta aplicación CLI. No deben existir comandos en ninguna otra ubicación.
  
- **Carpeta `src/config/`:** En esta carpeta únicamente se incluirán elementos relacionados con la configuración necesaria para el funcionamiento del CLI. Por ejemplo, la carga del **archivo de configuración** de Paket. Esta carpeta no debe contener:
  - Comandos del CLI.
  - Funciones que no estén directamente relacionadas con la configuración del CLI.
  - Configuraciones de plantillas u otros elementos no relacionados con el CLI.

- **Carpeta `src/templates/`:** En esta carpeta se encuentran todos los elementos relacionados con las plantillas, incluyendo su estructura y configuración (la cual es distinta a la configuración del CLI). Por ejemplo, en la configuración del template de JavaScript Vanilla, es posible que se requiera una configuración específica para SWC y Rollup. A continuación, se describe la estructura de esta carpeta:
  - **`src/templates/config/`:** En esta carpeta deben colocarse todos los archivos relacionados con la configuración de las plantillas.
  - **`src/templates/template-x/`:** En esta estructura, la "x" será reemplazada por el nombre de la plantilla correspondiente, la cual contendrá sus respectivos archivos.

- **Carpeta `src/doc/`:** Aquí se encuentra toda la documentación relacionada con el proyecto. La documentación estará disponible exclusivamente en formato Markdown.

---

En caso de añadir nuevas carpetas, se especificarán aquí.
