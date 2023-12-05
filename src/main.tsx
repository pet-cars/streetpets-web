import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router} from "react-router-dom"
import './styles/global.css'

import AllRoutes from './routes'
import { AuthProvider } from './context/auth/AuthProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Router>
    <AuthProvider>
      <AllRoutes />
    </AuthProvider>
  </Router>
)
