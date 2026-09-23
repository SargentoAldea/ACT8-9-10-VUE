<template>
  <div class="nosotros-container">
    
    <div class="card nosotros-card">
      <h1 class="nosotros-titulo">
        Quiénes Somos
      </h1>
      
      <p class="texto-principal">
        En Bolsas Plasticas Linares llevamos más de 5 años abasteciendo al mercado nacional con 
        insumos plásticos. Nuestra misión es optimizar la logística y el empaque 
        de nuestros clientes a través de productos duraderos y a la medida.
      </p>
      
      <p class="texto-secundario">
        Actualmente, estamos trabajando para incorporar líneas de producción sustentables, 
        asesorando a nuestros socios comerciales en el uso responsable del plástico.
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

.nosotros-container {
  display: flex; 
  justify-content: center; 
  margin-top: 20px;
}

.nosotros-card {
  max-width: 700px; 
  text-align: center; 
  padding: 40px 30px;
}

.nosotros-titulo {
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