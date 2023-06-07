import Link from 'next/link'
import { SignInButton, SignOutButton } from '@/components/buttons'

export default function NavMenu() {
    return (
      <div>
        <div>
          <ul>
            <li><Link className='mynavlink' href="/" >Home</Link></li>
            <li><Link className='mynavlink' href="/about" >About</Link></li>
            <li><Link className='mynavlink' href="/events" >Events</Link></li>
            <li><Link className='mynavlink' href="/communities" >Communities</Link></li>
            <li><Link className='mynavlink' href="/message" >Message</Link></li>
            <li><Link className='mynavlink' href="/users" >Users</Link></li>
            <li><SignOutButton/></li>
            <li><SignInButton/></li>
          </ul>
        </div>
      </div>
    )
}
