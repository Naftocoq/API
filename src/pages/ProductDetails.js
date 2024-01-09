import axios from "axios"
import React, { useEffect, useState } from "react"
import { Button, Card } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"

const ProductDetails = () => {
  const navigate = useNavigate()

  const [product, setProduct] = useState({})
  const { id } = useParams()


  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      const foundProduct = res.data.find((el) => el.id === Number(id))
      setProduct(foundProduct)
    })
  }, [id])


  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title} </Card.Title>
          <Card.Text>{product.price}</Card.Text>
          <Card.Text>{product.description}</Card.Text>

          <Button variant="primary" onClick={() => navigate(-1)}>
            Back
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProductDetails

// const ProductDetails = () => {
//       const navigate = useNavigate()

//       const [products, setProducts] = useState([])
//       const {id} = useParams()

//       useEffect(() => {
//         axios
//           .get("https://fakestoreapi.com/products")
//           .then((res) => setProducts(res.data))
//           .catch((err) => console.log(err))
//       }, [])
//       console.log(products)

//   return (
//     <div>
//       {products
//         .filter((el) => el.id === Number (id))
//         .map((product) =>
//           <Card style={{ width: "18rem" }}>
//             <Card.Img variant="top" src={product.image} />
//             <Card.Body>
//               <Card.Title>{product.title} </Card.Title>
//               <Card.Text>{product.price}</Card.Text>
//               <Card.Text>{product.description}</Card.Text>

//               <Button variant="primary" onClick={() => navigate(-1)}>
//                 Back
//               </Button>
//             </Card.Body>
//           </Card>
//         )}
//     </div>
//   )
// }

// export default ProductDetails
