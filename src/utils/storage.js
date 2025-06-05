const INFO_KEY = 'shopping_info'
const HISTORY_KEY = 'history_list'

export const getInfo = () => {
  const res = localStorage.getItem(INFO_KEY)
  return res ? JSON.parse(res) : { token: '', userId: '' }
}
export const setInfo = (obj) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(obj))
}
export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}

export const getHistory = () => {
  const res = localStorage.getItem(HISTORY_KEY)
  return res ? JSON.parse(res) : []
}

export const setHistory = (arr) => {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(arr))
}
