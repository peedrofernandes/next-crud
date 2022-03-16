import styles from '../../../styles/Modal.module.css'
import { ModalProps } from '../../../constants/interfaces'
import { useState, useEffect } from 'react'

export default function Modal(props: ModalProps) {
  
  return (
    <div
      className={`
        ${styles.modal} 
        ${props.className} 
        ${sty}
      `}
      style={props.visibility ? { display: 'flex' } : { display: 'none' }}
      {...props}>
      <div className={styles.modalBackground}>
        <div className={styles.modalContainer}>
          {props.children}
        </div>
      </div>
    </div>
  )
}