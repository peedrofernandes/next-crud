import { useState, useEffect } from 'react'
import Modal from './modal'
import styles from '../../../styles/NewItemModal.module.css'
import Button from '../Buttons/button';
import LargeButton from '../Buttons/largeButton';
import PlusIcon from '../../icons/plusIcon';
import AddIcon from '../../icons/addIcon';
import RemoveIcon from '../../icons/removeIcon';

export default function NewItemModal() {

  const [qtdElem, setQtdElem] = useState(2);

  return (
    <Modal className={styles.modal}>
      <div className={styles.modalHeader}>
        <h1>Novo Elemento para o registro</h1>
      </div>
      <hr className={styles.divider}/>
      <div className={styles.modalBody}>
        <form>
          {Array.from(Array(qtdElem), (e, i) => {
            return (
              <div className={styles.input}>
                <span>{`Input nº ${i + 1}`}</span>
                <input key={i} type="text" placeholder="inputTeste"></input>
              </div>
            )
          })}
          <div className={styles.addRemoveInputs}>
            <LargeButton style={{backgroundColor: '#111414'}}>
              <RemoveIcon width={24} fill="#FFF" stroke="none"></RemoveIcon>
              <span>Remover valor</span>
            </LargeButton>
            <LargeButton style={{backgroundColor: '#111414'}}>
              <AddIcon width={24} fill="#FFF" stroke="none"></AddIcon>
              <span>Adicionar valor</span>
            </LargeButton>
          </div>
        </form>
      </div>
      <div className={styles.modalFooter}>

      </div>
    </Modal>
  )
}