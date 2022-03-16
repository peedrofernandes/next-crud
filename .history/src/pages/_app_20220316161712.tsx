import ModalProvider from '../store/providers/ModalProvider'
import ListProvider from '../store/providers/ListProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ListProvider>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </ListProvider>
    </>
  )
}

export default MyApp
