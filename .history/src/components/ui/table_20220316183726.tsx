import styles from '../../styles/Table.module.css'
import EditIcon from '../icons/editIcon'
import PlusIcon from '../icons/plusIcon';
import TrashIcon from '../icons/trashIcon'
import AddFilesImg from '../images/addFilesImg';
import IconButton from './Buttons/iconButton';
import LargeButton from './Buttons/largeButton'
import { useModal, useList } from '../../store/hooks';

export default function Table() {

  const { registries, setRegistries } = useList()

  // const lista = {
  //   registros: [
  //     {
  //       nome: 'Clientes',
  //       atributos: {
  //         nome: 'Pedro',
  //         idade: 19,
  //         sexo: 'M'
  //       }
  //     },
  //     {
  //       nome: 'Produtos',
  //       atributos: {
  //         nome: 'Pasta de dente',
  //         preco: 20,
  //         cor: 'branco'
  //       }
  //     }
  //   ]
  // }

  const { visibility, setVisibility } = useModal().newItemModal

  const renderTable = true;

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
          {registries.map((registry, id) => {
            return (
              <tr key={id}>
                <td>{registry.name}</td>
                <td>{registry.}</td> */}
                <td>{}</td>
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
    

      <LargeButton onClick={() => setVisibility(true)}>
        <PlusIcon width={30} stroke={'#ffffff'} fill={'none'} />
        <span>Novo registro</span>
      </LargeButton>
    </div>
  )
}