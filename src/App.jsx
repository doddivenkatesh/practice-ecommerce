import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import { FaBeer } from 'react-icons/fa'
import Products from './components/Products'
import Counter from './counter'
import Home from './Home'
import { FcAbout } from 'react-icons/fc'
import About from './About'
import Contact from './Contact'
import { Link } from 'react-router-dom'
import Signup from './signup'
import Team from './Team'
import NotFound from './NotFound'
function App() {
  const [count, setCount] = useState(0)

  return (

     
    <div>

   
    <Router>
    <div className='min-h-screen bg-green-200'>
    <nav className='bg-gray-200' >
      <ul className='flex justify-center '>
        <li className='px-5 py-5'>
          
          <Link 
         className='text text-red-700 hover:bg-yellow-200'
        to ="/">Home</Link></li>
        <li className='px-5 py-5'> <Link 
           className='text text-red-700 hover:bg-yellow-200'
          to= "/about">About</Link></li>
        <li className='px-5 py-5'><Link 
          className='text text-red-700 hover:bg-yellow-200'
        to ="/contact">Contact</Link></li>
         <li className='px-5 py-5'><Link 
          className='text text-red-700 hover:bg-yellow-200'
        to ="/signup">signup</Link></li>
      </ul>
    </nav>
    <div className='container mx-auto py-8'>
    <Routes>
      <Route 
      path='/' element= {<Home/>}/>
      <Route path="/about" element ={ <About/>}> 
      <Route path='team' element={<Team/>}/>
      </Route>
      <Route path="/contact" element ={<Contact/>}/>
      <Route path="/signup" element ={<Signup/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </div>
    </div>

  </Router>
      
  </div>

 
  
  )
}

export default App
