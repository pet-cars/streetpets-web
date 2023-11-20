import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router} from "react-router-dom"
import './styles/global.css'

import AllRoutes from './routes'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Router>
      <AllRoutes />
  </Router>
)
