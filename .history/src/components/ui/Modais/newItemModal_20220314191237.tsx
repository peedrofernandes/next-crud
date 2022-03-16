import Modal from './modal'
import styles from '../../../styles/NewItemModal.module.css'

export default function NewItemModal() {
  return (
    <Modal className={styles.modal}>
      <div className={styles.modalHeader}>
        <h1>Novo Elemento para o registro</h1>
      </div>
      <div className={styles.modalBody}>
        <form>
          <input type="text" name="" id="" />
        </form>
      </div>
      <div className={styles.modalFooter}>

      </div>
    </Modal>
  )
}