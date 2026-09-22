import { reactive } from 'vue'

const state = reactive({
  servicios: [
    { id: 1, nombre: 'Fabricación a Medida', categoria: 'Producción', descripcion: 'Bolsas plásticas con dimensiones y grosores específicos.', precio: 'Cotizar', disponibilidad: true },
    { id: 2, nombre: 'Impresión Corporativa', categoria: 'Personalización', descripcion: 'Estampado de logos a 1, 2 o 3 colores.', precio: '$50.000 por matriz', disponibilidad: true },
    { id: 3, nombre: 'Distribución Mayorista', categoria: 'Logística', descripcion: 'Despacho de volúmenes por sobre 100 millares.', precio: 'Según volumen', disponibilidad: true },
    { id: 4, nombre: 'Asesoría Ecológica', categoria: 'Consultoría', descripcion: 'Transición hacia plásticos biodegradables o compostables.', precio: 'Gratis con pedido', disponibilidad: true },
    { id: 5, nombre: 'Reciclaje de Mermas', categoria: 'Sostenibilidad', descripcion: 'Retiro y reciclaje de plásticos de embalaje industrial.', precio: '$20.000 / retiro', disponibilidad: false },
    { id: 6, nombre: 'Venta de Insumos', categoria: 'Producción', descripcion: 'Rollos de polietileno y cintas de embalaje.', precio: 'Desde $15.000', disponibilidad: true }
  ],
  servSeleccionado: null
})

export function useBolsasStore() {
  return { state }
}