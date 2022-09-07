<script setup>
import { useList } from '@/composables/useList.js'

defineProps({
  id: Number,
})

const inventory = import.meta.env.VUE_APP_INVENTORY.split(',')

const { addItem, getItem } = useList()
</script>

<template>
  <b-list divider v-for="(item, index) in inventory" :key="index">
    <template #title>
      <span @click="addItem(id, item)">{{ item }}</span>
    </template>

    <template #options>
      <span @click="addItem(id, item)"><b-icon type="plus" :size="35" /></span>
    </template>

    <template #meta>
      {{ getItem(id, item) ? getItem(id, item).counter : '0' }} X
      {{ $t('on_list') }}
    </template>
  </b-list>
</template>
