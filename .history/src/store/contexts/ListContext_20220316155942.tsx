import { createContext } from 'react'
import { ListContextProps } from '../../constants/interfaces'

const ListContextDefaultValues: ListContextProps[] = [
  {
    nome: '',
    setList: () => { }
    
  }
]

export const ListContext = createContext<ListContextProps[]>(ListContextDefaultValues)
