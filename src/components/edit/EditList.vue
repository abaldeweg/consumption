<script setup>
import { useList } from '@/composables/useList.js'

defineProps({
  id: Number,
})

const { lists, increaseCounter, decreaseCounter } = useList()
</script>

<template>
  <b-list
    divider
    disabled
    v-for="(item, index) in lists[id].resources"
    :key="index"
  >
    <template #title>
      {{ item.name }}
    </template>

    <template #options>
      <b-button
        design="text"
        @click="decreaseCounter(id, index)"
        class="action"
      >
        <b-icon type="minus" :size="35" />
      </b-button>
      <b-button
        design="text"
        @click="increaseCounter(id, index)"
        class="action"
      >
        <b-icon type="plus" :size="35" />
      </b-button>
    </template>

    <template #meta>{{ item.counter }} {{ item.unit }}</template>
  </b-list>
</template>

<style scoped>
.action {
  margin-left: 10px;
  user-select: none;
}
</style>
