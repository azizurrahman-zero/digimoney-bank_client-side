import React from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const AllUser = ({ user, users, index,refetch }) => {
  const { email, role, _id } = user;
  const makeAdmin = () => {
    fetch(`https://tranquil-lake-95777.herokuapp.com/approvedUser/admin/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch()
          toast.success(`Successfully made an admin`, {
            position: "top-center",
          });
        }
      });
  };

  // delete user
  const handleDelete = (id) => {
    confirmAlert({
      message: "Are you sure you want to delete?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            // send updated data to server
            const url = `https://tranquil-lake-95777.herokuapp.com/approvedUser/${id}`;
            fetch(url, {
            method: "DELETE",
            })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
              refetch()
              toast.success("Removed user successfully")
            }
            });
          },
        },
        {
          label: "No",
          onClick: () => {
            return;
          },
        },
      ],
    });
  };
 
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-16 rounded-full">
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
