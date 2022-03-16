import { useState } from "react";
import { ModalProviderProps } from "../../constants/interfaces";
import { ModalContext } from '../contexts/ModalContext'

export default function ModalProvider(props: ModalProviderProps) {

  const [visible, setVisible] = useState(false)

  const show = () => {
    
  }

  return (
    <ModalContext.Provider>
      {props.children}
    </ModalContext.Provider>
  )
}