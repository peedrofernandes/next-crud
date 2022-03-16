import { createContext, useContext } from 'react'

interface modalContextProps {
  visible: boolean
  show: () => void
  hide: () => void
}

const modalContextDefaultValues: modalContextProps = {
  visible: false,
  show: () => {},
  hide: () => {} 
}

const modalContext = createContext<modalContextProps>(modalContextDefaultValues)

export function useModal() {
  return useContext(modalContext);
}



