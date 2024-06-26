import React from 'react';
import toast from 'react-hot-toast';

const SingleProduct = ({product}) => {

  const handlePayment = () => {
    toast.error("Sorry no implement payment method right now", {duration: 1000});
  };
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
              src={product?.image_url}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product?.title}</h2>
            <h2 className="text-lg text-green-600">Brand: {product?.brand}</h2>
            <p>Price:{product?.price}</p>
            <p>{product?.description.slice(0,100)}....</p>
            <div className="card-actions justify-end">
              <button onClick={handlePayment} className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
    );
};

export default SingleProduct;