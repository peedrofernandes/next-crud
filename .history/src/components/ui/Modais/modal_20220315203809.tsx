import styles from '../../../styles/Modal.module.css'
import { ModalProps } from '../../../constants/interfaces'
import { useState, useEffect } from 'react'

export default function Modal(props: ModalProps) {

  const [style, setStyle] = useState({display: 'none'})

  useState(() => {
    if (props.visibility) {
      setStyle({display: 'flex'})
    } else {
      setTimeout(() => {
        setStyle({display: 'none'})
      }, 200)
    }
  }, [style])
  
  return (
    <div
      className={`
        ${styles.modal} 
        ${props.className} 
        ${props.visibility ? styles.visible : styles.hidden}
      `}
      style={}
      >
      <div className={styles.modalBackground}>
        <div className={styles.modalContainer}>
          {props.children}
        </div>
      </div>
    </div>
  )
}