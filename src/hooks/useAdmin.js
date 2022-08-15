import { useEffect } from "react"
import { useState } from "react"

const useAdmin=(user)=>{
    const [admin,setAdmin]=useState(false)
    const [loadingAdmin,setLoadingAdmin]=useState(true)
    console.log(user,"this is user from hook ")
    useEffect(()=>{
         const email=user?.email
         console.log(email,"email from hook page ")
         if(email){
            fetch(`http://localhost:4000/admin?email=${email}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data,"from then  ")
                setAdmin(data.admin)
                setLoadingAdmin(false)
            })
         }
    },[user])
     
     return {admin,loadingAdmin}

}
export default useAdmin