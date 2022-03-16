import { useState } from "react";
import { ListProviderProps } from "../../constants/interfaces";
import { ListContext } from "../contexts/ListContext";

export default function ListProvider(props: ListProviderProps) {

  const [lista, setLista] = useState({})

  const values = {
    lista
  }


  return (
    <ListContext.Provider value={value}>
      {props.children}
    </ListContext.Provider>
  )
}