import { createContext } from 'react'
import { ListProperties } from '../constants/interfaces'

const ListDefaultValues: ListProperties[] = [
  {nome: ''}
]

export ListContext = createContext(ListDefaultValues);