const userPrefersDark = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

const applyDark = (): void => document.documentElement.classList.add('dark')
const applyLight = (): void => document.documentElement.classList.remove('dark')
const save = (theme: string): string => (localStorage.theme = theme)
const setDefault = () => save(userPrefersDark() ? 'dark' : 'light')
const isSaved = () => 'theme' in localStorage
const get = () => localStorage.theme
const setDark = () => {
  save('dark')
  applyDark()
}
const setLight = () => {
  save('light')
  applyLight()
}

export default {
  userPrefersDark,
  applyDark,
  applyLight,
  save,
  setDefault,
  isSaved,
  get,
  setDark,
  setLight,
}
