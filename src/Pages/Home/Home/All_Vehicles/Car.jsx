import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Car = ({ car }) => {
    const { make, model, price, image } = car;
    return (
        <div className="border-2 p-2 flex flex-col gap-5">
            <img src={image} alt="" />
            <div className="flex-grow">
                <p className="font-bold">{make}</p>
                <p className="text-2xl font-bold">{model}</p>
                <p className="font-bold">$ {price}</p>
            </div>
            <FaArrowRight className="cursor-pointer font-bold text-4xl rounded-full p-2 bg-black text-white  " />
        </div>
    );
};

export default Car;
