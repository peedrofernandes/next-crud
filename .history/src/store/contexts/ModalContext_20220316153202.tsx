import { createContext } from 'react'
import { ModalContextProps } from '../../constants/interfaces'

const ModalContextDefaultValues: ModalContextProps = {
  newItemModal: {
    visibility: false,
    setVisibility: (false) => { }
  }
}

export const ModalContext = createContext<ModalContextProps>(ModalContextDefaultValues)
