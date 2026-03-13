import { useParams } from "react-router-dom"
import { useState } from "react"

const Apply = () => {

const { id } = useParams()

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [college,setCollege] = useState("")

const submitApplication = () => {

alert("Application Submitted Successfully")

}

return(

<div style={{padding:"30px"}}>

<h2>Apply for Scholarship</h2>

<p>Scholarship ID: {id}</p>

<br/>

<input
placeholder="Enter Name"
onChange={(e)=>setName(e.target.value)}
/>

<br/><br/>

<input
placeholder="Enter Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<br/><br/>

<input
placeholder="Enter College"
onChange={(e)=>setCollege(e.target.value)}
/>

<br/><br/>

<button onClick={submitApplication}>
Submit Application
</button>

</div>

)

}

export default Apply