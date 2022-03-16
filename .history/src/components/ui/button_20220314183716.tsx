import { ButtonProps } from '../../constants/interfaces'

export default function Button(props: ButtonProps) {
  return (
    <button style={{}>
      {props.children}
    </button>
  )
}