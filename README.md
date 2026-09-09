# ACT9-VUE
vueee

Parte 1 y 2 - Preparación Backend

Simplemente creación de carpeta "BACKEND" en la cual posteriormente se hace uso de "npm init -y" el cual crea "package.json"
aqui es donde node puede guardar información como dependencias utilizadas.

Para instalar Express , el cual es el entorno de trabajo a utilizar para el backend, solo se debe usar "npm install express", si se desea comprobar la instalación, se puede consultar el archivo "package.json".

Parte 3 y 4 - Primer Servidor

Cuando se observa el "app.get()", este se utiliza para comunicarle al servidor que debe hacer al momento de que un usuario visite cierta url, en la misma línea se observa el "req" y el "res", significan "request" y "response" respectivamente, como su nombre indica, permiten contener la información de la petición del cliente y asi mismo enviar una respuesta.

El "app.listen", según se puede apreciar, se utiliza al iniciar el servidor y le indica donde escuchar las peticiones en el puerto que le sea especificado.