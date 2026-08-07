import { BrowserRouter,Routes,Route } from 'react-router-dom'
import VerticleNavbar from "./components/VerticleNavbar.jsx"
import HorizontalNavbar from "./components/HorizontalNavbar.jsx"
import './App.css'
import Discover from './Pages/Discover'
import Ingredients from './Pages/Ingredients'
import CookBook from './Pages/CookBook'
import Subscription from './Pages/Subscription'

function App() {

  return (
 <BrowserRouter>
 <div>
  <VerticleNavbar />
  <HorizontalNavbar className="ml-[14%]"/>
  <main className='lg:ml-[15%] mt-12'> 

  
 <Routes>
    <Route path="/" element={<Discover/>}></Route>
    <Route path="/cookbook" element={<CookBook/>}></Route>
    <Route path="/ingredients" element={<Ingredients/>}></Route>
    <Route path="/subscription" element={<Subscription/>}></Route>
  </Routes>
    </main>
 </div>
  </BrowserRouter>
  )
}

export default App
