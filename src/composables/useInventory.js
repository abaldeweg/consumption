import { onMounted, ref } from 'vue'

export function useInventory() {
  const products = ref([])
  const units = ref([])

  onMounted(() => {
    import.meta.env.VUE_APP_PRODUCTS.split(',').forEach((element, index) => {
      products.value.push({ key: index, value: element })
    })

    import.meta.env.VUE_APP_UNITS.split(',').forEach((element, index) => {
      units.value.push({ key: index, value: element })
    })
  })

  return { products, units }
}
