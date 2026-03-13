import { Link } from "react-router-dom"

const ScholarshipCard = ({sch}) => {

return(

<div style={{
border:"1px solid #ddd",
padding:"20px",
borderRadius:"10px",
background:"white",
boxShadow:"0px 2px 5px rgba(0,0,0,0.1)"
}}>

<img
src={sch.image}
alt="logo"
style={{width:"50px",marginBottom:"10px"}}
/>

<h3>{sch.title}</h3>

<p><b>Provider:</b> {sch.provider}</p>

<p><b>Category:</b> {sch.category}</p>

<p><b>Amount:</b> ₹{sch.amount}</p>

<p><b>Deadline:</b> {sch.deadline}</p>

<Link to={`/details/${sch.id}`}>

<button style={{
padding:"8px 15px",
background:"#1976d2",
color:"white",
border:"none",
borderRadius:"5px",
cursor:"pointer"
}}>

View Details

</button>

</Link>

</div>

)

}

export default ScholarshipCard