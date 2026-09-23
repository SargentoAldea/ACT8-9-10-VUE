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