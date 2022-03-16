import { useState } from "react";
import { ListProviderProps } from "../../constants/interfaces";
import { ListContext } from "../contexts/ListContext";

export default function ListProvider(props: ListProviderProps) {

  const [lista, setLista] = useState({})

  const values = {
    lista,
    setLista
  }


  return (
    <ListContext.Provider value={values}>
      {props.children}
    </ListContext.Provider>
  )
}