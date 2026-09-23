<script setup>
const props = defineProps({
  servicio: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div style="border: 1px solid #ccc; padding: 15px; margin-bottom: 10px;">
    <h3>{{ servicio.nombre }}</h3>
    <p><strong>Categoría:</strong> {{ servicio.categoria }}</p>
    <p><strong>Descripción:</strong> {{ servicio.descripcion }}</p>
    <p><strong>Valor referencial:</strong> {{ servicio.precio }}</p>
    
    <p>
      <strong>Disponibilidad:</strong> 
      <span v-if="servicio.disponibilidad" style="color: green;">Disponible</span>
      <span v-else style="color: red;">No disponible temporalmente</span>
    </p>
  </div>
</template>