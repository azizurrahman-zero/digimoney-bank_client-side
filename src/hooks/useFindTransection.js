import { useEffect } from "react"
import { useState } from "react"

const useFindTransection=(userInfo)=>{
    const [pageCount,setPageCount]=useState(0)
    const url=`https://tranquil-lake-95777.herokuapp.com/transectionCount/${userInfo?.accountNumber}`
    useEffect(()=>{

        fetch(url)
        .then(res=>res.json())
        .then(data=>{
          
            const pageCount=data.count
            const pages=Math.ceil(pageCount/10)
            setPageCount(pages)
        })
    },[userInfo,url])


 return {pageCount,setPageCount}


}

export default useFindTransection