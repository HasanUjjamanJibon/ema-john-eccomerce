import React, { useEffect, useState } from "react";
import CartSummary from "./CartSummary";
import ProductCard from "./ProductCard";

const Product = () => {
  const [products, setsetProduct] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setsetProduct(data.slice(0, 3)));
  }, []);

  return (
    <div className="my-16">
      <h2 className="text-3xl text-black font-semibold capitalize text-center ">
        Product Zone
      </h2>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-3 px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-20">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="col-span-1 bg-[#ECEFF1] hidden lg:block  my-20 ">
          <h2 className="text-center text-xl font-bold capitalize py-4 border-b-2 bg-[#e0eaf1] ">
            cart summary
          </h2>
          <CartSummary></CartSummary>
        </div>
      </div>
    </div>
  );
};

export default Product;
