import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"

export const SingleProduct = ()=>{
  const params =   useParams()
  const [ product , setProduct] = useState({})
  console.log(params)
//   let id = params.productId

  async function  getSingleProduct() {
        const res = await axios.get(`https://dummyjson.com/products/${params.productId}`)
        console.log(res)
        setProduct(res.data)
  }

  getSingleProduct()
    return (
        <>
            <h2>{product.title}</h2>
        </>
    )
}