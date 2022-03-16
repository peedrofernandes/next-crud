import { ListProviderProps } from "../../constants/interfaces";
import { ListContext } from "../contexts/ListContext";

export default function ListProvider(props: ListProviderProps) {



  return (
    <ListContext.Provider value={ }>
      {props.children}
    </ListContext.Provider>
  )
}