import { ButtonProps } from '../../'

export default function Button(props: ButtonProps) {
  return (
    <button>
      {props.children}
    </button>
  )
}