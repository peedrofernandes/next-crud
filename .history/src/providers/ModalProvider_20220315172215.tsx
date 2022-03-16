import { useState } from 'react'
import { modalProviderProps } from '../constants/interfaces'
import { ModalContext } from './ModalContext'

export default function ModalProvider(props: modalProviderProps) {

  const [visible, setVisible] = useState<boolean>(false)



  const value = {

  }

  return (
    <>
      <ModalContext.Provider>

      </ModalContext.Provider>
    </>
  )
} 