import { ButtonProps } from "../../../constants/interfaces"
import styles from '../../../styles/IconButton.module.css'
import Button from "./button";

export default function IconButton(props: ButtonProps) {
  return (
    <Button className={styles.iconButton} {...props} >
      {/* {props.children} */}
    </Button>
  )
}