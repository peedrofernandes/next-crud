import { createContext } from 'react'
import { ModalContextProps, ListProperties } from '../constants/interfaces'

const modalContextDefaultValues: ModalContextProps = {
  newItemModal: {
    visibility: false,
    show: () => {},
    hide: () => {} 
  },
}

const listContextDefaultValues: ListProperties[] = [
  {nome: ''}
]

export const ModalContext = createContext<ModalContextProps>(modalContextDefaultValues)
export const ListContext = createContext<>