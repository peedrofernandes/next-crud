import { useState } from "react";
import { ListProviderProps } from "../../constants/interfaces";
import { ListContext } from "../contexts/ListContext";

export default function ListProvider(props: ListProviderProps) {

  const initialState = [{
      nome: '',
      atributos: {}
  }]

  const [lista, setLista] = useState(initialState)

  const values = {
    registros,
    setRegistros
  }

  return (
    <ListContext.Provider value={values}>
      {props.children}
    </ListContext.Provider>
  )
}