import { Products } from "../types/products";
import React, { useEffect, useState } from "react";

const DataFetchingComponent: React.FC = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Delay the fetch by 2 seconds
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const response = await fetch(
          "https://fakestoreapi.com/products?limit=8"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data: Products[] = await response.json();
        setProducts(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-lightBeige">
        <p className="font-geist-sans text-4xl text-gray-700 animate-pulse">
          Loading...
        </p>
      </div>
    );
  }
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-black text-lightBeige font-geist-sans mx-5 py-7 px-7 mt-5">
      <h1 className="text-3xl font-bold mb-5">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border-2 border-gray-200 rounded-lg shadow-lg p-4 bg-charcoal hover:shadow-xl transition-shadow flex flex-col"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-4"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
              <p className="text-sm text-lightBeige mb-2">{product.category}</p>
              <p className="text-base text-lightBeige mb-2">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataFetchingComponent;
