import { createContext, useContext } from 'react'
import { ModalContextProps } from '../constants/interfaces';

const modalContextDefaultValues: modalContextProps = {
  visible: false,
  show: () => {},
  hide: () => {} 
}

export const ModalContext = createContext<modalContextProps>(modalContextDefaultValues)

export function useModal() {
  return useContext(ModalContext);
}



