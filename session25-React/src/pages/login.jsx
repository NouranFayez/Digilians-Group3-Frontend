import axios from "axios"
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import {api} from "../api/axios"
import { DataContext } from "../context/DataContext"

export const Login =()=>{
    const {register , handleSubmit , formState:{errors}} = useForm()
    const [error , setError] = useState(null)
    const navigate = useNavigate()

    const {token , setToken, userName , setUserName} = useContext(DataContext)
    // console.log(useForm())


    // errors :{
    //     userEmail :{
    //         message : "email is required"
    //     }
    // }

    let obj = {
        type : "text" , 
        className : "form-control"
    }
    // console.log(obj.type)
    // console.log(obj.className)

    // console.log({...obj})

   async function sendData (data){
    localStorage.setItem('token' , "dfghjkljhgfd")
    localStorage.setItem('userName' , "Nouran")
    setToken(localStorage.getItem('token'))
    setUserName("Nouran")
    try{
        const response = await api.post("login" , data)
        console.log(response)
        localStorage.setItem('token' , response.data.data.accessToken)
        navigate("/products")
    }
    catch(err){
        console.log(err.response.data.message)
        setError(err.response.data.message)
    }
    }

    // https://erp.techsexperts.cloud/api/admins/login 
    // body : { "phone": "01234567899","password": "123456",}
    return (
        <>
        {
            error &&  <div className="alert alert-danger"> <p className="mb-0">{error}</p> </div>
        }
        <form onSubmit={handleSubmit(sendData)} className="row gy-3 mt-3">
            {/* <div className="col-6">
                <input type="text" className="form-control" placeholder="enter your name"
                {...register('userName' , {
                    required : "name is required",
                    maxLength :{
                        value: 10 ,
                        message : "max length is 10"
                    }
                })} />

                {
                    errors.userName && <p>{errors.userName?.message}</p> 
                }
           
            </div>
             <div className="col-6">
                <input {...obj} {...register("userEmail" ,
                     {required : "email is required" , 
                     pattern :{
                        value : /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message : "Invalid Email"
                     },
                     minLength :{
                        value:3 ,
                        message:"min 3 character"
                     }
                     })} placeholder="enter your Email" />
                <p className="text-danger">{errors.userEmail?.message}</p>
            </div> */}
            <div className="col-6">
                <input type="text" {...register("phone" , {required:"phone is required"})}
                 placeholder="enter your phone" className="form-control" />
                 {
                      errors.phone && <p className="text-danger">{errors.phone?.message}</p> 
                 }
            </div>
              <div className="col-6">
                <input type="text" {...register("password" , {required:"password is required"})}
                 placeholder="enter your phone" className="form-control" />
                 {
                      errors.password && <p className="text-danger">{errors.password?.message}</p> 
                 }
            </div>
            <div className="col-12">
                <button className="btn btn-primary">
                    Submit
                    {/* http://localhost:5173/products */}
                    {/* <Link to="/products">Submit</Link> */}
                </button>
            </div>
        </form>
        </>
    )
}