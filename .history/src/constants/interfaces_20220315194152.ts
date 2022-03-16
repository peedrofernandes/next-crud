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
}

export interface ButtonProps {
  style?: object
  className?: string
  children: any
  onClick?: (e?: any) => void
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