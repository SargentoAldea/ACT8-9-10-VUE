<script setup>
import { ref, onMounted } from 'vue'
import { useBolsasStore } from '../store/useBolsaStore.js'

const { state } = useBolsasStore()
const form = ref({
  nombre: '',
  correo: '',
  telefono: '',
  servicioInteres: '',
  mensaje: ''
})
const errores = ref([])
const enviadoConExito = ref(false)

onMounted(() => {
  if (state.servSeleccionado) {
    form.value.servicioInteres = state.servSeleccionado
  }
})

function procesarFormulario() {
  errores.value = []

  if (!form.value.nombre.trim()) {
    errores.value.push('El nombre es obligatorio.')
  }
  
  if (!form.value.correo.trim()) {
    errores.value.push('El correo electrónico es obligatorio.')
  } else if (!form.value.correo.includes('@')) {
    errores.value.push('Debes ingresar un correo válido (que contenga @).')
  }

  if (!form.value.mensaje.trim()) {
    errores.value.push('Por favor, ingresa tu mensaje o consulta.')
  }

  if (errores.value.length > 0) {
    return
  }

  enviadoConExito.value = true
  
  state.servSeleccionado = null
}

function hacerNuevaConsulta() {
  form.value = { nombre: '', correo: '', telefono: '', servicioInteres: '', mensaje: '' }
  enviadoConExito.value = false
}
</script>

<template>
  <div>
    <h2>Contacto</h2>
    <p>Escríbenos y cotiza las mejores soluciones en bolsas plásticas para tu negocio.</p>

    <div v-if="!enviadoConExito" style="max-width: 500px; padding: 20px; border: 1px solid #ccc; border-radius: 5px;">
      <div v-if="errores.length > 0" style="background-color: #ffcccc; padding: 10px; margin-bottom: 15px; color: red;">
        <strong>Por favor corrige lo siguiente:</strong>
        <ul>
          <li v-for="(error, index) in errores" :key="index">{{ error }}</li>
        </ul>
      </div>

      <form @submit.prevent="procesarFormulario" style="display: flex; flex-direction: column; gap: 15px;">
        
        <div>
          <label>Nombre completo *</label><br>
          <input type="text" v-model="form.nombre" style="width: 100%;" />
        </div>

        <div>
          <label>Correo electrónico *</label><br>
          <input type="email" v-model="form.correo" style="width: 100%;" />
        </div>

        <div>
          <label>Teléfono (Opcional)</label><br>
          <input type="tel" v-model="form.telefono" style="width: 100%;" />
        </div>

        <div>
          <label>Servicio de interés</label><br>
          <select v-model="form.servicioInteres" style="width: 100%; padding: 5px;">
            <option value="">-- Selecciona un servicio --</option>
            <option v-for="s in state.servicios" :key="s.id" :value="s.nombre">
              {{ s.nombre }}
            </option>
          </select>
        </div>

        <div>
          <label>Mensaje *</label><br>
          <textarea v-model="form.mensaje" rows="4" style="width: 100%;"></textarea>
        </div>

        <button type="submit" style="padding: 10px; background-color: #28a745; color: white; border: none; cursor: pointer;">
          Enviar Mensaje
        </button>
      </form>
    </div>

    <div v-else style="background-color: #d4edda; padding: 20px; border: 1px solid #c3e6cb; border-radius: 5px;">
      <h3>¡Solicitud enviada con éxito!</h3>
      <p>Gracias por contactarnos, <strong>{{ form.nombre }}</strong>.</p>
      
      <h4>Resumen de tu solicitud:</h4>
      <ul>
        <li><strong>Correo:</strong> {{ form.correo }}</li>
        <li><strong>Teléfono:</strong> {{ form.telefono || 'No proporcionado' }}</li>
        <li><strong>Servicio de interés:</strong> {{ form.servicioInteres || 'Ninguno en particular' }}</li>
        <li><strong>Mensaje:</strong> {{ form.mensaje }}</li>
      </ul>
      
      <p>Nuestro equipo de Bolsas Plasticas Linares revisará tus requerimientos y te responderemos a la brevedad.</p>
      
      <button @click="hacerNuevaConsulta" style="margin-top: 15px;">Hacer otra consulta</button>
    </div>

  </div>
</template>