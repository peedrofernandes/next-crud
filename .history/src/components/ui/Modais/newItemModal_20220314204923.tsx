import { useState, useEffect } from 'react'
import Modal from './modal'
import styles from '../../../styles/NewItemModal.module.css'

export default function NewItemModal() {

  const [qtdElem, setQtdElem] = useState(3);

  const renderInput = (i) => {
    return (
      <div>
        <span>{`Input nº ${i + 1}`}</span>
        <input key={i} type="text" placeholder="inputTeste"></input>
      </div>
    )
  }

  const renderInputs = () => {
    

    for(let n = 0; n<qtdElem; n++) {
      renderInput(n)
    }
  }

  useEffect(() => {
    renderInputs()
  }, [qtdElem])

  return (
    <Modal className={styles.modal}>
      <div className={styles.modalHeader}>
        <h1>Novo Elemento para o registro</h1>
      </div>
      <hr className={styles.divider}/>
      <div className={styles.modalBody}>
        <form>
          {renderInputs()}
        </form>
      </div>
      <div className={styles.modalFooter}>

      </div>
    </Modal>
  )
}