'use client'

import { ThemeProvider } from "next-themes"
import { type ReactNode } from "react"

interface ThemeProviderWrapperProps {
  children: ReactNode
}

export function ThemeProviderWrapper({ children }: ThemeProviderWrapperProps) {
  return (
    <ThemeProvider 
      attribute="class" 
      enableSystem 
      defaultTheme="system"
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}