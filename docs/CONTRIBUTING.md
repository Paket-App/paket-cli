# Contribuyendo a Paket  

¡Gracias por tu interés en contribuir a Paket! Queremos mantener un proyecto accesible, eficiente y colaborativo. Sigue estas pautas para garantizar que tu contribución sea útil y bien integrada.  

## **1. Reportar Problemas (Issues)**  

Si encuentras un error o tienes una idea de mejora, por favor:  

- Verifica si el problema ya ha sido reportado en [Issues](https://github.com/Paket-App/paket-cli/issues).  
- Si es nuevo, crea un reporte con:  
  - **Descripción clara del problema.**  
  - **Pasos para reproducirlo.**  
  - **Sistema operativo y versión de Paket.**  
  - **Capturas de pantalla o ejemplos de código (si aplica).**  

## **2. Enviar una Contribución (Pull Request - PR)**  

Antes de enviar un PR:  

1. **Discute tu idea** en un issue si es una nueva funcionalidad.  
2. **Haz un fork del repositorio** y trabaja en una rama separada.  
3. **Usa commits descriptivos** siguiendo la convención:  

```bash
[Acción] Descripción corta  
```

Ejemplo:

```bash
[Fix] Corrige el problema con la resolución de imports en ES6  
```  

4. **Asegúrate de que tu código sigue el estilo del proyecto** y pasa todas las pruebas.  
5. **Envía un PR** explicando los cambios.  

## **3. Estilo de Código**  

Sigue estas reglas:  

- Usa TypeScript para todo el código del proyecto.
- Escribe código en ES6+, asegurándote de que pueda transpilarse sin errores.
- Define siempre los tipos correctamente y evita any a menos que sea estrictamente necesario.
- Sigue el estilo de código definido en el linter del proyecto.
- Evita dependencias innecesarias, Paket busca ser ligero.
- Comenta el código cuando sea necesario, pero prioriza la claridad.

## **4. Pruebas y Validación**  

Antes de enviar cambios, asegúrate de que:  

- El código pase las pruebas.  
- El build generado funcione sin errores.  
- No haya regresiones en funcionalidades existentes.  

## **5. Documentación**  

Si agregas una nueva funcionalidad, actualiza la documentación en el archivo correspondiente o en el README.  

## **6. Comunidad y Comunicación**  

- Sé respetuoso con todos los colaboradores.  
- Usa el idioma que prefieras (inglés o español).  
- Participa en discusiones en GitHub.  

## **7. Licencia**  

Al contribuir, aceptas que tu código se incluya bajo la misma licencia de Paket.
