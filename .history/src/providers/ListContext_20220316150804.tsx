import { createContext } from 'react'
import { ListProps } from '../constants/interfaces'

const ListDefaultValues: ListPropss[] = [
  {nome: ''}
]

export const ListContext = createContext<ListProps[]>(ListDefaultValues);