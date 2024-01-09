import axios from "axios"
import React, { useEffect, useState } from "react"
import UserCard from "../components/UserCard"

const UserList = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', margin:'25 px'}}>
      {users.map((user) => 
        <UserCard user={user} key={user.id} />
      )}
    </div>
  )
}

export default UserList
