import styles from '../styles/NewItemButton.module.css'
import PlusIcon from './icons/plusIcon'

export default function NewItemButton() {
  return (
    <button className={styles.newItemButton}>
      <div className={styles.buttonContainer}>
        <PlusIcon width={30} fill={'none'} />
        <span>Novo registro</span>
      </div>
    </button>
  )
}