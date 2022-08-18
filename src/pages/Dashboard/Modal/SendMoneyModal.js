import React from 'react';

const SendMoneyModal = () => {
    return (
        <div>
           

<input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Are you sure to transfer money ?</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
      <button  class="btn btn-sm bg-green-800 hover:bg-green-900 border-none text-white">Confirm</button>
      <label for="my-modal-6" class="btn bg-red-600 text-white hover:bg-red-900 btn-sm">Close</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default SendMoneyModal;