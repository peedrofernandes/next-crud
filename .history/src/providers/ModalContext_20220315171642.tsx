import { createContext, useContext } from 'react'

interface modalContextProps {
  visible: boolean
  show: () => void
  hide: () => void
}

const modalContextDefaultValues: modalContextType = {
  visible: false,
  show: () => {},
  hide: () => {} 
}

const modalContext = createContext<modalContextType>(modalContextDefaultValues)

export function useModal() {
  return useContext(modalContext);
}



