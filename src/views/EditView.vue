<template>
  <section>
    <b-container size="m">
      <h1>{{ title }}</h1>
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
import { computed, toRefs } from '@vue/composition-api'
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
    const { lists } = useList()

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

      window.open(content)
    }

    return { lists, title, shareByMail }
  },
}
</script>
