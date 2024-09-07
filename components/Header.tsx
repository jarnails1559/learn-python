'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SearchBar } from '@/components/SearchBar'
import { ModeToggle } from '@/components/mode-toggle'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const toggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block">Learn Python</span>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-14 flex-col items-center space-y-4 bg-background p-4 md:static md:flex md:flex-row md:space-x-6 md:space-y-0`}>
          <Link href="/playground">Playground</Link>
          <Link href="/code-library">Code Library</Link>
          <Link href="/input-output">Input/Output</Link>
          <Link href="/data-types">Data Types</Link>
          <Link href="/variables">Variables</Link>
          <Link href="/operators">Operators</Link>
          <Link href="/keywords">Keywords</Link>
          <Link href="/control-statements">Control Statements</Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <SearchBar />
          </div>
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {mounted && (theme === 'dark' ? <Sun /> : <Moon />)}
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}