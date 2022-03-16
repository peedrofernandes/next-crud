import { createContext } from 'react'
import { ListProps } from '../constants/interfaces'

const ListDefaultValues: ListProperties[] = [
  {nome: ''}
]

export const ListContext = createContext<ListProperties[]>(ListDefaultValues);