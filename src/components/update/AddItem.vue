<script setup>
import { ref } from 'vue'
import { useToast } from '@baldeweg/ui'
import { useI18n } from 'vue-i18n'
import { useInventory } from '@/composables/useInventory.js'
import { useList } from '@/composables/useList.js'

const props = defineProps({
  itemId: String,
})

const { t } = useI18n()

const { addItem } = useList()

const { products, units } = useInventory()

const { add: addToast } = useToast()

const product = ref(null)
const productFreeform = ref(null)
const amount = ref(1)
const unit = ref(0)

const add = () => {
  addItem(props.itemId, {
    name:
      product.value === 'misc'
        ? productFreeform.value
        : products.value[product.value].value,
    unit: units.value[unit.value].value,
    counter: amount.value,
  })

  addToast({
    type: 'success',
    body: t('product_added'),
  })

  product.value = null
  amount.value = 1
  unit.value = 0
}
</script>

<template>
  <b-form @submit.prevent="add">
    <b-form-group>
      <b-form-item>
        <b-form-label for="product">{{ $t('product') }}</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-select id="product" :items="products" v-model="product" />
      </b-form-item>
    </b-form-group>

    <b-form-group v-if="product === 'misc'">
      <b-form-item>
        <b-form-label for="productFreeform">
          {{ $t('product_freeform') }}
        </b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-input id="productFreeform" v-model="productFreeform" />
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
        <b-form-select id="unit" :items="units" v-model="unit" />
      </b-form-item>
    </b-form-group>

    <b-form-group buttons>
      <b-form-item>
        <b-button design="primary">{{ $t('add') }}</b-button>
      </b-form-item>
    </b-form-group>
  </b-form>
</template>
