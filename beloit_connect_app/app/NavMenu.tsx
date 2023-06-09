import Link from 'next/link'


export default function NavMenu() {
  return (
    <div className="nav-menu">
      <ul>
        <li><Link className='mynavlink' href="/" >Home</Link></li>
        <li><Link className='mynavlink' href="/about" >About</Link></li>
        <li><Link className='mynavlink' href="/events" >Events</Link></li>
        <li><Link className='mynavlink' href="/communities" >Communities</Link></li>
        <li><Link className='mynavlink' href="/message" >Message</Link></li>
        <li><Link className='mynavlink' href="/users" >Users</Link></li>
        <li><Link className='mynavlink' href="/dashboard" >Dashboard</Link></li>
      </ul>
    </div>
  )
}

