import Head from 'next/head'
import Modal from '../components/ui/Modais/Modal'
import NewRegistryModal from '../components/ui/Modais/NewRegistryModal'
import EditRegistryModal from '../components/ui/Modais/EditRegistryModal'
import Table from '../components/ui/Tables/Table'
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
        <NewRegistryModal></NewRegistryModal>
        <EditRegistryModal></EditRegistryModal>
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

      
      
    </div>
  )
}

/* 

Estruturação do objeto geral

[
  {
    nome: nome.value
    prop1: prop1.value
    prop2: prop2.value
    ...
  }
]

*/