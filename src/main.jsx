import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './componets/Home.jsx'
import About from './componets/About.jsx'
import Contact from './componets/Contact.jsx'
import User from './componets/User.jsx'
import Github from './componets/Github.jsx'

// const router = createBrowserRouter([
//   { path:"/", element: <Layout/>,
//     children: [{
//       path:"", element: <Home/>

//     },{
//       path:"/about",element: <About/>
//     },{
//       path:"/contact", element: <Contact/>
//     }]

// }
// ])

// 2nd way of doing it + Much better
const router= createBrowserRouter(
   createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='github' element={<Github/>}/>
        <Route path='user/:userid' element={<User/>}/>


    </Route>
   )

)
 



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
