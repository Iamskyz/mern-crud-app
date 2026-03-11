import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Users = () => {

const [users,setUsers] = useState([]);

//fetch all users
const fetchUsers = async ()=>{
 const res = await axios.get("/api");
 setUsers(res.data);
};

useEffect(()=>{
 fetchUsers();
},[]);


const deleteUser = async(id)=>{
 await axios.delete(`/api/${id}`);
 fetchUsers();
}

return (
<div className="flex justify-center mt-20">

<div className="bg-white shadow-lg p-6 rounded w-[700px]">

<Link to="/add">
<button className="bg-green-600 text-white px-4 py-2 rounded mb-4">
Add +
</button>
</Link>

<table className="w-full">

<thead>
<tr className="border-b">
<th>Name</th>
<th>Email</th>
<th>Age</th>
<th>Action</th>
</tr>
</thead>

<tbody>

{users.map((user)=>(
<tr key={user._id} className="text-center border-b">

<td>{user.name}</td>
<td>{user.email}</td>
<td>{user.age}</td>

<td className="space-x-2">

<Link to={`/update/${user._id}`}>
<button className="bg-green-600 text-white px-3 py-1 rounded">
Update
</button>
</Link>

<button
onClick={()=>deleteUser(user._id)}
className="bg-red-500 text-white px-3 py-1 rounded"
>
Delete
</button>

</td>

</tr>
))}

</tbody>

</table>

</div>

</div>
);
};

export default Users;