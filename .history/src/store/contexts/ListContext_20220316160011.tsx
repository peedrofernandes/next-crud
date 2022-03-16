import { createContext } from 'react'
import { ListContextProps } from '../../constants/interfaces'

const ListContextDefaultValues: ListContextProps[] = [
  {
    nome: '',
    setList: () => { },
    props: { }
  }
]

export const ListContext = createContext<ListContextProps[]>(ListContextDefaultValues)
