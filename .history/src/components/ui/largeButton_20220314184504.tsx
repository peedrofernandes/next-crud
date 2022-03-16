import styles from '../../styles/LargeButton.module.css'
import PlusIcon from '../icons/plusIcon'

export default function LargeButton() {
  return (
    <button className={styles.newItemButton}>
      <div className={styles.buttonContainer}>
        <PlusIcon width={30} stroke={'#ffffff'} fill={'none'} />
        <span>Novo registro</span>
      </div>
    </button>
  )
}