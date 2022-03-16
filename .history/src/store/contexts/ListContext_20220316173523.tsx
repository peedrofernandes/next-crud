import { createContext } from 'react'
import { ListContextProps, RegistryProps } from '../../constants/interfaces'


const ListContextDefaultValues: ListContextProps = {
  registries: [
    {
      name: '',
      creationDate: '',
      lastTimeModified: '',
      attributes: {}
    }
  ],
  setRegistros: (registro: RegistryProps[]) => { }
}

export const ListContext = createContext<ListContextProps>(ListContextDefaultValues)
