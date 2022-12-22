import '../styles/globals.css'
import Navbar from '../components/Navbar.jsx'

function MyApp({ Component, pageProps }) {
  return <div>
  <Navbar/>
  <Component {...pageProps} />
  </div>

}

export default MyApp
