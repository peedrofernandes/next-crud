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

export interface ModalProps {
  className?: string
  children?: any
  style?: any
  visibility: boolean
}
export interface ModalContextProps {
  newItemModal: {
    visibility: boolean
    setVisibility: (visibility: boolean) => void
  },
}
export interface ModalProviderProps {
  children: ReactNode
}

export interface RegistryProps {
  nome: string
  dataCriacao: string
  ultimaVezModificado: string
  atributos: AttributeProps
}
export interface AttributeProps {
  [index: string]: string | boolean | number
}
export interface AttributeSpecs {
  
}
export interface NewRegistryAttributes {
  [index: number]: {
    name: string
    type: string
  }
}


export interface ListContextProps {
  registros: RegistryProps[],
  setRegistros: (registro: RegistryProps[]) => void
}
export interface ListProviderProps {
  children: ReactNode
}