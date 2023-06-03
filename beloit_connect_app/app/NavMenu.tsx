import Link from 'next/link'

export default function NavMenu() {
    return (
    <div className='sidenav'>
        <Link href="/" >Home</Link>
        <Link href="/about" >About</Link>
        <Link href="/events" >Events</Link>
        <Link href="/communities" >communities</Link>
        <Link href="/message" >Message</Link>
    </div>
    )
}