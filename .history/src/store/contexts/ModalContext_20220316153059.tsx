import { createContext } from 'react'
import { ModalContextProps } from '../../constants/interfaces'

const ModalContextDefaultValues: ModalContextProps = {
  newItemModal: {
    visibility: false,
    setVisibility: () => void
  }
}

export const ModalContext = createContext<ModalContextProps>(ModalContextDefaultValues)
