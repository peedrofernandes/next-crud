import { createContext, useContext } from 'react'
import { ModalContextProps } from '../constants/interfaces';

const modalContextDefaultValues: ModalContextProps = {
  newItemModal: {
    visibility: false,
    setVisibil
  },
}

export const ModalContext = createContext<ModalContextProps>(modalContextDefaultValues)

export function useModal() {
  return useContext(ModalContext);
}



