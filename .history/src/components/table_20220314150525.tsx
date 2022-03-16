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

      {renderTable}
    
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
          {registros.map((registro, id) => {
            return (
              <tr key={id}>
                <td>{registro.nome}</td>
                <td>{formatDateString(registro.dataCriacao)}</td>
                <td>{formatDateString(registro.ultimaVezModificado)}</td>
                <td className={styles.actionTd}>
                  <button>
                    <EditIcon width={24} stroke="none" fill="#641CFD"/>
                  </button>
                  <button>
                    <TrashIcon width={24} stroke='none' fill='#F21919' />
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>

      </table>
      <NewItemButton />
    </div>
  )
}