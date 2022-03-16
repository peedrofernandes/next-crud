import { createContext } from 'react'
import { ListContextProps } from '../../constants/interfaces'


const ListContextDefaultValues: ListContextProps = {
  registros: [
    {
      nome: '',
      dataCriacao: '',
      ultimaVezModificado: '',
      atributos: {}
    }
  ],
  setRegistros: () => { }
}

export const ListContext = createContext<ListContextProps>(ListContextDefaultValues)
