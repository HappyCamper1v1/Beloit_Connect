import Link from 'next/link'
import styles from './NavMenu.module.css'

export default function NavMenu() {
    return (
    <div className={styles.sidenav}>
        <Link href="/" >Home</Link>
        <Link href="/about" >About</Link>
        <Link href="/events" >Events</Link>
        <Link href="/communities" >Communities</Link>
        <Link href="/message" >Message</Link>
    </div>
    )
}