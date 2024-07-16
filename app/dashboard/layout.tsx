'use client'

import Shell from '@/components/Shell'
import { usePathname } from 'next/navigation'

interface IDashboardProps {
  children: React.ReactNode
  rsvps: React.ReactNode
  events: React.ReactNode
}

const Dashboard = ({ children, rsvps, events }: IDashboardProps) => {
  const pathname = usePathname()

  return (
    <Shell>
      {pathname === '/dashboard' ? (
        <section className="flex w-full h-full">
          <div className="w-1/2 border-r border-default-50">{rsvps}</div>
          <div className="w-1/2 flex flex-col">
            <div className="border-b border-default-50 w-full h-1/2">
              {events}
            </div>
            <div className="w-full h-1/2">{children}</div>
          </div>
        </section>
      ) : (
        <>{children}</>
      )}
    </Shell>
  )
}

export default Dashboard
