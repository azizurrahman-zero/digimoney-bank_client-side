import {useQuery} from "@tanstack/react-query"

const useUserInfo=(user)=>{
  
    const url=`https://tranquil-lake-95777.herokuapp.com/finduser?email=${user?.email}`
    const {data:userInfo,isLoading,refetch}=useQuery([`singleuserdata${user?.email}`],()=>fetch(url).then(res=>res.json()))

   

    return {userInfo,isLoading,refetch}
}


export default useUserInfo;