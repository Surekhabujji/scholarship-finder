import { useState } from "react"

const Signup = () => {

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleSignup = (e) => {

e.preventDefault()

console.log("Name:", name)
console.log("Email:", email)
console.log("Password:", password)

}

return(

<div style={{padding:"40px"}}>

<h2>Student Signup</h2>

<form onSubmit={handleSignup}>

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
type="password"
placeholder="Enter Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<br/><br/>

<button type="submit">Signup</button>

</form>

</div>

)

}

export default Signup