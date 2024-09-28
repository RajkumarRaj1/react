import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Cart = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  console.log(productId);
  useEffect(() => {
    const getProductDetail = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const data = await response.json();
      setProduct(data);
      console.log(data);
    };
    getProductDetail();
  }, []);

  return (
    <div className="h-fit container mx-auto">
      <div className="flex flex-col md:flex-row">
        <div className="md=w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="w-40 h-40 transition-"
          />
        </div>
        <div className="md:w-1/2 p-4 gap-4">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-700">{product.price}</p>
          <p>Quantity: {product.quantity}</p>
          <p className="text-gray-700">
            Rating:{product.rating?.rate}({product.rating?.count}reviews)
          </p>
          <button
            className="bg-red-500 text-white p-2 rounded hover:bg-gray-600 "
            onClick={() => removeFromCart(product.id)}
          >
            Remove from Cart
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded mx-2  hover:bg-teal-800"
            onClick={() => updateQuantity(product.id, 1)}
          >
            +
          </button>
          <button
            className="bg-gray-500 text-white p-2 rounded hover:bg-teal-800"
            onClick={() => updateQuantity(product.id, -1)}
            disabled={product.quantity === 1}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
