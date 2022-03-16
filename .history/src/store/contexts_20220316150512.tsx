import { createContext } from 'react'
import { ModalContextProps, ListProperties } from '../'

const modalContextDefaultValues: ModalContextProps = {
  newItemModal: {
    visibility: false,
    show: () => {},
    hide: () => {} 
  },
}