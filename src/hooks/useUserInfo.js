import {useQuery} from "@tanstack/react-query"
import { signOut } from "firebase/auth"
import { toast } from "react-toastify"
import auth from "../firebase.init"

const useUserInfo=(user)=>{
  
    const url=`https://tranquil-lake-95777.herokuapp.com/finduser?email=${user?.email}`
    const {data:userInfo,isLoading,refetch}=useQuery([`singleuserdata${user?.email}`],()=>fetch(url,{
        method:"GET",
        headers:{
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }

    }).then(res=>{
       if(res.status===401 || res.status===403){
        signOut(auth)
        localStorage.removeItem('accessToken')
        toast.error('Forbidden access')
        return
       } 
      return  res.json()
    
    }))

   

    return {userInfo,isLoading,refetch}
}


export default useUserInfo;