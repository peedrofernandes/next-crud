import Button from './Button'
import styles from '../../../styles/LargeButton.module.css'
import PlusIcon from '../../icons/PlusIcon'
import { ButtonProps } from '../../../constants/interfaces'

export default function LargeButton(props: ButtonProps) {
  return (
    <Button className={styles.largeButton} {...props}>
        {props.children}
    </Button>
  )
}