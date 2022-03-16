import styles from '../../styles/Modal.module.css'
import ModalProps from '../'

export default function Modal(props: ModalProps) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalBackground}>
        <div className={styles.modalContainer}>
          <div className={styles.modalHeader}>
            {props.title}
          </div>
          <div className={styles.modalBody}>
            {props.children}
          </div>
          <div className={styles.modalFooter}>
            
          </div>
        </div>
      </div>
    </div>
  )
}