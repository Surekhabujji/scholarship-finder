import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Scholarships from "./pages/Scholarships"
import ScholarshipDetails from "./pages/ScholarshipDetails"
import Apply from "./pages/Apply"

import Login from "./auth/Login"
import Signup from "./auth/Signup"

const App = () => {

return(

<>

<Navbar/>

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/scholarships" element={<Scholarships/>}/>
<Route path="/details/:id" element={<ScholarshipDetails/>}/>
<Route path="/apply/:id" element={<Apply/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<Signup/>}/>

</Routes>

<Footer/>

</>

)

}

export default App