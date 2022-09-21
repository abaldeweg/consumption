import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

export function useInventory() {
  const products = ref([])
  const units = ref([])

  const { t } = useI18n()

  onMounted(() => {
    import.meta.env.VUE_APP_PRODUCTS.split(',').forEach((element, index) => {
      products.value.push({ key: index, value: element.trim() })
    })
    products.value.push({ key: 'misc', value: t('misc') })

    import.meta.env.VUE_APP_UNITS.split(',').forEach((element, index) => {
      units.value.push({ key: index, value: element.trim() })
    })
  })

  return { products, units }
}
