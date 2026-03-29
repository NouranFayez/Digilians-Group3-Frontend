import axios from "axios"
import img from "../assets/images.jpg"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { apiDummy } from "../api/axios"

export const Products = () => {
    const [products, setProducts] = useState([])

    async function getProducts() {
        const res = await apiDummy.get("products")
        //    console.log(res.data.products)
        setProducts(res.data.products)
        console.log(products)

    }

    useEffect(()=>{
        getProducts()
    } , [])





    return (
        <>
            <div className="row">
                {
                    products.map((item) => {
                        return (
                        <div key={item.id} className="col-3">
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