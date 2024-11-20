import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../types/items";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { increment, decrement } from "../store/counter/counterSlice";
import { BsCart2, BsCartCheckFill } from "react-icons/bs";

const Products = () => {
  const [cartChecked, setCartChecked] = useState<Record<number, boolean>>({});

  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<{ products: Product[] }>(
          "https://dummyjson.com/products"
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Toggle cart status for a specific product
  const toggleCartIcon = (productId: number) => {
    setCartChecked((prev) => ({
      ...prev,
      [productId]: !prev[productId], // Toggle the cart status for the product
    }));
  };

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
              <p
                className="text-sm text-gray-500 truncate overflow-hidden"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  whiteSpace: "normal",
                }}
              >
                {product.description}
              </p>
              <div className="flex justify-between mt-2">
                <div className="flex gap-2">
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
                </div>
                <div className="flex gap-2">
                  <button
                    className="bg-black text-white p-2 rounded-lg"
                    onClick={() => toggleCartIcon(product.id)}
                  >
                    {cartChecked[product.id] ? (
                      <BsCartCheckFill className="text-2xl" />
                    ) : (
                      <BsCart2 className="text-2xl" />
                    )}
                  </button>
                  <button className="bg-blue-600 text-white p-2 rounded-lg">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
