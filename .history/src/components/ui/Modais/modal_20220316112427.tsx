import styles from '../../../styles/Modal.module.css'
import { ModalProps } from '../../../constants/interfaces'
import { useState, useEffect } from 'react'

export default function Modal(props: ModalProps) {

  const [style, setStyle] = useState({display: 'none'})

  useEffect(() => {
    if (props.visibility) {
      setStyle({display: 'flex'})
    } else {
      setTimeout(() => {
        setStyle({display: 'none'})
      }, 200)
    }
  }, [props.visibility])
  
  return (
    <div
      className={`
        ${styles.modal} 
        ${props.className} 
        ${props.visibility ? styles.visible : styles.hidden}
      `}
      style={style}
      >
      <div className={styles.modalBackground}>
        <div className={styles.modalContainer}>
          {props.children}
        </div>
      </div>
    </div>
  )
}