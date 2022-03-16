import { createContext } from 'react'
import { ListContextProps, RegistryProps } from '../../constants/interfaces'


const ListContextDefaultValues: ListContextProps = {
  registros: [
    {
      nome: '',
      dataCriacao: '',
      lastTimeModified: '',
      attributes: {}
    }
  ],
  setRegistros: (registro: RegistryProps[]) => { }
}

export const ListContext = createContext<ListContextProps>(ListContextDefaultValues)
