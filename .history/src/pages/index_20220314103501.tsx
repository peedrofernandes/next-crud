import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Table from '../components/table'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CRUD made with NEXT</title>
        <meta name="description" content="Create, read, update, delete" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={}>
        <Table />
      </main>

      
    </div>
  )
}
