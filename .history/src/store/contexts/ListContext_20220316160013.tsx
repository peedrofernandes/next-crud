import { createContext } from 'react'
import { ListContextProps } from '../../constants/interfaces'

const ListContextDefaultValues: ListContextProps[] = [
  {
    nome: '',
    setList: () => void,
    props: { }
  }
]

export const ListContext = createContext<ListContextProps[]>(ListContextDefaultValues)
