'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Subtopic {
  title: string
  url: string
}

interface SubtopicsSidebarProps {
  subtopics: Subtopic[]
}

export default function SubtopicsSidebar({ subtopics }: SubtopicsSidebarProps) {
  const pathname = usePathname()

  if (!subtopics || subtopics.length === 0) {
    return null
  }

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-20">
        <h3 className="font-semibold mb-2">In This Topic</h3>
        <nav className="space-y-1">
          {subtopics.map((subtopic) => (
            <Link
              key={subtopic.url}
              href={`${pathname}${subtopic.url}`}
              className="block text-sm text-muted-foreground hover:text-foreground"
            >
              {subtopic.title}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
}