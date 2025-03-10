"use client"

import { useTheme } from 'next-themes'
import { VscColorMode } from 'react-icons/vsc'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}><VscColorMode className='dark:text-black'/></button>
  )
}

export default ThemeToggle;