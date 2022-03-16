import { ButtonProps } from '../../constants/interfaces'

export default function Button(props: ButtonProps) {
  return (
    <button style={{backgroundColor: props.color}}>
      {props.children}
    </button>
  )
}