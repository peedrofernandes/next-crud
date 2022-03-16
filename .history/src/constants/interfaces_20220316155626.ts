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
  nome: string
  setList: (obj: any) => void
  [key: string]: string | boolean | number
}

export interface ListProviderProps {
  children: ReactNode
}