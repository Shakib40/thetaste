import '../styles/globals.css'
import Layout from '../components/layout/Layout' 
// import { Provider } from "react-redux";
// import { wrapper } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (

    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
