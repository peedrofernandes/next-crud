import { loadGetInitialProps } from 'next/dist/shared/lib/utils'
import styles from '../../styles/Modal.module.css'

export default function Modal() {
  return (
    <div className={styles.modal}>
      <div className={styles.modalBackground}>
        <div className={styles.modalContainer}>
          <div className={styles.modalHeader}>
            
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