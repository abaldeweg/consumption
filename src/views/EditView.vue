<template>
  <section>
    <b-container size="m">
      <h1>{{ $t('edit_list') }} "{{ title }}"</h1>
    </b-container>

    <b-container size="m">
      <edit-list :id="id" />
    </b-container>

    <b-container size="m">
      <b-button design="primary_wide" @click="shareByMail">{{
        $t('share_by_mail')
      }}</b-button>
    </b-container>
  </section>
</template>

<script>
import { computed } from '@vue/composition-api'
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
    const { consumptions } = useList()

    const title = computed(() => {
      let date = new Date(consumptions.value.lists[props.id].date * 1000)

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

      consumptions.value.lists[props.id].resources.forEach((element) => {
        content += element.counter + ' x ' + element.name + '%0d%0a'
      })

      window.open(content)
    }

    return { consumptions, title, shareByMail }
  },
}
</script>
