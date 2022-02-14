<template>
  <section>
    <b-container size="m">
      <h1>{{ $t('lists') }}</h1>
    </b-container>

    <b-container size="m">
      <list-create />
    </b-container>

    <b-container size="m">
      <list-list />
    </b-container>

    <b-container size="m">
      <details>
        <summary>{{ $t('clear') }}</summary>
        <b-button design="outline_danger" @click="clear">{{
          $t('clear_all_lists')
        }}</b-button>
      </details>
    </b-container>
  </section>
</template>

<script>
import ListList from '@/components/list/List'
import ListCreate from '@/components/list/Create'
import useList from '@/composables/useList'

export default {
  name: 'list-view',
  components: {
    ListList,
    ListCreate,
  },
  head: {
    title: 'Lists',
  },
  setup() {
    const { clear } = useList()

    return { clear }
  },
}
</script>
