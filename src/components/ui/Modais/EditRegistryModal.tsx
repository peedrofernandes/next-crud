import { useEffect } from "react";
import { useList, useModal } from '../../../store/hooks'
import styles from '../../../styles/RegistryModal.module.css'
import Modal from "./Modal";

export default function EditRegistryModal() {

  const { visibility, setVisibility, id, setId } = useModal().EditRegistryModal
  const registry = useList().registries[id]

  useEffect(() => {
    if (visibility == false) {
      setId(null)
    }
  }, [visibility, setId])

  return (
    <Modal type="EditRegistryModal">
      {registry && (
        <div className={styles.modalHeader}>
          <h1>Editar registro {registry.name || ''}</h1>
        </div>
      )}
    
    </Modal>
  )
}