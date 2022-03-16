import { createContext } from 'react'
import { ModalContextProps } from '../../constants/interfaces'

const ModalContextDefaultValues: ModalContextProps = {
  newItemModal: {
    visibility: false,
    setVisibli
  }
}

export const ModalContext = createContext<ModalContextProps>(ModalContextDefaultValues)