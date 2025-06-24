'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="rounded-lg p-2 border-0"
      title='Toogle theme'
      aria-label='Toogle theme'
    >
      {theme === 'dark' ? (
        <Sun size={26} />
      ) : (
       <Moon size={26} />
      )}
    </button>
  )
}
