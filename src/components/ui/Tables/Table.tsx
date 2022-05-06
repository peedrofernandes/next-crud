import styles from '../../../styles/Table.module.css'
import EditIcon from '../../icons/EditIcon';
import PlusIcon from '../../icons/PlusIcon';
import TrashIcon from '../../icons/TrashIcon';
import AddFilesImg from '../../images/AddFilesImg';
import IconButton from '../Buttons/IconButton';
import LargeButton from '../Buttons/LargeButton';
import { useModal, useList } from '../../../store/hooks';
import { useEffect, useState } from 'react';
import ConfigureIcon from '../../icons/ConfigureIcon';
import EditRegistryModal from '../Modais/EditRegistryModal';

export default function Table() {

  const { registries, setRegistries } = useList()
  const { NewRegistryModal, EditRegistryModal } = useModal()

  const [renderTable, setRenderTable] = useState<boolean>(false)

  useEffect(() => {
    if (registries.length > 0) {
      setRenderTable(true)
    } else if (registries.length == 0) {
      setRenderTable(false)
    }
  }, [registries, renderTable])

  function showEditRegistryModal(id) {
    EditRegistryModal.setId(id)
    EditRegistryModal.setVisibility(true)
  }
  function showNewRegistryModal() {
    NewRegistryModal.setVisibility(true)
  }


  console.log(registries)

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
                <td>{registry.creationDate}</td>
                <td>{registry.lastTimeModified}</td>
                <td className={styles.actionTd}>
                  <IconButton>
                    <ConfigureIcon width={24} stroke="none" fill="black"/>
                  </IconButton>
                  <IconButton onClick={() => showEditRegistryModal(id)}>
                    <EditIcon width={24} stroke="none" fill="#641CFD" />
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
    

      <LargeButton onClick={() => showNewRegistryModal()}>
        <PlusIcon width={30} stroke={'#ffffff'} fill={'none'} />
        <span>Novo registro</span>
      </LargeButton>
    </div>
  )
}