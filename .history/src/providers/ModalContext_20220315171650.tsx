import { createContext, useContext } from 'react'



const modalContextDefaultValues: modalContextProps = {
  visible: false,
  show: () => {},
  hide: () => {} 
}

const modalContext = createContext<modalContextProps>(modalContextDefaultValues)

export function useModal() {
  return useContext(modalContext);
}



