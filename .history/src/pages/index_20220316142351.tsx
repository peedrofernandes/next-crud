import Head from 'next/head'
import Modal from '../components/ui/Modais/modal'
import NewItemModal from '../components/ui/Modais/newItemModal'
import Table from '../components/ui/table'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>CRUD made with NEXT</title>
        <meta name="description" content="Create, read, update, delete" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.viewportContainer}>
        <Table />
      </main>
      
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        <h1>Conteudo</h1>
        <h1>Conteudo</h1>
        <h1>Conteudo</h1>
        <h1>Conteudo</h1>
        <h1>Conteudo</h1>
        <h1>Conteudo</h1>
        <h1>Conteudo</h1>
        <h1>Conteudo</h1>
        <h1>Conteudo</h1>
        <h1>Conteudo</h1>
        <h1>Conteudo</h1>
        <h1>Conteudo</h1>
        <h1>Conteudo</h1>
        <h1>Conteudo</h1>
      </div>

      <NewItemModal visibility={false}></NewItemModal>
      
    </div>
  )
}

/* 



*/