import { Link } from "react-router-dom"

const Home = () => {

return(

<div>

{/* HERO SECTION */}

<div style={{
background:"#1976d2",
color:"white",
padding:"80px 20px",
textAlign:"center"
}}>

<h1>Find Scholarships For Your Education</h1>

<p>Discover scholarships that match your profile</p>

<br/>

<Link to="/scholarships">

<button style={{
padding:"12px 25px",
background:"white",
color:"#1976d2",
border:"none",
fontSize:"16px",
cursor:"pointer",
borderRadius:"5px"
}}>

Browse Scholarships

</button>

</Link>

</div>


{/* STATISTICS SECTION */}

<div style={{
padding:"50px",
display:"flex",
justifyContent:"space-around",
textAlign:"center",
background:"#f4f6f9",
flexWrap:"wrap"
}}>

<div>
<h2>500+</h2>
<p>Scholarships</p>
</div>

<div>
<h2>200+</h2>
<p>Providers</p>
</div>

<div>
<h2>1M+</h2>
<p>Students Helped</p>
</div>

<div>
<h2>₹10Cr+</h2>
<p>Total Funding</p>
</div>

</div>


{/* FEATURES SECTION */}

<div style={{padding:"60px",textAlign:"center"}}>

<h2>Why Use Our Platform?</h2>

<br/>

<div style={{
display:"flex",
justifyContent:"space-around",
flexWrap:"wrap"
}}>

<div style={{width:"250px"}}>
<h3>Easy Search</h3>
<p>Find scholarships that match your course and interests.</p>
</div>

<div style={{width:"250px"}}>
<h3>Verified Providers</h3>
<p>All scholarships are verified and trusted.</p>
</div>

<div style={{width:"250px"}}>
<h3>Quick Application</h3>
<p>Apply for scholarships easily in just a few steps.</p>
</div>

</div>

</div>


{/* SCHOLARSHIP CATEGORIES */}

<div style={{padding:"50px",textAlign:"center"}}>

<h2>Scholarship Categories</h2>

<br/>

<div style={{
display:"flex",
justifyContent:"space-around",
flexWrap:"wrap"
}}>

<div style={{
border:"1px solid #ddd",
padding:"20px",
width:"200px",
borderRadius:"8px"
}}>

<h3>Government</h3>
<p>Scholarships offered by government organizations.</p>

</div>

<div style={{
border:"1px solid #ddd",
padding:"20px",
width:"200px",
borderRadius:"8px"
}}>

<h3>Private</h3>
<p>Scholarships provided by private companies.</p>

</div>

<div style={{
border:"1px solid #ddd",
padding:"20px",
width:"200px",
borderRadius:"8px"
}}>

<h3>Merit Based</h3>
<p>Scholarships based on academic performance.</p>

</div>

<div style={{
border:"1px solid #ddd",
padding:"20px",
width:"200px",
borderRadius:"8px"
}}>

<h3>International</h3>
<p>Scholarships for studying abroad.</p>

</div>

</div>

</div>

</div>

)

}

export default Home