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
    show: () => void
    hide: () => void
  },
}

export interface ModalProviderProps {
  children: ReactNode
}

export interface NewObjectPropertiesList {
  name: string
  type: string
}