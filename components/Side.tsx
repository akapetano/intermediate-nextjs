import Image from 'next/image'
import Logo from '@/images/pardy.png'
import { Button } from '@nextui-org/react'
import { signout } from '@/actions/signout'
import SideItem from './SideItem'

const links = [
  { route: '/dashboard', name: 'Home' },
  { route: '/dashboard/events', name: 'Events' },
  { route: '/dashboard/guests', name: 'Guests' },
  { route: '/dashboard/activity', name: 'Activity' },
  { route: '/dashboard/settings', name: 'Settings' },
] as const

export type LinkType = { route: string; name: string }

const Side = () => {
  return (
    <div className="w-full h-full px-3 relative">
      <div className="mb-12">
        <figure className="w-[80px] pt-4">
          <Image src={Logo} alt="pardy" priority />
        </figure>
      </div>
      <div>
        {links.map(({ route, name }) => (
          <SideItem key={route} route={route} name={name} />
        ))}
      </div>
      <div className="absolute bottom-0 w-full left-0 px-4">
        <Button onClick={() => signout()} fullWidth variant="ghost">
          Sign Out
        </Button>
      </div>
    </div>
  )
}

export default Side
