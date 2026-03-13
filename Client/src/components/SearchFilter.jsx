const SearchFilter = ({search,setSearch,course,setCourse,amount,setAmount}) => {

return(

<div style={{marginBottom:"20px"}}>

<input
placeholder="Search scholarship..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

&nbsp;&nbsp;

<select value={course} onChange={(e)=>setCourse(e.target.value)}>

<option value="">All Courses</option>
<option value="Engineering">Engineering</option>
<option value="Medical">Medical</option>
<option value="MBA">MBA</option>

</select>

&nbsp;&nbsp;

<select value={category} onChange={(e)=>setCategory(e.target.value)}>

<option value="">All Categories</option>
<option value="Government">Government</option>
<option value="Private">Private</option>
<option value="Merit">Merit</option>

</select>

</div>

)

}

export default SearchFilter