import React from "react";

const CartSummary = () => {
  return (
    <>
      <div className="my-10 px-6">
        <p className="font-semibold mb-4 text-md capitalize">
          selected Items :
        </p>
        <p className="font-semibold mb-4 text-md capitalize">total price : $</p>
        <p className="font-semibold mb-4 text-md capitalize">
          total shipping charge : $
        </p>
        <p className="font-semibold mb-4 text-md capitalize">Tax : $</p>
        <p className="font-bold text-xl capitalize">grand total : $</p>
      </div>
    </>
  );
};

export default CartSummary;
