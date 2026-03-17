import axios from "axios"
import img from "../assets/images.jpg"
import { useState } from "react"
import { Link } from "react-router-dom"

export const Products = () => {
    const [products, setProducts] = useState([])

    async function getProducts() {
        const res = await axios.get("https://dummyjson.com/products")
        //    console.log(res.data.products)
        setProducts(res.data.products)
        console.log(products)

    }

    getProducts()




    return (
        <>
            <div className="row">
                {
                    products.map((item) => {
                        return (
                        <div className="col-3">
                            <div className="card">
                                {/* <img src={img} className="card-img-top" alt="" /> */}
                                <img src={item.thumbnail} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <button className="btn btn-warning">
                                        <Link to={`/products/${item.id}`}>Show Single Product</Link>
                                    </button>
                                </div>
                            </div>
                        </div>

                        )
                    })
                }

            </div>
        </>
    )
}