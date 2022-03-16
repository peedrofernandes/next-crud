import { useState } from "react";
import { ListProviderProps } from "../../constants/interfaces";
import { ListContext } from "../contexts/ListContext";

export default function ListProvider(props: ListProviderProps) {

  const initialState = []

  const [registries, setRegistries] = useState(initialState)

  const values = {
    registries,
    setRegistries
  }

  return (
    <ListContext.Provider value={values}>
      {props.children}
    </ListContext.Provider>
  )
}