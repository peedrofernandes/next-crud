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

export interface NewObjectProps {
  name: string
  type: string
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


export interface ListContextProps {
  lista: {
      nome: string
      atributos: {
        [index: string]: string | boolean | number
      }
    }[]
  setLista: () => void
}
export interface ListProviderProps {
  children: ReactNode
}