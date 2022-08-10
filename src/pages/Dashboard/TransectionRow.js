import React from 'react';
import {BsArrowUpRightCircleFill,BsArrowDownLeftCircleFill} from 'react-icons/bs'

const TransectionRow = ({rowdata}) => {
    return (
        <tr>
        <th>
            {
                rowdata.status==="Completed"?<BsArrowUpRightCircleFill className='h-8 w-8 text-[#00A389]' />:<BsArrowDownLeftCircleFill className='h-8 w-8 text-[#FF4A55]' />
            }
        </th>
        <td>
            <p className='text-md font-bold'>{rowdata.name}</p>
            <p className='text-xs text-gray-600'>Transfer</p>
            </td>
        <td className='font-bold text-md'>${rowdata.amount}</td>
        <td>
            <p className='font-bold text-md'>{rowdata.data}</p>
            <p className=' text-xs text-gray-600'>{rowdata.time}</p>
        </td>
        <td className={`font-bold ${rowdata.status==="Cancel"&&"text-[#FF4A55]"} ${rowdata.status==="pending"&&"text-gray-500"} ${rowdata.status==="Completed"&&"text-[#04A48B]"}`}>{rowdata.status}</td>
        <td className='font-bold text-xl cursor-pointer text-gray-600'>...</td>
      </tr>
    );
};

export default TransectionRow;