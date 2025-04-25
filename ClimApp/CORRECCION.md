# CORRECCIÓN

## ✅ Mala práctica identificada:
El proyecto original solo mostraba información estática, sin interacción del usuario ni diferenciación por ciudad. Además, no se utilizaban funciones organizadas en el JavaScript, y no se validaban entradas.

## ❌ ¿Por qué es una mala práctica?
Una aplicación climática sin buscador no permite personalización, y sin estructura modular en JS es difícil de mantener y escalar. Además, si los datos son los mismos para todos, la experiencia del usuario se ve limitada.

## 🛠 ¿Cómo lo solucioné?
- Agregué un campo de entrada y un botón para que el usuario escriba una ciudad y vea su clima.
- Mejoré `script.js` dividiendo la lógica en funciones reutilizables (`actualizarClima`, `mostrarDatos`, etc.).
- Modifiqué `datos.php` para devolver resultados distintos según la ciudad (usando `switch`).
- Se conserva el diseño original y se respetan las buenas prácticas de organización.

## 🌟 Beneficios:
- La app ahora es interactiva y responde a las acciones del usuario.
- Es más fácil mantener y extender el código.
- El comportamiento se acerca más a una app climática real.
