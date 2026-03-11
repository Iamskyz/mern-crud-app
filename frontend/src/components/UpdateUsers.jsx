import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUsers = () => {

const { id } = useParams();
const navigate = useNavigate();

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [age,setAge] = useState("");


// GET USER DATA
useEffect(() => {

const fetchUser = async () => {
  try{

    const res = await axios.get(`/api`);

    const user = res.data.find((u)=> u._id === id);

    if(user){
      setName(user.name);
      setEmail(user.email);
      setAge(user.age);
    }

  }catch(error){
    console.log(error);
  }
};

fetchUser();

},[id]);



// UPDATE USER
const handleSubmit = async (e) => {

e.preventDefault();

try{

await axios.put(`http://localhost:5000/api/users/${id}`,{
  name,
  email,
  age
});

navigate("/");

}catch(error){
 console.log(error);
}

};

return (

<div className="flex justify-center mt-20">

<form
onSubmit={handleSubmit}
className="bg-white shadow-lg p-6 rounded w-[400px]"
>

<h2 className="text-xl font-bold mb-4">Update User</h2>

<input
className="border w-full p-2 mb-3"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
className="border w-full p-2 mb-3"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
className="border w-full p-2 mb-3"
value={age}
onChange={(e)=>setAge(e.target.value)}
/>

<button className="bg-blue-600 text-white px-4 py-2 rounded">
Update User
</button>

</form>

</div>

);

};

export default UpdateUsers;