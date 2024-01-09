import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {
      const navigate = useNavigate()

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "15px" }}
      >
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.img} />
          <Card.Body>
            <Card.Title>{product.title} </Card.Title>
            <Card.Text>{product.price}</Card.Text>

            <Button
              variant="primary"
              onClick={() => navigate(`/products/${product.id}`)}
            >
              Now more
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default ProductCard