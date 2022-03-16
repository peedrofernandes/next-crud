import styles from '../../../styles/Modal.module.css'
import { ModalProps } from '../../../constants/interfaces'

export default function Modal(props: ModalProps) {
  return (
    <div className={`${styles.modal} ${props.className }`}>
      <div className={styles.modalBackground}>
        <div className={styles.modalContainer}>
          {props.children}
        </div>
      </div>
    </div>
  )
}