import styles from '../styles/Table.module.css'
import EditIcon from './icons/editIcon'
import TrashIcon from './icons/trashIcon'
import NewItemButton from './newItemButton'

export default function Table() {

  const 

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
            <td className={styles.actionTd}>
              <button>
                <EditIcon width={24} stroke="none" fill="#641CFD"/>
              </button>
              <button>
                <TrashIcon width={24} stroke='none' fill='#F21919' />
              </button>
            </td>
          </tr>
          



        </tbody>

      </table>
      <NewItemButton />
    </div>
  )
}