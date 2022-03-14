import styles from '../styles/NewItemButton.module.css'

export default function NewItemButton() {
  return (
    <button className={styles.newItemButton}>
        <div className={styles.buttonContainer}>
          <PlusIcon width={30} color={'#ffffff'} />
          <span>Novo registro</span>
        </div>
      </button>
  )
}