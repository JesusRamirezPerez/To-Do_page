# Configuracion para git

## Configuracion inicial

## Configuracion de archivos
Se inicia el repositorio, el repositorio es la carpeta de archivos a subir.
```
git init
```
Se crea un archivo de configuracion llamado "gitignore" y se colocan las rutas que no se tendran cambios.
```
# Archivos a ignorar

node_modules/

dist/
```
Toma los archivos del proyecto y los prepara para guardar los cambios.
```
git add .
```
Si quisieramos solo subir un archivo especifico.
```
git add README.md
```
Se crea la foto de los archivos y se suben al commit.
```
git commit -m "Mi primer Commit"
```
Para recuperar el repositorio.
Se ejecuta el archivo y lo recontruye al ultimo commit.
```
git checkout --.
```
Para mostrar el ultimi commot guardado se uutiliza:
```
git log
```

## Configuracion para github

Se crea el un nuevo repositorio desde la pagina de "github.com".
Al crear el repositorio se mostrara el enlace para subir los elemntos.
Solo se ejecuta una sola vez cuando se configura.
```
git remote add origin https://github.com/JesusRamirezPerez/Webpack-starter.git
```
Se especifica la rama en donde se subiran los archivos.
Esto solo se hace al inicio del init.
En este caso se estan subiendo a la rama **"main"**
```
git branch -M main
```
Para actualizar los archivos y subirlos.
```
git push -u origin 
```
Cada vez que quisieramos arctulizar se deben utilizar el asiguiente secuencia.
```
git add .
git commit -m "<-- Comentario del commit -->"
git push
```