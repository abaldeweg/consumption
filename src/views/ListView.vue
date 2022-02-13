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
  </section>
</template>

<script>
import ListList from '@/components/list/List'
import ListCreate from '@/components/list/Create'

export default {
  name: 'list-view',
  components: {
    ListList,
    ListCreate,
  },
  head: {
    title: 'Lists',
  },
}
</script>
