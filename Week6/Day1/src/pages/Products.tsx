import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../types/items";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { increment, decrement } from "../store/counter/counterSlice";

const Products = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Make the API call and type the response
        const response = await axios.get<{ products: Product[] }>(
          "https://dummyjson.com/products"
        );
        setProducts(response.data.products); // Update state with the products array
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1 className="text-4xl font-bold text-center py-5">Products</h1>
      <div className="m-5 px-5 grid grid-cols-3 gap-5 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex gap-5 mb-5 border-b pb-5 flex-col border-black border-2 p-2 rounded-lg items-center"
          >
            <img
              src={product.images[0]}
              alt={product.title}
              className="h-[200px] w-[200px] object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold">{product.title}</h1>
              <p className="text-lg text-gray-700">${product.price}</p>
              <p className="text-sm text-gray-500">{product.description}</p>
              <p className="text-sm text-green-600 font-semibold">
                {product.availabilityStatus}
              </p>
              <p className="text-xs text-gray-400 italic">
                {product.warrantyInformation}
              </p>
              <div className="flex gap-2 justify-between mt-2   ">
                <button className="bg-black text-white p-2 rounded-lg">
                  Add to Cart
                </button>
                <button
                  className="font-medium text-xl border-black rounded-lg border-2 px-2"
                  onClick={() => dispatch(decrement(product.id))}
                >
                  -
                </button>
                <h2 className="font-bold p-2">{count[product.id] || 0}</h2>
                <button
                  className="font-medium text-xl border-black rounded-lg border-2 px-2"
                  onClick={() => dispatch(increment(product.id))}
                >
                  +
                </button>
                <button className="bg-blue-600 text-white p-2 rounded-lg">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
