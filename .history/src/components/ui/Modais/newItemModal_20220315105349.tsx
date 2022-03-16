import { useState, useEffect } from 'react'
import Modal from './modal'
import styles from '../../../styles/NewItemModal.module.css'
import Button from '../Buttons/button';

export default function NewItemModal() {

  const [qtdElem, setQtdElem] = useState(6);

  // const renderInput = (i) => {
  //   return (
  //     <div>
  //       <span>{`Input nº ${i + 1}`}</span>
  //       <input key={i} type="text" placeholder="inputTeste"></input>
  //     </div>
  //   )
  // }

  // const renderInputs = () => {
  //   let jsx = (<></>);

  //   for(let n = 0; n<qtdElem; n++) {
  //     jsx += renderInput(n)
  //   }

  //   return jsx
  // }

  // useEffect(() => {
  //   renderInputs()
  // }, [qtdElem])

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
          <Button>
            +
          </Button>
        </form>
      </div>
      <div className={styles.modalFooter}>

      </div>
    </Modal>
  )
}