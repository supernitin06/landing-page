import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Component/Home/Home.jsx'
import About from './Component/About/About.jsx'
import Contact from './Component/Contact/Contact.jsx'
import User from './Component/User/User.jsx'
import Github from './Component/Github/github.jsx'

const router = createBrowserRouter([
 { 
  path:'/',
  element : <Layout/>,
 children : [
  
  { path:"",
    element : <Home/>
    },
    
    { path:"about",
      element : <About/>
      },
    
    { path:"contact",
      element : <Contact/>
      },
    
    { path:"user/:userid",
      element : <User/>
      },
    { path:"github",
      element : <Github/>
      }
 ]
}
]
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}/>
  </React.StrictMode>,
)
