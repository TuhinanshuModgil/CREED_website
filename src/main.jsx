import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Hero from './components/Hero.jsx'
import AboutUs from './components/AboutUs.jsx'
import OurTeam from './components/OurTeam.jsx'
import FAQ from './components/FAQ.jsx'
import Services_2 from './components/Services_2.jsx'
import Contact from './components/Contact.jsx'
import Layout from './Layout.jsx'
import Project from './components/Project.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <div>
        <Hero/>
        <AboutUs/>
        <OurTeam/>
        <FAQ/>
        </div> 
      },
      {
        path: "services",
        element: <Services_2/>  
      },
      {
        path: "projects",
        element: <Project/>  
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
