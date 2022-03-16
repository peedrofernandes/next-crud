import styles from '../../../styles/Modal.module.css'
import { ModalProps } from '../../../constants/interfaces'
import { useState } from 'react'

export default function Modal(props: ModalProps) {

  const [modalStyle, setModalStyle] = useState({})

  return (
    <div className={`${styles.modal} ${props.className}`}>
      <div className={styles.modalBackground}>
        <div className={styles.modalContainer}>
          {props.children}
        </div>
      </div>
    </div>
  )
}