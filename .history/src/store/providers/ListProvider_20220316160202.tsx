import { useState } from "react";
import { ListProviderProps } from "../../constants/interfaces";
import { ListContext } from "../contexts/ListContext";

export default function ListProvider(props: ListProviderProps) {

  const [props, setProps] = useState({})

  return (
    <ListContext.Provider value={ }>
      {props.children}
    </ListContext.Provider>
  )
}