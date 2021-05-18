import { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import theme from 'js/services/theme'

//@todo refactor

export default function ThemeToggle() {
  const [enabled, setEnabled] = useState(false)

  const setDarkTheme = (v: boolean) => {
    setEnabled(v)

    if (v) {
      theme.save('dark')
      theme.applyDark()
    } else {
      theme.save('light')
      theme.applyLight()
    }
  }

  useEffect(() => {
    if (!('theme' in localStorage)) {
      theme.save(theme.userPrefersDark() ? 'dark' : 'light')
    }

    setDarkTheme(localStorage.theme === 'dark')
  }, [])

  return (
    <Switch
      checked={enabled}
      onChange={setDarkTheme}
      style={{ width: 74, height: 38 }}
      className={`${enabled ? 'bg-green-900' : 'bg-green-700'}
          relative inline-flex flex-shrink-0 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75 transform scale-50`}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        style={{ width: 34, height: 34 }}
        className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
      />
    </Switch>
  )
}
