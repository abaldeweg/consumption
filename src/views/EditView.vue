<template>
  <section>
    <b-container size="m">
      <h1>{{ $t('edit_list') }} "{{ title }}"</h1>
    </b-container>

    <b-container size="m">
      <edit-list :id="id" />
    </b-container>
  </section>
</template>

<script>
import { computed } from '@vue/composition-api'
import useList from '@/composables/useList'
import EditList from '@/components/edit/List'

export default {
  name: 'edit-view',
  components: {
    EditList,
  },
  props: {
    id: Number,
  },
  head: {
    title: 'Edit List',
  },
  setup(props) {
    const { consumptions } = useList()

    const title = computed(() => {
      let date = new Date(consumptions.value.lists[props.id].date * 1000)

      return date.toLocaleString()
    })

    return { title }
  },
}
</script>
