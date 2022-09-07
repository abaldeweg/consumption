<script setup>
import { useList } from '@/composables/useList.js'

const { create } = useList()
</script>

<template>
  <b-button design="primary_wide" @click="create">{{
    $t('create_new_list')
  }}</b-button>
</template>
