# Movie Trailers

Es una página web que presentará los próximos trailers de películas nuevas que hayan salido o estén por salir.

## Tecnologías

- HTML
- CSS
- Javascript
- Node.js

## Instrucciones

Para correr el proyecto se debe:

1. Clonar el repositorio en el IDE de su preferencia.
2. Configura e instala el entorno de Node.js si es necesario.
3. Instala las dependencias usando "npm install" en la consola/terminal.
4. Corre el proyecto usando "node app.js" en la consola/terminal.

## Pruebas

# CI/CD con GitHub Actions

Este proyecto utiliza GitHub Actions para la integración y entrega continua (CI/CD). El workflow está configurado para ejecutarse automáticamente cada vez que se abre un pull request hacia la rama `QA`.

# Configuración del Workflow

El workflow de GitHub Actions se encuentra en `.github/workflows/tests.yml`. Este workflow incluye los siguientes pasos:

1. **Check out repository**: Clona el repositorio.
2. **Set up Node.js**: Configura el entorno de Node.js.
3. **Install dependencies**: Instala las dependencias del proyecto.
4. **Run tests**: Ejecuta las pruebas definidas en el script de pruebas del archivo `package.json`.
5. **Notify on failure**: Envía una notificación si las pruebas fallan.
6. **Prevent merge on failure**: Marca el commit con un estado de fallo, evitando que el pull request se pueda mergear hasta que las pruebas pasen.

# Cómo ejecutar las pruebas localmente

Para ejecutar las pruebas localmente, sigue estos pasos:

1. Asegúrate de tener todas las dependencias instaladas:
   ```bash
   npm install

2. Corre el comando:
   ```bash
   npm test
   

## Integrantes

- Eliardo Benoit - 1086299
- Janna Beras - 1100583 
- Maria Garcia -1104478
- Axell Baez - 1100321
- Gonzalo Pina - 1089505
