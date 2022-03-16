import { ModalProvider } from '../providers/ModalProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (<>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
