const _OSDefault = (): string =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? _dark : _light

const applyDark = (): void => _rootClasses.add(_dark)
const applyLight = (): void => _rootClasses.remove(_dark)

const isSaved = (): boolean => 'theme' in localStorage

const setOSDefault = (): void => _set(_OSDefault())

const setDark = (): void => {
  _set(_dark)
  applyDark()
}
const setLight = (): void => {
  _set(_light)
  applyLight()
}

const isDark = () => _get() === _dark

const _dark = 'dark'
const _light = 'light'

const _get = (): string => localStorage.theme
const _set = (theme: string): void => {
  localStorage.theme = theme
}

const _rootClasses = document.documentElement.classList

export default {
  setDark,
  setLight,
  isDark,
  setOSDefault,
  isSaved,
}
