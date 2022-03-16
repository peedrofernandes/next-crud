import Button from './Buttons/button'
import styles from '../../styles/LargeButton.module.css'
import PlusIcon from '../icons/plusIcon'

export default function LargeButton() {
  return (
    <Button className={styles.largeButton}>
        <PlusIcon width={30} stroke={'#ffffff'} fill={'none'} />
        <span>Novo registro</span>
    </Button>
  )
}