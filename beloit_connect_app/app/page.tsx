import Image from 'next/image'
import styles from './page.module.css'
import { prisma} from "@/lib/prisma";
import AuthCheck from '@/components/AuthCheck';

export default function Home() {
  return (
    <AuthCheck>
      <main className={styles.main}>
        <h1>This is the main page</h1>
        <h2>Welcome</h2> {/* Use the fetched data */}
      </main>
    </AuthCheck>
  )
}
