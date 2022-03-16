import { ButtonProps } from '../../constants/interfaces'

export default function Button(props: ButtonProps) {
  return (
    <button {props.color && }>
      {props.children}
    </button>
  )
}