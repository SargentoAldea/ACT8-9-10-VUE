# ACT9-VUE
Julián Chirino
Rubro: Fabricación Bolsas Plasticas o Ecologicas

Parte 1 y 2 - Preparación Backend

Simplemente creación de carpeta "BACKEND" en la cual posteriormente se hace uso de "npm init -y" el cual crea "package.json"
aqui es donde node puede guardar información como dependencias utilizadas.

Para instalar Express , el cual es el entorno de trabajo a utilizar para el backend, solo se debe usar "npm install express", si se desea comprobar la instalación, se puede consultar el archivo "package.json".

Parte 3 y 4 - Primer Servidor

Cuando se observa el "app.get()", este se utiliza para comunicarle al servidor que debe hacer al momento de que un usuario visite cierta url, en la misma línea se observa el "req" y el "res", significan "request" y "response" respectivamente, como su nombre indica, permiten contener la información de la petición del cliente y asi mismo enviar una respuesta.

El "app.listen", según se puede apreciar, se utiliza al iniciar el servidor y le indica donde escuchar las peticiones en el puerto que le sea especificado.

Parte 5.1 – Datos de servicios

En resumidas cuentas, contiene los servicios provenientes del "molde" o "plantilla", evidentemente será adaptado en un futuro (cercano), pero de momento se deja asi para probar y una vez funcionando se procede con la adaptación.

//Update//
Finalmente me fui por los servicios de fabricación de bolsas plasticas, inspirado por un negocio de un familiar, el cual se dedica a la venta del producto ya fabricado, todos los productos/servicios intentan ser cercanos a la realidad, la plantilla base sigue siendo iguales (nombre, cat, desc y precio) pero todos los servicios fueron reemplazados por los "reales" de la empresa, por lo tanto todos cuentan con su nombre, categoría (Aseo, Comercial, Ecologico o Servicio), precio y Descripción.

Parte 6 – API de servicios

Entre las diferencias entre "res.send()" y "res.json()", tal vez una de las más grandes, es su forma de funcionar, mientras que "res.send()" se inclina a un uso más general siendo capaz de detectar tipos de datos y cambiar su cabecera en funcion de lo que recibe, el "res.json()" toma todo valor y lo convierte a json sin importar que sea, practicamente cuenta con un diseño más exclusivo para APIs REST.

Parte 7 – Consulta por ID

"req.params" sirve para poder guardar valores que esten en la dirección web, se usa con "Number" principalmente porque "req.params" hace uso de strings, al usar "Number" se convierte a número para poder operar con el.
Cuando se habla del estado 404, o error 404 se refiere a que no se ha encontrado la página solicitada.

Parte 8 - Filtro por Categoría

De forma sencilla, la diferencia entre req.params y req.query es que el primero sirve a la hora de identificar un recurso en específico, además es obligatorio, mientras que el segundo se más para aplicar un filtro y es más permisivo siendo opcional.

Parte 9 – Middleware JSON

express.json() tendrá un rol más importante en futuros trabajos dado que permite interpretar cuerpos de solicitudes en formato JSON, infaltable cuando se hable de POST y PUT

Parte 12 – Pruebas finales

Pruebas

http://localhost:3000/api/servicios
Resultado:
[{"id":1,"nombre":"Bolsa Camiseta Blanca","categoria":"Comercial","descripcion":"Paquete de 500 bolsas tipo camiseta.","precio":8500,"disponible":true},{"id":2,"nombre":"Bolsa de Basura Industrial","categoria":"Aseo","descripcion":"Pack de 10 Bolsas de basura para carga pesada 360L.","precio":7500,"disponible":true},{"id":3,"nombre":"Bolsas biodegradables","categoria":"Ecologico","descripcion":"Hechas a base de almidon de maiz.","precio":5000,"disponible":false},{"id":4,"nombre":"Bolsas Taco 20x30","categoria":"Comercial","descripcion":"100 unidades, ideal para almacenes.","precio":2500,"disponible":true},{"id":5,"nombre":"Bolsas tipo Zipper","categoria":"Comercial","descripcion":"Ideal para protección de documentos o alimentos congelados.","precio":4500,"disponible":true},{"id":6,"nombre":"Servicio de calcomanias","categoria":"Servicio","descripcion":"Servicio de calcomanias personalizado.","precio":6000,"disponible":false},{"id":7,"nombre":"Bolsas Celofan","categoria":"Comercial","descripcion":"Pack de 100 unidades de bolsas polipropileno cristal.","precio":3000,"disponible":true},{"id":8,"nombre":"Bolsas Papel Kraft","categoria":"Ecologico","descripcion":"Pack de 50 unidades de bolsas papel Kraft con Asa.","precio":9500,"disponible":false}]

http://localhost:3000/api/servicios/1
Resultado:
{"id":1,"nombre":"Bolsa Camiseta Blanca","categoria":"Comercial","descripcion":"Paquete de 500 bolsas tipo camiseta.","precio":8500,"disponible":true}

http://localhost:3000/api/servicios/999
Resultado:
{"mensaje":"Servicio no encontrado"}

http://localhost:3000/api/servicios?categoria=Comercial
Resultado:
[{"id":1,"nombre":"Bolsa Camiseta Blanca","categoria":"Comercial","descripcion":"Paquete de 500 bolsas tipo camiseta.","precio":8500,"disponible":true},{"id":4,"nombre":"Bolsas Taco 20x30","categoria":"Comercial","descripcion":"100 unidades, ideal para almacenes.","precio":2500,"disponible":true},{"id":5,"nombre":"Bolsas tipo Zipper","categoria":"Comercial","descripcion":"Ideal para protección de documentos o alimentos congelados.","precio":4500,"disponible":true},{"id":7,"nombre":"Bolsas Celofan","categoria":"Comercial","descripcion":"Pack de 100 unidades de bolsas polipropileno cristal.","precio":3000,"disponible":true}]

http://localhost:3000/api/servicios?categoria=Omero
Resultado:
[]

*Consola de Node no presenta problemas

¿Como ejecutar el Backend?

En primer lugar se necesita abrir una terminal en la carpeta "BACKEND" en la cual se procede de la siguiente manera:

1. Ejecutar "npm install" para instalar dependencias
2. Iniciar servidor usando "node "server.js"
3. Ingresar en el navegador o desde el propio Vs Code a "http://localhost:3000"

Reflexión final
Una actividad bastante divertida y entretenida diría yo, pero no deja de ser importante para nuestro aprendizaje y porsupuesto que para poder tener codigo a mano en un futuro no muy lejano e incluso toda la información en este readme sirve perfectamente como apunte o para refrescar ciertos contenidos.



//////////FUSIÓN CON ACT8//////////
Este era un repo local, debido a que pase por alto la parte del documento que decia que simplemente había que usar el repo de la ACT8 para la 9 Ocurrio esto y para no tenerlos separados, se ordena y fusiona para que quede 1 solo.

Parte 1 – Reutilización del proyecto

Por ahora unicamente se reutilizo useRecepcionStore.js aunque evidentemende se modifico dando como resultado useBolsaStore.js, Básicamente es lo mismo y fue el elegido debido a su facilidad para adaptar, no se descarta tomar algo de la ACT7 más adelante, pero por ahora siendo el más sencillo de adaptar, unicamente se da el inicio con este.

Parte 2 - Navegación y vistas

Por ahora todo muy simple, las vistas creadas se encuentran en la carpeta "vistas" y corresponden a Inicio, Nosotros, Contacto y Servicios, dada su simplicidad por ahora no fue adaptado nada de la actividad anterior para estas vistas.
La navegación es mediante un simple NavBar en App.vue haciendo uso de Vue Router mediante los "router-link" el cual reemplaza a los enlaces tradicionales y la gracia de esto es no recargar la pagina completamente.

Parte 3 - Catálogo de Servicios y componentes

Para poder cumplir con este punto, se hace uso del useBolsaStore.js, el cual fue adaptado de la actividad anterior, para la sección de servicios se crea un arreglo reactivo con las 6 prestaciones, tambien se crea el componente reutilizable "moldePiola.vue" el cual es llamado dentro de un v-for en Servicios.vue, la información de cada servicio se comunica mediante una prop llamada "servicio".