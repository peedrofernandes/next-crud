import ModalProvider from '../providers/ModalProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </>
  )
}

export default MyApp
