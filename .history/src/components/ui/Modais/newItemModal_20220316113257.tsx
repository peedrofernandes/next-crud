import { useState, useEffect } from 'react'
import Modal from './modal'
import styles from '../../../styles/NewItemModal.module.css'
import LargeButton from '../Buttons/largeButton'
import AddIcon from '../../icons/addIcon'
import RemoveIcon from '../../icons/removeIcon'
import IconButton from '../Buttons/iconButton'
import { ModalProps } from '../../../constants/interfaces'
import { useModal } from '../../../providers/ModalContext'
import CloseIcon from '../../icons/closeIcon'

export default function NewItemModal(props: ModalProps) {

  const { visibility, show, hide } = useModal().newItemModal

  const [qtdElem, setQtdElem] = useState(2);
  const [inputTypes, setInputTypes] = useState([])

  function handleRemoveInput(e) {
    e.preventDefault();
    setQtdElem(qtdElem -1);
  }
  function handleAddInput(e) {
    e.preventDefault();
    setQtdElem(qtdElem + 1);
  }
  function handleChangeInputType(i, type) {
    let arr = JSON.parse(JSON.stringify(inputTypes))
    arr[i] = type
    setInputTypes(arr)
  }

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
                  <input type={inputTypes[i]} placeholder="inputTeste" />
                  <select placeholder="Tipo">
                    <option disabled selected>Tipo</option>
                    <option value="" onChange={}={() => console.log('Number selecionado!')} >Number</option>
                    <option value="" onSelect={() => console.log('String selecionado!')}>String</option>
                    <option value="" onSelect={() => console.log('Bool selecionado!')}>Boolean</option>
                  </select>
                </div>
              </div>
            )
            })
          }

          <div className={styles.addRemoveInputs}>
            <IconButton onClick={(e) => handleRemoveInput(e)} style={{backgroundColor: '#111414'}}>
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
        <IconButton className={styles.closeButton} onClick={() => hide()}>
          <CloseIcon width={24} fill={'#111414'} stroke="none"></CloseIcon>
        </IconButton>
      </div>
    </Modal>
  )
}