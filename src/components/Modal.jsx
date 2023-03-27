import React from "react";

const Modal = () => {
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="bg-[#ECEFF1] lg:block h-fit pb-5">
            <h2 className="text-center text-xl font-bold capitalize py-4 border-b-2 bg-[#e0eaf1] ">
              cart summary
            </h2>
            <div className="my-10 px-6">
              <p className="font-semibold mb-4 text-md capitalize">
                selected Items :
              </p>
              <p className="font-semibold mb-4 text-md capitalize">
                total price : $
              </p>
              <p className="font-semibold mb-4 text-md capitalize">
                total shipping charge : $
              </p>
              <p className="font-semibold mb-4 text-md capitalize">Tax : $</p>
              <p className="font-bold text-xl capitalize">grand total : $</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
