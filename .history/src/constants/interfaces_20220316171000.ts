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

export interface ModalProps {
  className?: string
  children?: any
  style?: any
  visibility: boolean
}

export interface ButtonProps {
  children: any
  style?: object
  className?: string
  onClick?: (e?: any) => void
  disabled?: boolean
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

export interface RegistroProps {
  nome: string
  dataCriacao: string
  ultimaVezModificado: string
  atributos: AtributoProps
}
export interface AtributoProps {
  [index: string]: string | boolean | number
}


export interface ListContextProps {
  registros: RegistroProps[],
  setRegistros: (registro: RegistroProps[]) => void
}
export interface ListProviderProps {
  children: ReactNode
}