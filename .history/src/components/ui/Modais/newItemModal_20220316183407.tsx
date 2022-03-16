import { useState, useEffect } from 'react'
import Modal from './modal'
import styles from '../../../styles/NewItemModal.module.css'
import AddIcon from '../../icons/addIcon'
import RemoveIcon from '../../icons/removeIcon'
import IconButton from '../Buttons/iconButton'
import { ModalProps, AttributeSpecs, AttributeProps, RegistryProps } from '../../../constants/interfaces'
import { useList, useModal } from '../../../store/hooks'
import CloseIcon from '../../icons/closeIcon'
import LargeButton from '../Buttons/largeButton'

export default function NewItemModal(props: ModalProps) {

  const { visibility, setVisibility } = useModal().newItemModal
  const { registries, setRegistries } = useList()

  const [name, setName] = useState<string>('')
  const [attributes, setAttributes] = useState<AttributeSpecs[]>([{name: '', type: ''}]);
  const [qtdElem, setQtdElem] = useState<number>(1);

  function handleRemoveInput(e) {
    e.preventDefault();
    setAttributes(JSON.parse(JSON.stringify(attributes)).slice(0, -1))
    setQtdElem(qtdElem - 1);
  }
  function handleAddInput(e) {
    e.preventDefault();
    let arr = JSON.parse(JSON.stringify(attributes))
    arr.push({name: '', type: ''})
    setAttributes(arr)
    setQtdElem(qtdElem + 1);
  }

  function handleSetPropertyName(e, i) {
    let arr = JSON.parse(JSON.stringify(attributes))
    arr[i].name = e.target.value
    setAttributes(arr)
  }
  function handleSetPropertyType(e, i) {
    let arr = JSON.parse(JSON.stringify(attributes))
    arr[i].type = e.target.value
    setAttributes(arr)
  }

  function handleSaveNewRegistry() {
    let attr: AttributeProps = {}

    for (let c = 0; c < attributes.length; c++) {

      const type = attributes[c].type
      let value = undefined

      switch (type) {
        case 'number':
          value = 0
          break
        case 'boolean':
          value = false
          break
        case 'string':
          value = ''
          break
      }

      attr = {
        ...attr,
        [attributes[c].name]: {
          type: attributes[c].type,
          value
        }
      }
    }

    const nowDate = {
      year: new Date().getFullYear().toString(),
      month: (new Date().getMonth() + 1).toString().padStart(2, '0'),
      day: new Date().getDate().toString().padStart(2, '0'),
      hour: new Date().getHours().toString(),
      min: new Date().getMinutes().toString()
    }

    const { year, month, day, hour, min } = nowDate

    nowDateString = `${day}/${month}/${year} - ${hour}:${}`

    const newRegistry: RegistryProps = {
      name,
      creationDate: nowDate,
      lastTimeModified: nowDate,
      attributes: attr
    }

    let currentRegistries = JSON.parse(JSON.stringify(registries))
    currentRegistries.push(registryProps)


  }

  useEffect(() => {
    console.log(attributes)
  }, [attributes])

  return (
    <Modal
      className={`${styles.modal}`}
      visibility={visibility}
    >
      <div className={styles.modalHeader}>
        <h1>Novo Elemento para o registro</h1>
      </div>

      <hr className={styles.divider} />
      
      <div className={styles.modalBody}>
        <form>

          <div className={styles.inputs}>
            <span>Nome</span>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Nome"></input>
          </div>

          {
          Array.from(Array(qtdElem), (e, i) => {

            return (
              <div className={styles.inputs} key={i}>
                <span>{`Propriedade #${i}`}</span>
                <div className={styles.inputAndSelect}>
                  <select onChange={(e) => handleSetPropertyType(e, i)} placeholder="Tipo">
                    <option disabled selected>Tipo</option>
                    <option value="number">Number</option>
                    <option value="string">String</option>
                    <option value="boolean">Boolean</option>
                  </select>
                  <input onChange={(e) => handleSetPropertyName(e, i)} type="text" placeholder={`Nome`}></input>
                </div>
              </div>
            )
            })
          }

          <div className={styles.addRemoveInputs}>

            <IconButton disabled={qtdElem === 1 ? true : false} onClick={(e) => handleRemoveInput(e)} style={{backgroundColor: '#111414'}}>
              <RemoveIcon width={24} fill="#FFF" stroke="none"></RemoveIcon>
            </IconButton>
            <IconButton onClick={(e) => handleAddInput(e)} style={{backgroundColor: '#111414'}}>
              <AddIcon width={24} fill="#FFF" stroke="none"></AddIcon>
            </IconButton>
          </div>

        </form>
      </div>

      <hr className={styles.divider} />

      <div className={styles.modalFooter}>
        <LargeButton onClick={() => setVisibility(false)} style={{backgroundColor: 'red'}}>
          Cancelar
        </LargeButton>
        <LargeButton onClick={() => handleSaveNewRegistry()} style={{backgroundColor: 'green'}}>
          Salvar
        </LargeButton>
      </div>
        <IconButton className={styles.closeButton} onClick={() => setVisibility(false)}>
          <CloseIcon width={24} fill={'#111414'} stroke="none"></CloseIcon>
        </IconButton>
    </Modal>
  )
}