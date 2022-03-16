import { createContext } from 'react'
import { ListProps } from '../constants/interfaces'

const ListDefaultValues: ListProps[] = [
  {nome: ''}
]

export const ListContext = createContext<ListProps[]>(ListDefaultValues);