import { modalProviderProps } from '../constants/interfaces'
import { ModalContext } from './ModalContext'

export default function ModalProvider(props) {

  const [visible, setVisible] = useState<boolean>

  return (
    <>
      <ModalContext.Provider>

      </ModalContext.Provider>
    </>
  )
} 