import { createContext } from 'react'

const modalContextDefaultValues: ModalContextProps = {
  newItemModal: {
    visibility: false,
    show: () => {},
    hide: () => {} 
  },
}