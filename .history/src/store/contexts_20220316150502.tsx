import { createContext } from 'react'
import { ModalContextProps, ListContextProps}

const modalContextDefaultValues: ModalContextProps = {
  newItemModal: {
    visibility: false,
    show: () => {},
    hide: () => {} 
  },
}