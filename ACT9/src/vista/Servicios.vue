<script setup>
import { useBolsasStore } from '../store/useBolsaStore.js'
import moldePiola from '../components/moldePiola.vue'

const { state } = useBolsasStore()
</script>
<template>
  <div>
    <h2>Nuestros Servicios</h2>
    <p>Conoce las soluciones de embalaje que Bolsas Plasticas Linares tiene para tu empresa:</p>
    
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <moldePiola 
        v-for="servicio in state.servicios" 
        :key="servicio.id" 
        :servicio="servicio" 
      />
    </div>
  </div>
</template>