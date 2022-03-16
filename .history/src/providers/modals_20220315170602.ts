import { createContext } from 'react'

export const ModalContext = createContext({})

export const ModalProvider = (props) => {

  const visible = 

  return (
    <ModalContext.Provider value= {{ visible }
}>
    </ModalContext.Provider>
  )
}