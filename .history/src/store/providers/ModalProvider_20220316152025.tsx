import { useState } from "react";
import { ModalProviderProps } from "../../constants/interfaces";
import { ModalContext } from '../contexts/ModalContext'

export default function ModalProvider(props: ModalProviderProps) {

  const [visible, setVisible] = useState(false)

  const show = () => {
    setVisible(true)
  }

  const hide = () => {
    setVisible(false)
  }

  const value = {
    visible,
    show,
    hide
  }

  return (
    <ModalContext.Provider value={value}>
      {props.children}
    </ModalContext.Provider>
  )
}