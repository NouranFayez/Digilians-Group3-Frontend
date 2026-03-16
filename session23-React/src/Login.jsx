import { useForm } from "react-hook-form"

export const Login =()=>{
    const {register , handleSubmit , formState:{errors}} = useForm()
    console.log(useForm())


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

    console.log({...obj})

    function sendData (data){
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(sendData)} className="row gy-3 mt-3">
            <div className="col-6">
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
            </div>
            <div className="col-12">
                <button className="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}