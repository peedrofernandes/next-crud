import { useState } from "react";
import { ListProviderProps } from "../../constants/interfaces";
import { ListContext } from "../contexts/ListContext";

export default function ListProvider({ children }) {

  const [attributes, setProps] = useState({})

  return (
    <ListContext.Provider value={ }>
      {props.children}
    </ListContext.Provider>
  )
}