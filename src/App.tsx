import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import './App.css'
import { Home } from './Pages/Home'
import { Login } from './Pages/Login'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {
  

  return (
    
    <div className='App'>
      <Provider store={store}>
        <Router>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Routes>

            <Route path='/' element={ <Home />}></Route>
            <Route path='/login' element={ <Login />}></Route>
           
          </Routes>
        </Router>
      </Provider>
    </div>
   
  )
}

export default App
