import { useState } from 'react'
import { ModalProviderProps } from '../constants/interfaces'
import { ModalContext } from './ModalContext'

export default function ModalProvider(props: ModalProviderProps) {

  const [visible, setVisible] = useState<boolean>(false)

  const show = () => {
    setVisible(true)
  }

  const hide = () => {
    setVisible(false)
  }

  const value = {
    
  }

  return (
    <>
      <ModalContext.Provider >

      </ModalContext.Provider>
    </>
  )
} 