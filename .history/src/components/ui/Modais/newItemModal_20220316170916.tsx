import { useState, useEffect } from 'react'
import Modal from './modal'
import styles from '../../../styles/NewItemModal.module.css'
import AddIcon from '../../icons/addIcon'
import RemoveIcon from '../../icons/removeIcon'
import IconButton from '../Buttons/iconButton'
import { ModalProps, RegistroProps } from '../../../constants/interfaces'
import { useModal } from '../../../store/hooks'
import CloseIcon from '../../icons/closeIcon'

export default function NewItemModal(props: ModalProps) {

  const { visibility, setVisibility } = useModal().newItemModal

  const [name, setName] = useState<string>('')
  const [properties, setProperties] = useState<AtributoProps>();
  const [qtdElem, setQtdElem] = useState<number>(1);

  function handleRemoveInput(e) {
    e.preventDefault();
    setProperties(JSON.parse(JSON.stringify(properties)).slice(0, -1))
    setQtdElem(qtdElem - 1);
  }
  function handleAddInput(e) {
    e.preventDefault();
    let arr = JSON.parse(JSON.stringify(properties))
    arr.push({name: '', type: ''})
    setProperties(arr)
    setQtdElem(qtdElem + 1);
  }

  function handleSetPropertyName(e, i) {
    let arr = JSON.parse(JSON.stringify(properties))
    arr[i].name = e.target.value
    setProperties(arr)
  }
  function handleSetPropertyType(e, i) {
    let arr = JSON.parse(JSON.stringify(properties))
    arr[i].type = e.target.value
    setProperties(arr)
  }

  // useEffect(() => {
  //   console.log(properties)
  // }, [properties])

  return (
    <Modal
      className={`${styles.modal}`}
      visibility={visibility}
    >
      <div className={styles.modalHeader}>
        <h1>Novo Elemento para o registro</h1>
      </div>

      <hr className={styles.divider} />
      
      <div className={styles.modalBody}>
        <form>

          <div className={styles.inputs}>
            <span>Nome</span>
            <input type="text" placeholder="Nome"></input>
          </div>

          {
          Array.from(Array(qtdElem), (e, i) => {

            return (
              <div className={styles.inputs} key={i}>
                <span>{`Propriedade #${i}`}</span>
                <div className={styles.inputAndSelect}>
                  <select onChange={(e) => handleSetPropertyType(e, i)} placeholder="Tipo">
                    <option disabled selected>Tipo</option>
                    <option value="number">Number</option>
                    <option value="string">String</option>
                    <option value="boolean">Boolean</option>
                  </select>
                  <input onChange={(e) => handleSetPropertyName(e, i)} type="text" placeholder={`Nome`}></input>
                </div>
              </div>
            )
            })
          }

          <div className={styles.addRemoveInputs}>

            <IconButton disabled={qtdElem === 1 ? true : false} onClick={(e) => handleRemoveInput(e)} style={{backgroundColor: '#111414'}}>
              <RemoveIcon width={24} fill="#FFF" stroke="none"></RemoveIcon>
            </IconButton>
            <IconButton onClick={(e) => handleAddInput(e)} style={{backgroundColor: '#111414'}}>
              <AddIcon width={24} fill="#FFF" stroke="none"></AddIcon>
            </IconButton>
          </div>

        </form>
      </div>

      <div className={styles.modalFooter}>
        {/* <LargeButton onClick={() => hide()} style={{backgroundColor: 'green'}}>
          Fechar
        </LargeButton> */}
        <IconButton className={styles.closeButton} onClick={() => setVisibility(false)}>
          <CloseIcon width={24} fill={'#111414'} stroke="none"></CloseIcon>
        </IconButton>
      </div>
    </Modal>
  )
}