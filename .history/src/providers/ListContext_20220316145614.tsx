import { createContext } from 'react'
import { ListProperties } from '../constants/interfaces'

const ListDefaultValues: ListProperties[] = [
  {nome: ''}
]

export const ListContext = createContext<ListProperties[]>(ListDefaultValues);