# Documentación del Proceso de Versionamiento con Git

*Proyecto:* Jardinería El Edén
*Aprendiz:* Jonh Alexander Cruz


## Descripción del Proceso

Este documento describe los pasos realizados para la instalación, configuración y uso de Git y GitHub como herramientas de control de versiones para el proyecto "Jardinería El Edén".

### 1. Instalación y Configuración
* Se descargó e instaló Git para Windows.
* Se configuró la identidad del usuario a nivel global mediante la terminal:
  - `git config --global user.name "Jonh Cruz"`
  - `git config --global user.email "jonhcruz746@gmail.com"`

### 2. Creación del Repositorio Local
* Se abrió la terminal (Git Bash) y se navegó hasta la carpeta del proyecto.
* Se inicializó el repositorio local ejecutando el comando: `git init`.

### 3. Flujo de Trabajo y Comandos Utilizados
Para guardar y sincronizar los archivos del proyecto, se utilizó el siguiente flujo de trabajo:

* *`git add .`*: Se utilizó para agregar todos los archivos del proyecto (HTML, CSS, JS y README) al área de preparación.
* *`git commit -m "feat: estructura inicial..."`*: Se creó el primer punto de control (commit) guardando los cambios con un mensaje descriptivo.
* *`git remote add origin [URL]`*: Se vinculó el repositorio local con el repositorio remoto creado en GitHub.
* *`git branch -M main`*: Se aseguró que la rama principal se llamara "main".
* *`git push -u origin main`*: Se subieron todos los archivos locales al repositorio remoto en GitHub.
* *`git pull origin main`*: Se utilizó para descargar e integrar los cambios realizados directamente en la plataforma web de GitHub.

### 4. Buenas Prácticas Aplicadas
* Se utilizaron **mensajes de commit descriptivos** utilizando prefijos (como `feat:`).
* Se mantuvo una copia de seguridad del código en la nube (GitHub).
* Se mantuvo una sincronización constante entre el repositorio local y el remoto mediante `pull` y `push`.

## Repositorio Remoto
El código fuente del proyecto se encuentra alojado en el siguiente enlace:
`https://github.com/jonhcruz23/jardineria-el-eden`