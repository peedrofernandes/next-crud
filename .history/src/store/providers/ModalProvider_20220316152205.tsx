import { useState } from "react";
import { ModalProviderProps } from "../../constants/interfaces";
import { ModalContext } from '../contexts/ModalContext'

export default function ModalProvider(props: ModalProviderProps) {

  const [newItemModalVisible, setNewItemModalVisible] = useState(false)

  const showNewItemModal = () => {
    setNewItemModalVisible(true)
  }

  const hideNewItemModal = () => {
    setNewItemModalVisible(false)
  }

  const value = {
    newItemModal
  }

  return (
    <ModalContext.Provider value={value}>
      {props.children}
    </ModalContext.Provider>
  )
}