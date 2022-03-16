import { useState } from 'react'
import { ModalProviderProps } from '../constants/interfaces'
import { ModalContext } from './ModalContext'

export default function ModalProvider(props: ModalProviderProps) {

  const [newItemModalvisible, setNewItemModalVisible] = useState<boolean>(false)
  const showNewItemModal = () => {
    setNewItemModalVisible(true)
  }
  const hideNewItemModal = () => {
    setNewItemModalVisible(false)
  }

  const value = {
    
    visible,
    show,
    hide
  }

  return (
    <>
      <ModalContext.Provider value={value}>
        {props.children}
      </ModalContext.Provider>
    </>
  )
} 