import { useState } from "react"

const Login = () => {

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleLogin = (e) => {

e.preventDefault()

console.log("Email:", email)
console.log("Password:", password)

}

return(

<div style={{padding:"40px"}}>

<h2>Student Login</h2>

<form onSubmit={handleLogin}>

<input
type="email"
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

<button type="submit">Login</button>

</form>

</div>

)

}

export default Login