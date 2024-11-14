import headphone from "../assets/headphone.png";
import { useState } from "react";
const Main = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const incrementQuantity: () => void = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity: () => void = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1)); // Ensure quantity doesn't go below 1
  };
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      <div className="flex justify-center md:justify-between">
        <div className="border-2 border-black font-sans  rounded-lg max-w-[400px] ">
          <img src={headphone} alt="image of headphone" />
          <h2 className="p-3 text-2xl font-bold ">Wave Pro Earbuds</h2>
          <div className="flex justify-center items-center">
            <span className="mr-3 text-lg">Quantity:</span>
            <ul className="flex justify-center gap-3 p-2">
              <li
                className="border-orange-200 w-7 text-xl font-mono font-bold bg-blue-400 rounded-lg cursor-pointer hover:bg-blue-700 text-cyan-50 transition-transform duration-300 transform hover:scale-110"
                onClick={decrementQuantity}
              >
                -
              </li>
              <li>{quantity}</li>
              <li
                className="border-orange-200 w-7 text-xl font-mono font-bold bg-blue-400 rounded-lg cursor-pointer hover:bg-blue-700 text-cyan-50 transition-transform duration-300 transform hover:scale-110"
                onClick={incrementQuantity}
              >
                +
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
