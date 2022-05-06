import { ButtonProps } from '../../../constants/interfaces'

export default function Button(props: ButtonProps) {
  return (
    <button {...props} className={props.className}>
      {props.children}
    </button>
  )
}