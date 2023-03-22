# Aplicacion-VideoTube-css-html-js
Descripcion del Desarrollo
El objetivo del proyecto es construir una página web usando HTML, CSS y JavaScript usando como referencia el archivo figma que se encuentra en el documento propuesto. Además, la página debe tener diseño adaptable.
![imagen](https://user-images.githubusercontent.com/99287560/226687154-3d806ff0-ea7b-4bc7-8564-847c7a6f827b.png)
Además, la página web debe cumplir con los siguientes requerimientos:

    Arreglos y objetos
    Funciones
    Eventos (.addEventListener())
    Métodos de arreglos
    Objeto Storage (localStorage y/o sessionStorage)
    Responsive design (implementando flex box y media query CSS), cumpliendo con el
    diseño propuesto en el archivo figma.

Requerimientos funcionales:

    Al realizar click sobre una card de cualquier video, debe dirigir al usuario a la página de
    detalles del elemento.
    Funcionalidad de los botones de filtrado por categoría
    Construir una página con un formulario que permita agregar un nuevo video, junto con las
    validaciones en JavaScript para convertir todos los inputs requeridos.
    En el aplicativo debe mostrar como mínimo 30 cards de video y reproducir como mínimo
    10 videos.

Estructuras de Carpetas

El proyecto cuenta con 4 carpetas y un archivo index.html que contiene la estructura de la pantalla principal de la página web. En la carpeta assetsse encuentran el favicon del sitio y el logo del mismo, etc.

En la segunda carpeta llamada CSS encuentra el archivo details.css que contiene todos los estilos relacionados a la pantalla de detalles de los videos, también está el archivo videoForm.css que tiene estilos para el formulario de agregar video y el archivo styles.css contiene los estilos de la pantalla principal del proyecto.

En la tercera carpeta llamada JSS se encuentra el archivo data.js que contiene toda la info de los videos con los que se va a trabajar, también se encuentra el archivo details.js que contiene toda la lógica de programación para mostrar la información del detalle del video y los sugeridos. Además, se encuentra el archivo videoForm.js que también contiene lógica para que el usuario pueda añadir y visualizar un nuevo. Por último el archivo scripts.js contiene también lógica para poder consumir y mostrar toda la información referente a los videos.

También se encuentra la carpeta template que contiene details.html que permite visualizar el detalle del video que el usuario desea, además de esto puede visualizar los videos sugeridos. En esta misma carpeta se encuentra el archivo videoFomr.html que contiene la estructura del formulario con los campos necesarios para que el usuario pueda añadir un nuevo video.

![imagen](https://user-images.githubusercontent.com/99287560/226687492-bb17159e-4bc4-4fb6-9516-2b55b5dcf6ff.png)

Resumen paso a paso y Desarrollo

1. Se construye el Array de objetos con los videos predefinidos, dicho arreglo tiene 7 propiedades: id, name, thumbnail, link, img, views y category.
![imagen](https://user-images.githubusercontent.com/99287560/226687941-15146f09-f764-4aed-8ace-f99dcd337146.png)

2. Lo siguiente es estructurar la página principal del sitio usando etiquetas semánticas, y asimismo se adaptaron los archivos details.html y videoForm.html para su correcto funcionamiento.
![imagen](https://user-images.githubusercontent.com/99287560/226688250-7e0b07d5-db7c-40bd-a14f-80786b0770ac.png)



3. Se procede a construir los archivos .js para consumir la información de los videos. En donde el archivo scripts.js contiene funcionalidades y utilidades como:

  Importar la información de los videos alojada details.js
  Pintar o mostrar los videos con su respectiva información.
  Filtrar los videos por los botones de categorías ya definidas por propiedad.
  Filtrar el video que el usuario requiera en la barra de búsqueda.
  Validar que los campos de la barra de búsqueda.
  Guardar y consumir datos con el SessionStorage con método como setItem y getItem.
  Redigir a la página de detalles del video cuando el usuario da click en un video cualquiera.
  Redigir al usuario cuando quiera agregar un nuevo video mediante un botón de "Agregar nuevo video".

4. El archivo details.js contiene funcionalidades como:

  Redigir al usuario a la página principal cuando da click en el logo del sitio web.
  Reproducir el video en automático.
  Mostrar información relacionada al video en detalle, como el titulo, la imagen del canal, las visualizaciones y la fecha.
  Mostrar los videos sugeridos con la información a detalle de cada video.
  Botón de agregar nuevo video.
  Guardar y consumir datos con el SessionStorage con método como setItem y getItem.

5. El archivo videoForm.js contiene funcionalidades como:

  Validar todos los campos del formulario para añadir un nuevo video.
  Escuchar los eventos que se puedan dar de click.
  Guardar y consumir datos con el SessionStorage con método como setItem y getItem.
  Añadir y pintar un nuevo video.

6. Se trabajaron en los demás archivos con extensión .css, que contienen todos los estilos de colores, posicionamiento, responsive design y demás.
![imagen](https://user-images.githubusercontent.com/99287560/226688964-d6870122-972a-4ffc-b4e1-022bbaa9d721.png)
![imagen](https://user-images.githubusercontent.com/99287560/226689163-33787eb0-d78d-4e1e-843b-b78c2516cb31.png)
![imagen](https://user-images.githubusercontent.com/99287560/226689347-dd3c9f32-080b-4a57-bcf4-82a10f230d62.png)

Vista Mobile:
![imagen](https://user-images.githubusercontent.com/99287560/226689624-3942636b-3fbf-422a-920b-cccde8689809.png)
![imagen](https://user-images.githubusercontent.com/99287560/226689679-9671c7a5-a26e-4e41-8ddc-7ab9e8302eb6.png)


