import { useState, useEffect } from "react"
import ScholarshipCard from "../components/ScholarshipCard"
import axios from "axios"

const Scholarships = () => {

const [scholarships,setScholarships] = useState([])
const [search,setSearch] = useState("")

// Fetch scholarships from backend
useEffect(()=>{

const fetchScholarships = async ()=>{

try{

const res = await axios.get("http://localhost:5000/api/scholarships")

setScholarships(res.data)

}catch(error){

console.log(error)

}

}

fetchScholarships()

},[])

const filteredScholarships = scholarships.filter((sch)=>
sch.title?.toLowerCase().includes(search.toLowerCase())
)

return(

<div style={{padding:"40px"}}>

<h1>Find Scholarships</h1>

<input
type="text"
placeholder="Search scholarships..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
style={{
padding:"10px",
width:"300px",
marginBottom:"20px"
}}
/>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
gap:"20px"
}}>

{filteredScholarships.length > 0 ? (

filteredScholarships.map((sch)=>(
<ScholarshipCard key={sch._id} sch={sch}/>
))

) : (

<p>No scholarships found.</p>

)}

</div>

</div>

)

}

export default Scholarships