import { ButtonProps } from '../../../constants/interfaces'

export default function Button(props: ButtonProps) {
  return (
    <button {...props} style={{backgroundColor: props.color}} className={props.className}>
      {props.children}
    </button>
  )
}