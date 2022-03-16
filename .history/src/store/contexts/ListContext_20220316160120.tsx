import { createContext } from 'react'
import { ListContextProps } from '../../constants/interfaces'

const ListContextDefaultValues: ListContextProps[] = [
  {
    nome: '',
    props: { }
    setList: () => { },
  }
]

export const ListContext = createContext<ListContextProps[]>(ListContextDefaultValues)
