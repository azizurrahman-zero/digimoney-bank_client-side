import { useState } from "react"

const transectionData=[
    {id:1,name:"Kuddus",status:"pending",amount:2000,data:"25 jan ,2021",time:"4:32.45am"},
    {id:2,name:"Kuddus",status:"Completed",amount:5000,data:"5 jan ,2021",time:"4:32.45am"},
    {id:3,name:"Kuddus",status:"pending",amount:8000,data:"12 jan ,2021",time:"4:32.45am"},
    {id:4,name:"Kuddus",status:"Cancel",amount:2000,data:"15 jan ,2021",time:"4:32.45am"},
    {id:5,name:"Kuddus",status:"pending",amount:1500,data:"21 jan ,2021",time:"4:32.45am"},
    {id:6,name:"Kuddus",status:"Completed",amount:1500,data:"21 jan ,2021",time:"4:32.45am"},
    {id:7,name:"Kuddus",status:"pending",amount:1500,data:"21 jan ,2021",time:"4:32.45am"},
    {id:8,name:"Kuddus",status:"pending",amount:1500,data:"21 jan ,2021",time:"4:32.45am"},
    {id:9,name:"Kuddus",status:"pending",amount:1500,data:"21 jan ,2021",time:"4:32.45am"},
    {id:10,name:"Kuddus",status:"pending",amount:1500,data:"21 jan ,2021",time:"4:32.45am"},
]
const useTransection=()=>{
    const [transection,setTransection]=useState(transectionData)
    return [transection]

}
export default useTransection;