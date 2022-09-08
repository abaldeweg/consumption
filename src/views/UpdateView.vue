<script setup>
import { computed, toRefs, watch } from 'vue'
import { useTitle } from '@baldeweg/ui'
import { useI18n } from 'vue-i18n'
import { useList } from '@/composables/useList.js'
import UpdateList from '@/components/update/UpdateList.vue'
import AddItem from '@/components/update/AddItem.vue'

const props = defineProps({
  id: String,
})

const { t } = useI18n()

useTitle({ title: t('update_list') })

const { lists, setNotes } = useList()
const { notes } = toRefs(lists.value[props.id])

watch(
  () => notes.value,
  () => setNotes(props.id, notes.value)
)

const title = computed(() => {
  let date = new Date(lists.value[props.id].date * 1000)

  return date.toLocaleString()
})

const shareByMail = () => {
  let content =
    'mailto:' +
    import.meta.env.VUE_APP_SHARE_MAIL +
    '?subject=' +
    t('list') +
    ': ' +
    title.value +
    '&body=' +
    t('date') +
    ': ' +
    title.value +
    '%0d%0a'

  lists.value[props.id].resources.forEach((element) => {
    content += element.counter + ' x ' + element.name + '%0d%0a'
  })

  content += t('notes') + ': ' + notes.value

  window.open(content)
}
</script>

<template>
  <b-container size="m">
    <h1>{{ title }}</h1>
  </b-container>

  <b-container size="m">
    <h2>{{ $t('add_product') }}</h2>
    <AddItem :id="id" />
  </b-container>

  <b-container size="m">
    <h2>{{ $t('current_list') }}</h2>
    <UpdateList :id="id" />

    <b-form-group>
      <b-form-item>
        <b-form-label for="notes">{{ $t('notes') }}</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-textarea v-model="notes" />
      </b-form-item>
    </b-form-group>
  </b-container>

  <b-container size="m">
    <b-button design="primary_wide" @click="shareByMail">
      {{ $t('share_by_mail') }}
    </b-button>
  </b-container>
</template>
