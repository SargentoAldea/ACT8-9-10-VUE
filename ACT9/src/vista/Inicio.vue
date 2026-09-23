<template>
  <div class="inicio-container">
    
    <div class="card inicio-card">
      <h1 class="inicio-titulo">
        Bienvenido a Bolsas Plásticas Linares
      </h1>
      
      <p class="texto-principal">
        Somos una empresa especializada en la fabricación, personalización y distribución 
        de bolsas plásticas de alta calidad para comercios y empresas.
      </p>
      
      <p class="texto-secundario">
        Nuestro compromiso es entregar soluciones de embalaje resistentes, adaptadas 
        a las necesidades de tu negocio y con opciones de transición ecológica.
      </p>
      
      <router-link to="/servicios">
        <button class="boton-grande">
          Ver nuestros servicios
        </button>
      </router-link>
    </div>

  </div>
</template>

<style scoped>

.inicio-container {
  display: flex; 
  justify-content: center; 
  margin-top: 20px;
}

.inicio-card {
  max-width: 700px; 
  text-align: center; 
  padding: 40px 30px;
}

.inicio-titulo {
  color: var(--color-primario); 
  margin-bottom: 20px;
}

.texto-principal {
  font-size: 1.1rem; 
  margin-bottom: 15px;
}

.texto-secundario {
  color: #555; 
  margin-bottom: 30px;
}

.boton-grande {
  font-size: 1.1rem; 
  padding: 12px 24px;
}
</style>