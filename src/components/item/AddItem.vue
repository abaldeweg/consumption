<script setup>
import { ref } from 'vue'
import { useInventory } from '@/composables/useInventory.js'
import { useList } from '@/composables/useList.js'

const props = defineProps({
  id: Number,
})

const { addItem } = useList()

const { products, units } = useInventory()

const product = ref(null)
const amount = ref(1)
const unit = ref(0)
</script>

<template>
  <b-form
    @submit.prevent="
      addItem(props.id, {
        name: products[product].value,
        unit: units[unit].value,
        counter: amount,
      })
    "
  >
    <b-form-group>
      <b-form-item>
        <b-form-label for="product">{{ $t('product') }}</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-select id="product" :items="products" v-model="product" />
      </b-form-item>
    </b-form-group>

    <b-form-group>
      <b-form-item>
        <b-form-label for="amount">{{ $t('amount') }}</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-input id="amount" type="number" v-model="amount" />
      </b-form-item>
    </b-form-group>

    <b-form-group>
      <b-form-item>
        <b-form-label for="units">{{ $t('unit') }}</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-select id="units" :items="units" v-model="unit" />
      </b-form-item>
    </b-form-group>

    <b-form-group buttons>
      <b-form-item>
        <b-button design="primary">{{ $t('add') }}</b-button>
      </b-form-item>
    </b-form-group>
  </b-form>
</template>
