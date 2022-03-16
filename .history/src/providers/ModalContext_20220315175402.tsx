import { createContext, useContext } from 'react'
import { ModalContextProps } from '../constants/interfaces';

const modalContextDefaultValues: ModalContextProps = {
  newItemModal: {
    visible: false,
    show: () => {},
    hide: () => {} 
  },
}

export const ModalContext = createContext<ModalContextProps>(modalContextDefaultValues)

export function useModal() {
  return useContext(ModalContext);
}



