import { ModalProviderProps } from "../../constants/interfaces";
import { ModalContext } from '../contexts/ModalContext'

export default function ModalProvider(props: ModalProviderProps) {

  

  return (
    <ModalContext.Provider>
      {props.children}
    </ModalContext.Provider>
  )
}