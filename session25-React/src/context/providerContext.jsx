import { useState } from "react";
import { DataContext } from "./DataContext";



export function ProviderContext({children}){
    const [token , setToken] = useState(localStorage.getItem('token'))
    const [userName , setUserName] = useState(null)

    return <>
        <DataContext.Provider value={{token , setToken ,userName ,setUserName}}>
                {children}
        </DataContext.Provider>
    
    </>
}