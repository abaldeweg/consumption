import { useI18n } from 'vue-i18n'
import { useList } from '@/composables/useList.js'

export function useSharing() {
  const { t } = useI18n()

  const { lists } = useList()

  const title = (timestamp) => {
    let date = new Date(timestamp * 1000)

    return date.toLocaleString()
  }

  const shareByMail = (item_id) => {
    let content =
      'mailto:' +
      import.meta.env.VUE_APP_SHARE_MAIL +
      '?subject=' +
      t('list') +
      ': ' +
      title(lists.value[item_id].date) +
      '&body=' +
      t('date') +
      ': ' +
      title(lists.value[item_id].date) +
      '%0d%0a'

    lists.value[item_id].resources.forEach((element) => {
      content += element.counter + ' x ' + element.name + '%0d%0a'
    })

    content += t('notes') + ': ' + lists.value[item_id].notes

    window.open(content)
  }

  return { shareByMail }
}
