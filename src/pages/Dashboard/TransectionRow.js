import moment from 'moment';
import React from 'react';
import {BsArrowUpRightCircleFill,BsArrowDownLeftCircleFill} from 'react-icons/bs'

const TransectionRow = ({rowdata,userInfo}) => {
     let asiaDhaka = new Date(rowdata.data).toLocaleString([], { timeZone: "Asia/Dhaka" });

    let day=moment(asiaDhaka).format('ll');
    let time=  moment(asiaDhaka).format('LT');
     console.log(time,"robin")
    //  let month=asiaDhaka.toLocaleString('default', { month: 'long' });
// console.log(month);

 
//     let today = new Date(asiaDhaka);
//     let date=today.getDate()
//     let month=today.getMonth()
//    console.log(date,"dhaka")
    return (
        <tr>
        <th>
            {
                rowdata.staus==="complete"?<BsArrowUpRightCircleFill className='h-8 w-8 text-[#00A389]' />:<BsArrowDownLeftCircleFill className='h-8 w-8 text-[#FF4A55]' />
            }
        </th>
        <td>
            <p className='text-md font-bold'>{userInfo.displayName}</p>
            <p className='text-xs text-gray-600'>Transfer</p>
            </td>
        <td className='font-bold text-md'>${rowdata.amount}</td>
        <td>
            <p className='font-bold text-md'>{day} </p>
            <p className=' text-xs text-gray-600'>{time}</p>
        </td>
        <td className={`font-bold ${rowdata.status==="Cancel"&&"text-[#FF4A55]"} ${rowdata.status==="pending"&&"text-gray-500"} ${rowdata.staus==="complete"&&"text-[#04A48B]"}`}>{rowdata.staus}</td>
        <td className='font-bold text-xl cursor-pointer text-gray-600'>...</td>
      </tr>
    );
};

export default TransectionRow;