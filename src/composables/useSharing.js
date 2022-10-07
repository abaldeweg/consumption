import { useI18n } from 'vue-i18n'

export function useSharing(item) {
  const { t } = useI18n()

  const title = (timestamp) => {
    let date = new Date(timestamp * 1000)

    return date.toLocaleString()
  }

  const shareByMail = () => {
    let content =
      'mailto:' +
      import.meta.env.VUE_APP_SHARE_MAIL +
      '?subject=' +
      t('list') +
      ': ' +
      title(item.date) +
      '&body=' +
      t('date') +
      ': ' +
      title(item.date) +
      '%0d%0a'

    item.resources.forEach((element) => {
      content +=
        element.counter + ' ' + element.unit + ' ' + element.name + '%0d%0a'
    })

    content += t('notes') + ': ' + item.notes

    window.open(content)
  }

  return { shareByMail }
}
