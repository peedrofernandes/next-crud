import styles from '../../../styles/Modal.module.css'
import { GenericModalProps } from '../../../constants/interfaces'
import { useState, useEffect } from 'react'
import { useModal } from '../../../store/hooks'

export default function Modal(props: GenericModalProps) {

  const { visibility, setVisibility } = useModal()[props.type]

  const [style, setStyle] = useState({display: 'none'})

  useEffect(() => {
    if (visibility) {
      setStyle({display: 'flex'})
    } else {
      setTimeout(() => {
        setStyle({display: 'none'})
      }, 200)
    }
  }, [visibility])

  function handleOutsideCloseModal(e) {
    if (e.target.className != styles.modalBackground) 
      return
    setVisibility(false)
  }

  return (
    <div
      className={`
        ${styles.modal} 
        ${props.className} 
        ${visibility ? styles.visible : styles.hidden}
      `}
      style={style}
      >
      <div onClick={(e) => handleOutsideCloseModal(e)} className={styles.modalBackground}>
        <div className={styles.modalContainer}>
          {props.children}
        </div>
      </div>
    </div>
  )
}