import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import CardCoffes from './components/Coffee-Cards'
import Navigations from './routes/routes'

function App() {

  return (
    <Router>
          <div>
            <Navigations />
          </div>
    </Router>
  )
}

export default App
