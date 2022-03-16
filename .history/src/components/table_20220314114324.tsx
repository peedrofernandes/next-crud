import Image from 'next/image'
import styles from '../styles/Table.module.css'
import PlusIcon from '../components/icons/plusIcon'
import NewItemButton from './newItemButton'

export default function Table() {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableTitle}>
        <h1>Lista de registros</h1>
      </div>
      <table className={styles.table}>

        <thead>
          <tr>
            <th>Nome</th>
            <th>Data de Criação</th>
            <th>Última vez modificado</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>




        </tbody>

      </table>
      <NewItemButton />
    </div>
  )
}