import { format } from 'date-fns'
import { id } from 'date-fns/locale'

export const getDate = (
  date: string,
  formatting = 'dd MMM yyyy',
): string => {
  try {
    return defineTimezoneIndo((format(new Date(date), formatting, { locale: id }) || ''))
  } catch {
    return 'Invalid date'
  }
}

const defineTimezoneIndo = (time: string): string => {
  return time.replace('GMT+7', 'WIB').replace('GMT+8', 'WITA').replace('GMT+9', 'WIT')
}

export const copyToClipboard = async (text: string) => {
  return await new Promise((resolve, reject) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        resolve('Text successfully copied to clipboard')
      })
      .catch((error) => {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        reject(new Error(`Unable to copy text to clipboard: ${error}`))
      })
  })
}
