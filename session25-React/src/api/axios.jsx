import axios from "axios";

export const api = axios.create({
    baseURL :"https://erp.techsexperts.cloud/api/admins/"
})
export const apiDummy = axios.create({
    baseURL : "https://dummyjson.com/"
})

apiDummy.interceptors.request.use((req)=>{
    const token = localStorage.getItem('token')
    if(token){
        req.headers.Authorization = `Bearer ${token}`
    }
    return req
})

// export default api