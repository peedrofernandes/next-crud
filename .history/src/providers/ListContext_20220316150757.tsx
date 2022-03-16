import { createContext } from 'react'
import { ListPropS } from '../constants/interfaces'

const ListDefaultValues: ListProperties[] = [
  {nome: ''}
]

export const ListContext = createContext<ListProperties[]>(ListDefaultValues);