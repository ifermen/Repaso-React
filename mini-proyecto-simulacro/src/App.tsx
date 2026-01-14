import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Characters } from './pages/Characters'
import { Favorites } from './pages/Favorites'
import { LandingPage } from './pages/LandingPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/characters' element={<Characters/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
