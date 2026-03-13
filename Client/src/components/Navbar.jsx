import {Link} from "react-router-dom"

const Navbar = () => {

return(

<div className="navbar">

<h2 style={{color:"white"}}>Scholarship Portal</h2>

<div>

<Link to="/">Home</Link>
<Link to="/scholarships">Scholarships</Link>
<Link to="/login">Login</Link>
<Link to="/signup">Signup</Link>

</div>

</div>

)

}

export default Navbar