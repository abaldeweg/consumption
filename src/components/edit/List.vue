<template>
  <ul>
    <li @click="add(id, item)" v-for="(item, index) in inventory" :key="index">
      {{ item }}
    </li>
  </ul>
</template>

<script>
import useList from '@/composables/useList'

export default {
  name: 'edit-list',
  props: {
    id: Number,
  },
  setup() {
    const inventory = process.env.VUE_APP_INVENTORY.split(',')

    const { add } = useList()

    return { inventory, add }
  },
}
</script>
