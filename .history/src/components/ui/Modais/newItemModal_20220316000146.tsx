import { useState, useEffect } from 'react'
import Modal from './modal'
import styles from '../../../styles/NewItemModal.module.css'
import LargeButton from '../Buttons/largeButton'
import AddIcon from '../../icons/addIcon'
import RemoveIcon from '../../icons/removeIcon'
import IconButton from '../Buttons/iconButton'
import { ModalProps } from '../../../constants/interfaces'
import { useModal } from '../../../providers/ModalContext'

export default function NewItemModal(props: ModalProps) {

  const { visibility, show, hide } = useModal().newItemModal

  const [qtdElem, setQtdElem] = useState(2);

  function handleRemoveInput(e) {
    e.preventDefault();
    setQtdElem(qtdElem -1);
  }
  function handleAddInput(e) {
    e.preventDefault();
    setQtdElem(qtdElem + 1);
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
                  <input type="text" placeholder="inputTeste" />
                  <select placeholder="Tipo">
                    <option disabled selected>Tipo</option>
                    <option value="">Number</option>
                    <option value="">String</option>
                    <option value="">Boolean</option>
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
        <IconButton onClick={() => hide()}>
          <Close
        </IconButton>
      </div>
    </Modal>
  )
}