import React, { useState } from "react";
import { useForm } from "react-hook-form";

const CheckInformation = ({ information, users, setUsers }) => {
  const {
    register,
    formState: { errors },
 
  } = useForm();
  const {
    _id,
    displayName,
    email,
    contact,
    address,
    img,
    gender,
    amount,
    accountType,
    accountNumber,
  } = information;

  const approved = (id, { information }) => {

    fetch('http://localhost:4000/approvedUser', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(information)

    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })


    // delete task 

    

    const url = `http://localhost:4000/users/${id}`;

    fetch(url, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {

          const remaining = users.filter(user => user._id !== id)
          setUsers(remaining);

        }
      })


  }


  return (
    <>
      <input type="checkbox" id="check-information" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            htmlFor="check-information"
            className="absolute btn btn-sm btn-circle right-2 top-2"
          >
            ✕
          </label>

          <div class="overflow-x-auto mt-10">
            <div class="avatar mx-auto justify-center items-center flex gap-4">
              <div class="w-65">
                <img src={img} alt="" />
              </div>
              <div class="w-65">
                <img src={img} alt="" />
              </div>
            </div>
            <table class="table w-full my-10">
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>{displayName}</td>
                </tr>

                <tr class="active">
                  <td>Email</td>
                  <td>{email}</td>
                </tr>

                <tr>
                  <td>Phone</td>
                  <td>{contact}</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>{address}</td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>{gender}</td>
                </tr>
                <tr>
                  <td>Account Type</td>
                  <td>{accountType}</td>
                </tr>
                <tr>
                  <td>Deposit Amount</td>
                  <td>{amount}</td>
                </tr>
                <tr>
                  <td>Amount Number</td>
                  <td>
                  <input
                    type="number"
                    placeholder="   Account Number"
                    
                    {...register("accountNumber", {
                      required: {
                        value: true,
                        message: "*Enter Account Number",
                      },
                    })}
                  />
                  <label className="pt-0 label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-error">
                        {errors.accountNumber.message}
                      </span>
                    )}
                  </label>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>

          <div class="modal-action">
            <label onClick={() => approved(_id, { information })} for="check-information" class="btn btn-active btn-accent">
              Approved
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckInformation;
