import { createContext, useContext } from 'react'
import { modalContextProps } from '../constants/interfaces';

const modalContextDefaultValues: modalContextProps = {
  visible: false,
  show: () => {},
  hide: () => {} 
}

export default modalContext = createContext<modalContextProps>(modalContextDefaultValues)

export function useModal() {
  return useContext(modalContext);
}



