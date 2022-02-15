<template>
  <section>
    <b-container size="m">
      <h1>{{ title }}</h1>
    </b-container>

    <b-container size="m">
      <edit-list :id="id" />

      <b-form-group>
        <b-form-item>
          <b-form-label for="notes">{{ $t('notes') }}</b-form-label>
        </b-form-item>
        <b-form-item>
          <b-form-textarea v-model="notes" />
        </b-form-item>
      </b-form-group>
    </b-container>

    <b-container size="m">
      <b-button design="primary_wide" @click="shareByMail">{{
        $t('share_by_mail')
      }}</b-button>
    </b-container>
  </section>
</template>

<script>
import { computed, ref, toRefs, watch } from '@vue/composition-api'
import useList from '@/composables/useList'
import EditList from '@/components/edit/List'
import i18n from '~b/i18n'

export default {
  name: 'edit-view',
  components: {
    EditList,
  },
  props: {
    id: Number,
  },
  head: {
    title: 'Edit List',
  },
  setup(props) {
    const { id } = toRefs(props)
    const { lists, setNotes } = useList()
    const notes = ref(lists.value[id.value].notes)

    watch(
      () => notes.value,
      () => setNotes(id.value, notes.value)
    )

    const title = computed(() => {
      let date = new Date(lists.value[id.value].date * 1000)

      return date.toLocaleString()
    })

    const shareByMail = () => {
      let content =
        'mailto:' +
        process.env.VUE_APP_SHARE_MAIL +
        '?subject=' +
        i18n.t('list') +
        ': ' +
        title.value +
        '&body=' +
        i18n.t('date') +
        ': ' +
        title.value +
        '%0d%0a'

      lists.value[id.value].resources.forEach((element) => {
        content += element.counter + ' x ' + element.name + '%0d%0a'
      })

      content += i18n.t('notes') + ': ' + notes.value

      window.open(content)
    }

    return { lists, notes, title, shareByMail, setNotes }
  },
}
</script>
