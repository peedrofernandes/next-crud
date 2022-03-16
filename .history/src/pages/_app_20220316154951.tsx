import ModalProvider from '../store/'
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
