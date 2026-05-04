import { useState, useEffect } from 'react'

const SECTIONS = [
  'hero',
  'bio',
  'academic',
  'experience',
  'competitions',
  'leadership',
  'projects',
  'contact',
]

export function useActiveSection(): string {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: '-5% 0px -60% 0px' }
    )

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return active
}
