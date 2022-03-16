import { useContext } from 'react'
import { ListContext } from './contexts/ListContext'
import { ModalContext } from './contexts/ModalContext'

const useModal = () => {
  return useContext(ModalContext)
}

const useList = () => {
  return useContext(ListContext)
}

export {
  useModal,
  useList
}