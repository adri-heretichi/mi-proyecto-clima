<!-- Commit 5: Documentación nueva para versión avanzada-->
# ClimApp

Una versión más avanzada e interactiva de la aplicación del clima. Incluye buscador de ciudades, pronóstico de 5 días y alertas simuladas.

## Funcionalidades

- Buscador de ciudades (Rosario, Córdoba, Buenos Aires).
- Clima actual, temperatura y descripción por ciudad.
- Pronóstico extendido de 5 días.
- Alertas meteorológicas si aplica.
- Datos simulados desde `datos.php`.

## Estructura

- `index.html`: interfaz completa basada en diseño original.
- `style.css`: estilos visuales modernos.
- `script.js`: funciones divididas para claridad (datos, forecast, alertas).
- `datos.php`: devuelve datos personalizados por ciudad.
- `CORRECCION.md`: explica la mala práctica y cómo fue corregida.

## Cómo usar

1. Clona este repositorio.
2. Ejecuta un servidor PHP local:
   ```
   php -S localhost:8000
   ```
3. Visita `http://localhost:8000` y escribe una ciudad en el buscador.

## Tecnologías usadas

- HTML5 + CSS3
- JavaScript modular
- PHP backend simulado

