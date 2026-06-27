'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function Metrika() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.ym) {
      window.ym(108409506, 'hit', pathname)
    }
  }, [pathname])

  return null
}