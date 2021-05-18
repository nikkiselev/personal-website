const userPrefersDark = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

const applyDark = (): void => document.documentElement.classList.add('dark')
const applyLight = (): void => document.documentElement.classList.remove('dark')
const save = (theme: string): string => (localStorage.theme = theme)
const setDefault = () => save(userPrefersDark() ? 'dark' : 'light')

export default {
  userPrefersDark,
  applyDark,
  applyLight,
  save,
  setDefault,
}
