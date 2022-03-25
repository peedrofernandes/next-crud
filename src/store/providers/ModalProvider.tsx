import { useState } from "react";
import { ModalProviderProps } from "../../constants/interfaces";
import { ModalContext } from '../contexts/ModalContext'

export default function ModalProvider(props: ModalProviderProps) {

  const [newItemModalVisible, setNewItemModalVisible] = useState<boolean>(false)
  const [editRegistryModalVisible, setEditRegistryModalVisible] = useState<boolean>(false)
  const [editRegistryModalId, setEditRegistryModalId] = useState<number>(0)

  const value = {
    NewRegistryModal: {
      visibility: newItemModalVisible,
      setVisibility: setNewItemModalVisible
    },
    EditRegistryModal: {
      visibility: editRegistryModalVisible,
      setVisibility: setEditRegistryModalVisible,
      id: editRegistryModalId,
      setId: setEditRegistryModalId
    }
  }

  return (
    <ModalContext.Provider value={value}>
      {props.children}
    </ModalContext.Provider>
  )
}