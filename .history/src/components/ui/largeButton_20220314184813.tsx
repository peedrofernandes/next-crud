import Button from './button'
import styles from '../../styles/LargeButton.module.css'
import PlusIcon from '../icons/plusIcon'

export default function LargeButton() {
  return (
    <Button className={styles.largeButton}>
      <div className={styles.largeButtonContainer}>
        <PlusIcon width={30} stroke={'#ffffff'} fill={'none'} />
        <span>Novo registro</span>
      </div>
    </Button>
  )
}