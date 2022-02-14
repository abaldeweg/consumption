<template>
  <section>
    <b-list divider v-for="(item, index) in inventory" :key="index">
      <template #title
        ><span @click="addItem(id, item)">{{ item }}</span></template
      >

      <template #options>
        <span @click="addItem(id, item)"
          ><b-icon type="plus" :size="35"
        /></span>
      </template>

      <template #meta>
        {{ getItem(id, item) ? getItem(id, item).counter : '0' }} X
        {{ $t('on_list') }}
      </template>
    </b-list>
  </section>
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

    const { addItem, getItem } = useList()

    return { inventory, addItem, getItem }
  },
}
</script>
