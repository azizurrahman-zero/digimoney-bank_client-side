import React from "react";

const CheckInformation = ({ information }) => {
  const {
    displayName,
    email,
    contact,
    address,
    img,
    gender,
    amount,
    accountType,
  } = information;
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
                    <input type="number" name="" id="" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="modal-action">
            <label for="check-information" class="btn btn-active btn-accent">
              Approved
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckInformation;
