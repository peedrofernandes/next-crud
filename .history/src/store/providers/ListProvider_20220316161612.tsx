import { useState } from "react";
import { ListProviderProps } from "../../constants/interfaces";
import { ListContext } from "../contexts/ListContext";

export default function ListProvider(props: ListProviderProps) {

  const [list


  return (
    <ListContext.Provider value={value}>
      {props.children}
    </ListContext.Provider>
  )
}