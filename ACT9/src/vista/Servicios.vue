<script setup>
import { ref, computed } from 'vue'
import { useBolsasStore } from '../store/useBolsaStore.js'
import moldePiola from '../components/moldePiola.vue'

const { state } = useBolsasStore()
const busquedaNombre = ref('')
const busquedaCategoria = ref('')

const serviciosFiltrados = computed(() => {
  return state.servicios.filter(servicio => {
    const coincideNombre = servicio.nombre.toLowerCase().includes(busquedaNombre.value.toLowerCase())
    const coincideCategoria = busquedaCategoria.value === '' || servicio.categoria === busquedaCategoria.value
    
    return coincideNombre && coincideCategoria
  })
})


function procesarSeleccion(servicioElegido) {
  state.servSeleccionado = servicioElegido.nombre
  alert(`¡Has seleccionado: ${servicioElegido.nombre}! Ve a la pestaña de Contacto para solicitarlo.`)
}
</script>

<template>
  <div>
    <h2>Catálogo de Servicios</h2>
    
    <div v-if="state.servSeleccionado" style="background: #e8f5e9; padding: 10px; margin-bottom: 20px;">
      <strong>Servicio de interés seleccionado:</strong> {{ state.servSeleccionado }}
    </div>

    <div style="margin-bottom: 20px; display: flex; gap: 10px;">
      <input 
        v-model="busquedaNombre" 
        type="text" 
        placeholder="Buscar por nombre..." 
      />
      
      <select v-model="busquedaCategoria">
        <option value="">Todas las categorías</option>
        <option value="Producción">Producción</option>
        <option value="Personalización">Personalización</option>
        <option value="Logística">Logística</option>
        <option value="Consultoría">Consultoría</option>
        <option value="Sostenibilidad">Sostenibilidad</option>
      </select>
    </div>

    <div v-if="serviciosFiltrados.length > 0">
      <moldePiola
        v-for="servicio in serviciosFiltrados" 
        :key="servicio.id" 
        :servicio="servicio"
        @me-interesa="procesarSeleccion"
      />
    </div>
    
    <div v-else style="padding: 20px; background-color: #ffcccc;">
      <p>No se encontraron servicios que coincidan con tu búsqueda.</p>
      <button @click="busquedaNombre = ''; busquedaCategoria = ''">Limpiar filtros</button>
    </div>

  </div>
</template>