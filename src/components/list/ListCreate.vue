<script setup>
import { useLists } from '@/composables/useLists.js'

const { create } = useLists()
</script>

<template>
  <b-button design="primary_wide" @click="create">{{
    $t('create_new_list')
  }}</b-button>
</template>
