import '../styles/globals.css'
import Layout from '../components/Layout'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from 'react-use-cart';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>    
      <ToastContainer
            position="top-center"
            autoClose={2555}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    </Layout>
  )
}

export default MyApp
