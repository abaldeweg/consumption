<template>
  <section>
    <b-list
      :route="{ name: 'edit', params: { id: index } }"
      divider
      v-for="(item, index) in lists"
      :key="index"
    >
      <template #title>{{ formatTitle(item.date) }}</template>
      <template #options>
        <b-dropdown>
          <template #selector><b-icon type="meatballs" /></template>
          <b-dropdown-item
            icon="pencil"
            @click.prevent="
              $router.push({ name: 'edit', params: { id: index } })
            "
            >{{ $t('edit') }}
          </b-dropdown-item>
          <b-dropdown-item icon="bin" @click.prevent="remove(index)"
            >{{ $t('remove') }}
          </b-dropdown-item>
        </b-dropdown>
      </template>
    </b-list>
  </section>
</template>

<script>
import useList from '@/composables/useList'

export default {
  name: 'list-list',
  setup() {
    const { lists, remove } = useList()

    const formatTitle = (title) => {
      let date = new Date(title * 1000)

      return date.toLocaleString()
    }

    return { lists, remove, formatTitle }
  },
}
</script>
