import { createContext } from 'react'

export const ModalContext = createContext({})

export const ModalProvider = (props) => {


  
  return (
    <ModalContext.Provider value={{visible}}>
  )
}