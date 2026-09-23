<template>
  <div>
    <nav>
      <router-link to="/">Inicio</router-link> | 
      <router-link to="/nosotros">Nosotros</router-link> | 
      <router-link to="/servicios">Servicios</router-link> | 
      <router-link to="/contacto">Contacto</router-link>
    </nav>
    <hr />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style>

:root {
  --color-fondo: #f4f7f5;
  --color-texto: #333333;
  --color-primario: #2b5b3a;
  --color-secundario: #458b57;
  --color-borde: #cccccc;
  --color-blanco: #ffffff;
}

* {
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background-color: var(--color-fondo);
  color: var(--color-texto);
  margin: 0;
  padding: 0;
  line-height: 1.6;
}

main {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

nav {
  background-color: var(--color-primario);
  padding: 15px;
  text-align: center;
}

nav a {
  color: var(--color-blanco);
  text-decoration: none;
  margin: 0 15px;
  font-weight: bold;
  font-size: 1.1rem;
}

nav a.router-link-exact-active {
  text-decoration: underline;
  color: #a3d9b1;
}


button {
  background-color: var(--color-secundario);
  color: var(--color-blanco);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

button:hover {
  background-color: var(--color-primario);
}

button:disabled {
  background-color: var(--color-borde);
  cursor: not-allowed;
}

.card, .form-container, .mensaje-exito {
  background-color: var(--color-blanco);
  border: 1px solid var(--color-borde);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05); 
}


input, select, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid var(--color-borde);
  border-radius: 4px;
  margin-top: 5px;
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: var(--color-secundario);
  box-shadow: 0 0 3px var(--color-secundario);
}
</style>