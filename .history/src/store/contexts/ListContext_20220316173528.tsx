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
  setRegistries: (registro: RegistryProps[]) => { }
}

export const ListContext = createContext<ListContextProps>(ListContextDefaultValues)
