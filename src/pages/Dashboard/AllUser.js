import React from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const AllUser = ({ user, index }) => {
  const { email, role, _id} = user;
  const makeAdmin = () => {
   
    

    fetch(`http://localhost:4000/approvedUser/admin/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          
          toast.success(`Successfully made an admin`, {
            position: "top-center",
          });
        }
      });
      
  };
  
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-16 rounded-full">
            <img src={user.img} alt="" />
          </div>
        </div>
      </td>

      <td>{user.displayName}</td>
      <td>{user.email}</td>
      <td>{user.contact}</td>
      <td>
      <Link to={`/dashboard/information/${_id}`} className="btn btn-xs">
      Deities
          </Link>
        
      </td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-xs">
            Make Admin
          </button>
         
        )}
       {role === "admin" && <span className="text-success">Admin</span>}
       
      </td>
      <td>
        
        <button className="btn btn-xs">Remove</button>
      </td>

      {/* <td>
        <label
          htmlFor="check-information"
          onClick={() => setInformation(user)}
          className="mx-2 btn btn-xs btn-success"
        >
          Check
        </label>

        <button onClick={() => handleDelete(user._id)} class="btn btn-xs btn-error">Cancel</button>
      </td> */}
    </tr>
  );
};

export default AllUser;
