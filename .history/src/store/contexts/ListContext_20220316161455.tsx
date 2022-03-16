import { createContext } from 'react'
import { ListContextProps } from '../../constants/interfaces'

// const ListContextDefaultValues: ListContextProps = [
//   {
//     nome: '',
//     atributos: {},
//     setNome: () => { },
//     setAtributos: () => { },
//   }
// ]

const ListContextDefaultValues: ListContextProps = {
  
}

export const ListContext = createContext<ListContextProps>(ListContextDefaultValues)
