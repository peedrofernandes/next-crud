import { createContext } from 'react'
import { ModalContextProps } from '../../constants/interfaces'

const ModalContextDefaultValues: ModalContextProps = {
  NewRegistryModal: {
    visibility: false,
    setVisibility: () => { }
  },
  EditRegistryModal: {
    visibility: false,
    setVisibility: () => { },
    id: 0,
    setId: () => { }
  },
}

export const ModalContext = createContext<ModalContextProps>(ModalContextDefaultValues)
