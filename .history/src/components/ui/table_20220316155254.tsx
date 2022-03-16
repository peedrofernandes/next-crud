import styles from '../../styles/Table.module.css'
import EditIcon from '../icons/editIcon'
import PlusIcon from '../icons/plusIcon';
import TrashIcon from '../icons/trashIcon'
import AddFilesImg from '../images/addFilesImg';
import IconButton from './Buttons/iconButton';
import LargeButton from './Buttons/largeButton'
import { useModal } from '../../store/hooks';

export default function Table() {

  const { visibility, setVisibility } = useModal().newItemModal

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
                  <IconButton>
                      <EditIcon width={24} stroke="none" fill="#641CFD"/>
                  </IconButton>
                  <IconButton>
                      <TrashIcon width={24} stroke='none' fill='#F21919' />
                  </IconButton>
                </td>
              </tr>
            )
          })}
        </tbody>

      </table>
      ) : (
          <div className={styles.noTableDiv}>
            <h3>Não há nenhum registro. Comece criando um agora mesmo!</h3>
            <AddFilesImg width={300}/>
          </div>
      )}
    

      <LargeButton onClick={() => setVisibility()}>
        <PlusIcon width={30} stroke={'#ffffff'} fill={'none'} />
        <span>Novo registro</span>
      </LargeButton>
    </div>
  )
}