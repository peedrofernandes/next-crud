import { useState } from "react";
import { ListProviderProps } from "../../constants/interfaces";
import { ListContext } from "../contexts/ListContext";

export default function ListProvider(props: ListProviderProps) {

  const [nome, setNome]
  const [Atributos, setAttributes] = useState({})


  return (
    <ListContext.Provider value={ }>
      {props.children}
    </ListContext.Provider>
  )
}