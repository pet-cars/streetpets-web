import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router} from "react-router-dom"
import './styles/global.css'

import Header from './components/Header'
import AllRoutes from './routes'
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Router>
      <Header />
      <AllRoutes />
      <Footer/>
  </Router>
)
