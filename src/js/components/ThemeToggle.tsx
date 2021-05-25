import { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import theme from 'js/services/theme'

export default function ThemeToggle() {
  const [enabled, setEnabled] = useState(false)

  const setDarkTheme = (v: boolean) => {
    setEnabled(v)
    v ? theme.setDark() : theme.setLight()
  }

  useEffect(() => {
    if (!theme.isSaved()) {
      theme.setOSDefault()
    }
    setDarkTheme(theme.isDark())
  }, [])

  return (
    <div className="transform scale-50 origin-right">
      <Switch
        checked={enabled}
        onChange={setDarkTheme}
        style={{ width: 74, height: 38 }}
        className={` bg-black relative inline-flex flex-shrink-0 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          style={{ width: 34, height: 34 }}
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
        />
      </Switch>
    </div>
  )
}
