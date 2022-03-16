import { createContext } from 'react'
import { ListProps } from '../../constants/interfaces'

const ListContextDefaultValues: ListProps[] = [
  {nome: ''}
]

export const ListContext = createContext<ListProps[]>ListContextDefaultValues)