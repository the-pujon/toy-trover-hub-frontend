import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PreviewImages from "../../../../Components/PreviewImages/PreviewImages";
import { FaStar } from "react-icons/fa";
import QuantityUpdate from "../../../../Components/QuantityUpdate/QuantityUpdate";

const SingleToy = () => {
  const id = useParams().id;

  const [toyDetails, setToyDetails] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:5000/api/toys/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setToyDetails(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div className="wrapper min-h-screen pt-[8rem]">
        <div className="flex">
          <div className="flex-1">
            <PreviewImages PreviewImages={toyDetails.toyImage} />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-secondary/50">{id}</p>
            <h1 className="text-5xl font-bold text-secondary">
              {toyDetails.name}
            </h1>
            <p className="text-secondary text-sm italic">
              This project sells by {toyDetails.sellerName}
            </p>

            <p className="flex items-center gap-2 text-secondary">
              <FaStar /> 4.6 (100 reviews)
            </p>
            <p className="text-secondary">About: {toyDetails.description}</p>

            <p>
              <QuantityUpdate setQuantity={setQuantity} quantity={quantity} />
            </p>
            <button className="py-2 px-4 toyButton mt-4 w-fit flex items-center justify-center">
              Add to order
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
