import styles from '../../../styles/Modal.module.css'
import { ModalProps } from '../../../constants/interfaces'
import { useState, useEffect } from 'react'

export default function Modal(props: ModalProps) {



  // function hideModalDelay() {
  //   let style = {}

  //   setTimeout(() => {
  //     style = {
  //       display: 'none'
  //     }
  //   }, 200)

  //   return style
  // }

  return (
    <div className={`
    ${styles.modal} 
    ${props.className} ${props.visibility ? 'visible' : 'hidden'}`} {...props}>
      <div className={styles.modalBackground}>
        <div className={styles.modalContainer}>
          {props.children}
        </div>
      </div>
    </div>
  )
}