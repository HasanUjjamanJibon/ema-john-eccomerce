import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faTrash } from "@fortawesome/free-solid-svg-icons";

const CartSummary = ({ cart, setCart }) => {
  let totalPrice = 0;
  let totalShippingCharge = 0;
  let tax = 0;
  let grandTotal = 0;

  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShippingCharge = totalShippingCharge + product.shipping;
    tax = (totalPrice * 7) / 100;
    grandTotal = totalPrice + totalShippingCharge + tax;
    swal("Successfully", "Data Added", "success");
  }

  const clearReset = () => {
    setCart([]);
    swal("Successful", "Clear Data", "success");
  };

  return (
    <>
      <div className="my-10 px-6">
        <p className="font-semibold mb-4 text-md capitalize">
          selected Items : {cart.length}
        </p>
        <p className="font-semibold mb-4 text-md capitalize">
          total price : ${totalPrice}
        </p>
        <p className="font-semibold mb-4 text-md capitalize">
          total shipping charge : ${totalShippingCharge}
        </p>
        <p className="font-semibold mb-4 text-md capitalize">
          Tax : ${tax.toFixed(2)}
        </p>
        <p className="font-bold text-xl capitalize">
          grand total : ${grandTotal.toFixed(2)}
        </p>
      </div>

      {/* cart summary */}
      <div className="px-6 text-center">
        {/* clear all data button */}

        <button
          onClick={clearReset}
          className="btn btn-error block capitalize w-full mb-5"
        >
          <span className="mr-4">clear all</span>
          <FontAwesomeIcon icon={faTrash} />
        </button>

        {/* review order button */}
        <button className="btn btn-warning block capitalize w-full">
          <span className="mr-4">review order</span>

          <FontAwesomeIcon icon={faArrowRightLong} />
        </button>
      </div>
    </>
  );
};

export default CartSummary;
