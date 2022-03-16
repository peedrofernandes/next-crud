import { createContext } from 'react'

type modalContextType = {
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





