import React from "react"
import { Button, Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const UserCard = ({ user }) => {
  const navigate = useNavigate()
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "15px" }}
      >
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          />
          <Card.Body>
            <Card.Title>{user.name} </Card.Title>
            <Card.Text>{user.email}</Card.Text>
            <Card.Text>{user.phone}</Card.Text>

            <Button
              variant="primary"
              onClick={() => navigate(`/users/${user.id}`)}
            >
              Profile
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default UserCard
