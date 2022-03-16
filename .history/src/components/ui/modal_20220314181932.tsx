import styles from '../../styles/Modal.module.css'

export default function Modal() {
  return (
    <div className={styles.modal}>
      <div className={styles.modalBackground}>
        <div className={styles.modalContainer}>
        <div></div>
        </div>
      </div>
    </div>
  )
}