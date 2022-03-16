import Modal from './modal'
import styles from '../../../styles/NewItemModal.module.css'

export default function NewItemModal() {
  return (
    <Modal className={styles.modal}>
      <div className={styles.modalHeader}>
        <h1>Novo Elemento para o registro</h1>
      </div>
      <hr className={divider}/>
      <div className={styles.modalBody}>
        <form>
          <input type="text" name="Prop1" id="Prop1" placeholder="Propiedade 1"/>
        </form>
      </div>
      <div className={styles.modalFooter}>

      </div>
    </Modal>
  )
}