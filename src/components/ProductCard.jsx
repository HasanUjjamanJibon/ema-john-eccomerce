import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faStar } from "@fortawesome/free-solid-svg-icons";

const ProductCard = (props) => {
  const { category, name, seller, price, ratings, img } = props.product;
  const handleAddToCart = props.handleAddToCart;

  return (
    <div className="card w-full shadow-md flex-col justify-between rounded-lg hover:shadow-2xl cursor-pointer">
      {/* card image */}
      <div className="rounded-lg">
        <img
          src={img}
          className="h-60 image-full w-full object-cover object-center "
        />
      </div>

      {/* card body */}
      <div className="px-4 my-5">
        <h3 className=" text-md font-bold text-gray-700">{name}</h3>
        <p className=" text-lg font-medium text-gray-900">Price : ${price}</p>
        <p className="mt-4">Manufacturer : {seller}</p>
        <div className="flex justify-between items-center">
          <span>
            Rating : {ratings} <FontAwesomeIcon icon={faStar} size="sm" />
          </span>
          <span>Catagory : {category}</span>
        </div>
      </div>

      {/* card footer-add to cart button */}
      <div
        onClick={() => handleAddToCart(props.product)}
        className=" text-center border-t-2 p-5 bg-[#ECEFF1] "
      >
        <a>
          <span className="text-md font-semibold capitalize mr-2">
            add to cart
          </span>
          <FontAwesomeIcon icon={faCartPlus} size="lg" />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
