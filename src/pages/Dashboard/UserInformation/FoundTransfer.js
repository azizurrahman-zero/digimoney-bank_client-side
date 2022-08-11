import React from 'react';

const FoundTransfer = () => {
  return (
    <>
      <input type="checkbox" id="found-transfer" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            htmlFor="found-transfer"
            className="absolute btn btn-sm btn-circle right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <label for="found-transfer" class="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoundTransfer;