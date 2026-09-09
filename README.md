# ACT9-VUE
vueee

Parte 1 y 2 - Preparación Backend

Simplemente creación de carpeta "BACKEND" en la cual posteriormente se hace uso de "npm init -y" el cual crea "package.json"
aqui es donde node puede guardar información como dependencias utilizadas.

Para instalar Express , el cual es el entorno de trabajo a utilizar para el backend, solo se debe usar "npm install express", si se desea comprobar la instalación, se puede consultar el archivo "package.json".

Parte 3 y 4 - Primer Servidor

Cuando se observa el "app.get()", este se utiliza para comunicarle al servidor que debe hacer al momento de que un usuario visite cierta url, en la misma línea se observa el "req" y el "res", significan "request" y "response" respectivamente, como su nombre indica, permiten contener la información de la petición del cliente y asi mismo enviar una respuesta.

El "app.listen", según se puede apreciar, se utiliza al iniciar el servidor y le indica donde escuchar las peticiones en el puerto que le sea especificado.

Parte 5.1 – Datos de servicios

En resumidas cuentas, contiene los servicios provenientes del "molde" o "plantilla", evidentemente será adaptado en un futuro (cercano), pero de momento se deja asi para probar y una vez funcionando se procede con la adaptación.

Parte 6 – API de servicios

Entre las diferencias entre "res.send()" y "res.json()", tal vez una de las más grandes, es su forma de funcionar, mientras que "res.send()" se inclina a un uso más general siendo capaz de detectar tipos de datos y cambiar su cabecera en funcion de lo que recibe, el "res.json()" toma todo valor y lo convierte a json sin importar que sea, practicamente cuenta con un diseño más exclusivo para APIs REST.

Parte 7 – Consulta por ID

"req.params" sirve para poder guardar valores que esten en la dirección web, se usa con "Number" principalmente porque "req.params" hace uso de strings, al usar "Number" se convierte a número para poder operar con el.
Cuando se habla del estado 404, o error 404 se refiere a que no se ha encontrado la página solicitada