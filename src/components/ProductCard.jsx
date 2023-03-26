import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faStar } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ category, name, seller, price, ratings, img }) => {
  //   console.log(img);
  return (
    <div className=" card w-full bg-[#ECEFF1] shadow-xl flex-col justify-between">
      <div>
        <img src={img} className="h-full w-full object-cover object-center " />
      </div>
      <div className="px-4 mb-5">
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
      <div className=" text-center border-t-2 p-5 bg-orange-300">
        <a
          href="#
        "
        >
          <span className="text-xl font-semibold uppercase mr-2">
            add to cart
          </span>
          <FontAwesomeIcon icon={faCartPlus} size="lg" />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
