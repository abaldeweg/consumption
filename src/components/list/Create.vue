<template>
  <b-button design="primary_wide" @click="create">{{
    $t('create_new_list')
  }}</b-button>
</template>

<script>
import useList from '@/composables/useList'

export default {
  name: 'list-create',
  setup() {
    const { create } = useList()

    return { create }
  },
}
</script>
