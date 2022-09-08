<script setup>
import { useList } from '@/composables/useList.js'

const { lists, remove } = useList()

const title = (timestamp) => {
  let date = new Date(timestamp * 1000)

  return date.toLocaleString()
}
</script>

<template>
  <b-list
    :route="{ name: 'list.update', params: { itemId: index } }"
    divider
    v-for="(item, index) in lists"
    :key="index"
  >
    <template #title>
      {{ title(item.date) }}
    </template>

    <template #options>
      <b-dropdown>
        <template #selector><b-icon type="meatballs" /></template>
        <b-dropdown-item
          icon="pencil"
          @click.prevent="
            $router.push({ name: 'list.update', params: { itemId: index } })
          "
        >
          {{ $t('edit') }}
        </b-dropdown-item>
        <b-dropdown-item icon="bin" @click.prevent="remove(index)">
          {{ $t('remove') }}
        </b-dropdown-item>
      </b-dropdown>
    </template>
  </b-list>
</template>
