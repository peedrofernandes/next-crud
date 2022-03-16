import { useState } from "react";
import { ModalProviderProps } from "../../constants/interfaces";
import { ModalContext } from '../contexts/ModalContext'

export default function ModalProvider(props: ModalProviderProps) {

  const [newItemModalVisible, setNewItemModalVisible] = useState<boolean>(false)

  const showNewItemModal = () => {
    setNewItemModalVisible(true)
  }

  const hideNewItemModal = () => {
    setNewItemModalVisible(false)
  }

  const value = {
    newItemModal: {
      visible: newItemModalVisible,
      show: showNewItemModal,
      hide: hideNewItemModal
    }
  }

  return (
    <ModalContext.Provider value={value}=al}>
      {props.children}
    </ModalContext.Provider>
  )
}