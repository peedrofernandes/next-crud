import { ReactNode } from "react"

export interface IconProps {
  width: number
  height?: number
  fill: string
  stroke: string
  children?: any
}

export interface ImgProps {
  width?: number
  height?: number
  className?: string
}

export interface ButtonProps {
  children: any
  style?: object
  className?: string
  onClick?: (e?: any) => void
  disabled?: boolean
}

export interface GenericModalProps {
  className?: string
  children?: any
  style?: any
  type: string
}
export interface ModalContextProps {
  NewRegistryModal: {
    visibility: boolean
    setVisibility: (visibility: boolean) => void
  },
  EditRegistryModal: {
    visibility: boolean
    setVisibility: (visibility: boolean) => void,
    id: number,
    setId: (id: number) => void
  }
}
export interface ModalProviderProps {
  children: ReactNode
}

export interface RegistryProps {
  name: string
  creationDate: string
  lastTimeModified: string
  attributes: AttributeProps
}
export interface AttributeProps {
  [index: string]: {
    type: string
    value: string | boolean | number
  }
}
export interface AttributeSpecs {
  name: string,
  type: string
}


export interface ListContextProps {
  registries: RegistryProps[],
  setRegistries: (registry: RegistryProps[]) => void
}
export interface ListProviderProps {
  children: ReactNode
}