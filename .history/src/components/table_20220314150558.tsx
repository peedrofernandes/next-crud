import styles from '../styles/Table.module.css'
import EditIcon from './icons/editIcon'
import TrashIcon from './icons/trashIcon'
import NewItemButton from './newItemButton'

export default function Table() {

  const renderTable = true;

  function formatDateString(date) {
    const day = date.getDay()
    const month = date.getMonth()
    const year = date.getFullYear()

    const string = `${day}/${month}/${year}`
    return string
  }

  const registros = [
    {
      nome: 'Clientes',
      dataCriacao: new Date(2022, 3, 13),
      ultimaVezModificado: new Date(2022, 3, 14)
    },
    {
      nome: 'Produtos',
      dataCriacao: new Date(2021, 5, 6),
      ultimaVezModificado: new Date(2022, 3, 14)
    },
  ]

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableTitle}>
        <h1>Lista de registros</h1>
      </div>

      {renderTable ? (

      ) : (
          
      )}
    

      <NewItemButton />
    </div>
  )
}