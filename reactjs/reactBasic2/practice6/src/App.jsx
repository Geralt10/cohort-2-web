import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import Men from './pages/Men'
import Women from './pages/Women'
import Random from './pages/Random'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import NotFound from './pages/NotFound'
const App = () => {
  return (
    <div>
     <div>
      <Navbar/>
    </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>

        <Route path='/products' element={<Products/>}/>
        <Route path='/products/men' element={<Men/>}/>
        <Route path='/products/women' element={<Women/>}/>
        
        <Route path='/about/:id' element={<Random/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/courses/:id/details' element={<CourseDetail/>}/>

        {/*404 not Found*/}
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
