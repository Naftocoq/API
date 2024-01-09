import React, { useEffect, useState } from "react"
import { Button, Card } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

const UserDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [user, setUser] = useState({})

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    //   .then((res) => console.log(res.data) )

      .then((res) => setUser(res.data))

      
        }, [id])

  return (
    <div>
      <div style={{display: 'flex', justifyContent:'center', margin:'15px'}}>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          />
          <Card.Body>
            <Card.Title>
              <b>Name : </b> {user.name}
            </Card.Title>
            <Card.Text>
              <b>Email : </b> {user.email}
            </Card.Text>
            <Card.Text>
              <b>Phone : </b> {user.phone}
            </Card.Text>
            <Card.Text>
              <b>Website : </b>
              {user.website}
            </Card.Text>

              <Card.Text>
                <b>Adress : </b>
                {user.address?.street}, {user.address?.suite}, {user.address?.city}
                , {user.address?.zipcode}
              </Card.Text>
            

              <Card.Text>
                <b>Company : </b>
                {user.company?.name}, {user.company?.catchPhrase}, {user.company?.bs}
              </Card.Text>
        

            <Button variant="primary" onClick={() => navigate(-1)}>
              Back
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default UserDetails
