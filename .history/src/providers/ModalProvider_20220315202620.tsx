import { useState } from 'react'
import { ModalProviderProps } from '../constants/interfaces'
import { ModalContext } from './ModalContext'

export default function ModalProvider(props: ModalProviderProps) {

  const [newItemModalVisible, setNewItemModalVisible] = useState<boolean>(false)

  const showNewItemModal = () => {
    setNewItemModalVisible(true)
  }
  const hideNewItemModal = () => {
    setTimeout(() => {
      setNewItemModalVisible(false)
  }

  const value = {
    newItemModal: { // Modal - Novo Item
      visibility: newItemModalVisible,
      show: showNewItemModal,
      hide: hideNewItemModal
    }
  }

  return (
    <>
      <ModalContext.Provider value={value}>
        {props.children}
      </ModalContext.Provider>
    </>
  )
} 