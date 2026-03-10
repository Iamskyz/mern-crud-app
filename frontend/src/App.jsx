import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Users from './components/Users'
import AddUsers from './components/AddUsers'
import UpdateUsers from './components/UpdateUsers'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/add' element={<AddUsers />} />
        <Route path='/update/:id' element={<UpdateUsers />} />
      </Routes>
    </div>
  )
}

export default App