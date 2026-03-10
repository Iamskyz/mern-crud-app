import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUsers = () => {

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [age,setAge] = useState("");

const navigate = useNavigate();

const handleSubmit = async(e)=>{
 e.preventDefault();

 await axios.post("http://localhost:5000/api/users/add",{
  name,email,age
 });

 navigate("/");
}

return (

<div className="flex justify-center mt-20">

<form
onSubmit={handleSubmit}
className="bg-white shadow-lg p-6 rounded w-[400px]"
>

<h2 className="text-xl font-bold mb-4">Add User</h2>

<input
className="border w-full p-2 mb-3"
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<input
className="border w-full p-2 mb-3"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
className="border w-full p-2 mb-3"
placeholder="Age"
onChange={(e)=>setAge(e.target.value)}
/>

<button className="bg-green-600 text-white px-4 py-2 rounded">
Add User
</button>

</form>

</div>

)
}

export default AddUsers