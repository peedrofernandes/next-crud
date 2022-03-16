import { createContext } from 'react'
import { ListContextProps } from '../../constants/interfaces'

const ListContextDefaultValues: ListContextProps[] = [
  {
    nome: '',
    atributos: {},
    setNome: () => { },
    setProps: () => { },
  }
]

export const ListContext = createContext<ListContextProps[]>(ListContextDefaultValues)
