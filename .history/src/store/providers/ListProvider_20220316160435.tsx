import { useState } from "react";
import { ListProviderProps } from "../../constants/interfaces";
import { ListContext } from "../contexts/ListContext";

export default function ListProvider(props: ListProviderProps) {

  const [nome, setNome] = useState('')
  const [atributos, setAtributos] = useState({})

  const value = {
    nome,
    atributos,
    setNome,
    setAtributos
  }


  return (
    <ListContext.Provider value={value}>
      {props.children}
    </ListContext.Provider>
  )
}