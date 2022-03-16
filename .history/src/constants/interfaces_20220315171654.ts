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
  visible: boolean
}

export interface ButtonProps {
  style?: object
  className?: string
  children: any
  onClick?: (e?: any) => void
}

export interface modalContextProps {
  visible: boolean
  show: () => void
  hide: () => void
}