'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LinkType } from './Side'
import { cn } from '@nextui-org/react'

type SideItemProps = LinkType

const isActive = (path: string, route: string) => {
  if (route === '/dashboard') {
    return path === '/dashboard'
  } else {
    return path.includes(route)
  }
}

const SideItem = ({ name, route }: SideItemProps) => {
  const pathname = usePathname()
  const activeClass = 'bg-primary hover:bg-primary'
  return (
    <div className="w-full">
      <Link href={route}>
        <div
          className={cn(
            'w-full h-full py-2 px-2 hover:bg-content1 rounded-lg',
            isActive(pathname, route) ? activeClass : ''
          )}
        >
          {name}
        </div>
      </Link>
    </div>
  )
}

export default SideItem
