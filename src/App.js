import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RouteLayout from './Ui/RouteLayout'
import Home from './Features/Home'
import Notice from './Features/Notice'
import Syllabus from './Features/Syllabus'
import AboutUs from './Features/AboutUs'
import AdmissionForm from './Features/AdmissionForm'
import Plant from './Components/Plant'
import Dit from './Components/Dit'
import Administrative from './Components/Administrative'
import Instructor from './Components/Instructor'
import Animal from './Components/Animal'

const router = createBrowserRouter([{
  path:'/',
  element:<RouteLayout/>,
  children:[
    {index:true, element:<Home/>},
    {path:'home',element:<Home/>},
    {path:'programs/animal',element:<Animal/>},
    {path:'programs/plant',element:<Plant/>},
   {path:'programs/Dit',element:<Dit/>},
   {path:'staffdetails/administrative',element:<Administrative/>},
    {path:'staffdetails/instructor',element:<Instructor/>},
    {path:'notice', element:<Notice/>},
    {path:'syllabus',element:<Syllabus/>},
    {path:'admissionform',element:<AdmissionForm/>},
    {path:'aboutUs', element:<AboutUs/>}
    
    
   

  ]
}])
const App = () => {
  return (
    <div>
    <RouterProvider router = {router}/>
    </div>
  )
}

export default App
