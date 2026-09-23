<script setup>
const props = defineProps({
  servicio: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['me-interesa'])

function seleccionarServicio() {
  emit('me-interesa', props.servicio)
}
</script>

<template>
  <div style="border: 1px solid #ccc; padding: 15px; margin-bottom: 10px; border-radius: 5px;">
    <h3>{{ servicio.nombre }}</h3>
    <p><strong>Categoría:</strong> {{ servicio.categoria }}</p>
    <p><strong>Descripción:</strong> {{ servicio.descripcion }}</p>
    <p><strong>Valor:</strong> {{ servicio.precio }}</p>
    <div v-if="servicio.disponibilidad">
      <p style="color: green;">Disponible</p>
      <button @click="seleccionarServicio" style="background-color: #007bff; color: white;">
        Me interesa
      </button>
    </div>
    <div v-else>
      <p style="color: red;">Servicio temporalmente no disponible</p>
      <button disabled>Agotado</button>
    </div>
  </div>
</template>