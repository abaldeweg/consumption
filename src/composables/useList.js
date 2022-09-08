import { ref } from 'vue'
import { useToast } from '@baldeweg/ui'
import { useI18n } from 'vue-i18n'
import { v4 as uuidv4 } from 'uuid'

const KEY_NAME = 'consumption_lists'
const lists = ref(JSON.parse(localStorage.getItem(KEY_NAME)) || {})

export function useList() {
  const { t } = useI18n()

  const { add } = useToast()

  // Lists
  const save = () => {
    localStorage.setItem(KEY_NAME, JSON.stringify(lists.value))
  }

  const create = () => {
    lists.value[uuidv4()] = {
      date: Math.round(Date.now() / 1000),
      resources: [],
      notes: null,
    }
    save()
  }

  const remove = (id) => {
    delete lists.value[id]
    save()
  }

  const clear = () => {
    lists.value = {}
    localStorage.removeItem(KEY_NAME)
  }

  // Items
  const addItem = (id, item) => {
    lists.value[id].resources.push(item)
    save()
  }

  const removeItem = (list, item) => {
    lists.value[list].resources.splice(item, 1)
    add({
      type: 'success',
      body: t('item_removed'),
    })
    save()
  }

  const increaseCounter = (list, item) => {
    lists.value[list].resources[item].counter++
    save()
  }

  const decreaseCounter = (list, item) => {
    lists.value[list].resources[item].counter--
    save()

    if (lists.value[list].resources[item].counter <= 0) {
      removeItem(list, item)
    }
  }

  const setNotes = (id, notes) => {
    lists.value[id].notes = notes
    save()
  }

  return {
    lists,
    create,
    remove,
    clear,
    addItem,
    increaseCounter,
    decreaseCounter,
    setNotes,
  }
}
