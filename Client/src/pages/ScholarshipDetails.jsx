import { useParams, Link } from "react-router-dom"

const ScholarshipDetails = () => {

const { id } = useParams()

return(

<div style={{padding:"40px"}}>

<h1>Scholarship Details</h1>

<p><b>Scholarship ID:</b> {id}</p>

<p>
This scholarship supports students in pursuing higher education.
Eligible students can apply before the deadline.
</p>

<br/>

<Link to={`/apply/${id}`}>
<button>Apply Now</button>
</Link>

</div>

)

}

export default ScholarshipDetails