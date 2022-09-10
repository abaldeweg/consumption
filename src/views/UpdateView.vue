<script setup>
import { computed, toRefs, watch } from 'vue'
import { useTitle } from '@baldeweg/ui'
import { useI18n } from 'vue-i18n'
import { useList } from '@/composables/useList.js'
import { useSharing } from '@/composables/useSharing.js'
import UpdateList from '@/components/update/UpdateList.vue'
import AddItem from '@/components/update/AddItem.vue'

const props = defineProps({
  itemId: String,
})

const { t } = useI18n()

useTitle({ title: t('update_list') })

const { lists, setNotes } = useList()
const { notes } = toRefs(lists.value[props.itemId])

watch(
  () => notes.value,
  () => setNotes(props.itemId, notes.value)
)

const title = computed(() => {
  let date = new Date(lists.value[props.itemId].date * 1000)

  return date.toLocaleString()
})

const { shareByMail } = useSharing(lists.value[props.itemId])
</script>

<template>
  <b-container size="m">
    <h1>{{ title }}</h1>
  </b-container>

  <b-container size="m">
    <h2>{{ $t('add_product') }}</h2>
    <AddItem :itemId="itemId" />
  </b-container>

  <b-container size="m">
    <h2>{{ $t('current_list') }}</h2>
    <UpdateList :itemId="itemId" />

    <b-form-group>
      <b-form-item>
        <b-form-label for="notes">{{ $t('notes') }}</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-textarea id="note" v-model="notes" />
      </b-form-item>
    </b-form-group>
  </b-container>

  <b-container size="m">
    <b-button design="primary_wide" @click="shareByMail">
      {{ $t('share_by_mail') }}
    </b-button>
  </b-container>
</template>
