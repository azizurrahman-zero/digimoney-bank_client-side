import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserInformation = () => {
  const [userInfo, setUserInfo] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const url = `http://localhost:4000/approvedUser/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [id]);
  return (
    <>
      <div class="hero main-h-screen bg-base-100">
        <div>
          <div class="hero-content flex-col lg:flex-row">
            <img src={userInfo.img} className="lg:w-96 sm:w-72" alt="" />

            <div>
              <table class="table">
                <tbody>
                  <tr>
                    <td class="active">Account Number</td>
                    <td>{userInfo.accountNumber}</td>
                  </tr>
                  <tr>
                    <td>Name</td>
                    <td>{userInfo.displayName}</td>
                  </tr>

                  <tr>
                    <td>Email</td>
                    <td>{userInfo.email}</td>
                  </tr>

                  <tr>
                    <td>Phone</td>
                    <td>{userInfo.contact}</td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td>{userInfo.address}</td>
                  </tr>
                  <tr>
                    <td>Gender</td>
                    <td>{userInfo.gender}</td>
                  </tr>
                  <tr>
                    <td>Account Type</td>
                    <td>{userInfo.accountType}</td>
                  </tr>
                  <tr>
                    <td>Deposit Amount</td>
                    <td>{userInfo.amount}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 my-10 mx-7 lg:grid-cols-4">
            
            <button class="btn btn-outline btn-secondary  sm:btn-sm md:btn-md lg:btn-md"> Withdraw</button>
            <button class="btn btn-outline btn-primary sm:btn-sm md:btn-md lg:btn-md"> Fund Transfer</button>
            <button class="btn btn-outline  btn-accent sm:btn-sm md:btn-md lg:btn-md"> Deposit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInformation;
