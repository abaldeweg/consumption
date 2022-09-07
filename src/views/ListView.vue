<script setup>
import { useTitle } from '@baldeweg/ui'
import ListList from '@/components/list/ListList.vue'
import ListCreate from '@/components/list/ListCreate.vue'
import { useLists } from '@/composables/useLists.js'

useTitle({ title: 'Lists' })

const { clear } = useLists()
</script>

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

    <b-container size="m">
      <details>
        <summary>{{ $t('clear') }}</summary>
        <b-button design="outline_danger" @click="clear">{{
          $t('clear_all_lists')
        }}</b-button>
      </details>
    </b-container>
  </section>
</template>
