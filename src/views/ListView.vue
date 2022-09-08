<script setup>
import { useTitle } from '@baldeweg/ui'
import { useI18n } from 'vue-i18n'
import ShowLists from '@/components/list/ShowLists.vue'
import CreateList from '@/components/list/CreateList.vue'
import { useList } from '@/composables/useList.js'

const { t } = useI18n()

useTitle({ title: t('my_lists') })

const { clear } = useList()
</script>

<template>
  <b-container size="m">
    <h1>{{ $t('my_lists') }}</h1>
  </b-container>

  <b-container size="m">
    <CreateList />
  </b-container>

  <b-container size="m">
    <ShowLists />
  </b-container>

  <b-container size="m">
    <details>
      <summary>{{ $t('clear') }}</summary>
      <b-button design="outline_danger" @click="clear">
        {{ $t('clear_all_lists') }}
      </b-button>
    </details>
  </b-container>
</template>
