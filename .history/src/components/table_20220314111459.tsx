import Image from 'next/image'
import styles from '../styles/Table.module.css'
import plusIcon from '../components/icons/plusIcon'

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
          <tr>
            <td>Clientes</td>
            <td>10/03/2022</td>
            <td>14/03/2022</td>
            <td>Modificar | Excluir</td>
          </tr>
          <tr>
            <td>Clientes</td>
            <td>10/03/2022</td>
            <td>14/03/2022</td>
            <td>Modificar | Excluir</td>
          </tr>
          <tr>
            <td>Clientes</td>
            <td>10/03/2022</td>
            <td>14/03/2022</td>
            <td>Modificar | Excluir</td>
          </tr>



        </tbody>

      </table>
      <button>

        Novo registro
      </button>
    </div>
  )
}