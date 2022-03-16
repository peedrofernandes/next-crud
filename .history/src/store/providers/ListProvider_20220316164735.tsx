import { useState } from "react";
import { ListProviderProps } from "../../constants/interfaces";
import { ListContext } from "../contexts/ListContext";

export default function ListProvider(props: ListProviderProps) {

  const initialState = [{
      nome: '',
      dataCriacao: new Date(0)
      atributos: {}
  }]

  const [registros, setRegistros] = useState(initialState)

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