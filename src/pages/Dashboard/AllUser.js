import React from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const AllUser = ({ user, users, index, setUsers }) => {
  
  const { email, role, _id } = user;
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
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:4000/approvedUser/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = users.filter((user) => user._id !== _id);
            setUsers(remaining);
            console.log(remaining)
          }
          console.log(data)
        });
       
    }
    
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
        <Link
          to={`/dashboard/information/${_id}`}
          className="btn btn-outline btn-primary btn-xs "
        >
          Deities
        </Link>
      </td>
      <td>
        {role !== "admin" && (
          <button
            onClick={makeAdmin}
            className="btn btn-outline btn-accent btn-xs"
          >
            Make Admin
          </button>
        )}
        {role === "admin" && <span className="text-success">Admin</span>}
      </td>
      <td>
        <button
          onClick={() => handleDelete(user._id)}
          className="btn btn-outline btn-error btn-xs"
        >
          Remove
        </button>
      </td>

     
    </tr>
  );
};

export default AllUser;
