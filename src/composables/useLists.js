import { onMounted, ref } from 'vue'

const lists = ref(null)

export function useLists() {
  const load = () => {
    lists.value = JSON.parse(localStorage.getItem('consumption_list')) || []
  }

  onMounted(load)

  const save = () => {
    localStorage.setItem('consumption_list', JSON.stringify(lists.value))
  }

  const create = () => {
    lists.value.unshift({
      date: Math.round(Date.now() / 1000),
      resources: [],
      notes: null,
    })
    save()
  }

  const remove = (id) => {
    lists.value.splice(id, 1)
    save()
  }

  const clear = () => {
    lists.value = []
    localStorage.removeItem('consumption_list')
  }

  return { lists, create, remove, clear }
}
