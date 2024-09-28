import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


    const Product = (cart,setCart) => {
        const [products, setProducts] = useState([]);
          const navigate = useNavigate();
    useEffect(() => {
    const getProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
    };
    getProducts();
    }, []);
  const addToCart = (product) => {
    const inCart = cart.find((product) => product.id === product.id);
    if (inCart) {
      setCart(cart.filter((product) => product.id !== product.id));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
       
    return (
      <div className="h-fit container mx-auto overflow-auto ">
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-3xl font-bold">welcome to page product</h1>
          <div className="grid grid-cols-4 gap-8 flex-wrap justify-center m-4">
            {products.map((product) => (
              <div key={product.id} className="h-full bg-base-200 shadow-xl">
                <figure>
                  <img src={product.image} alt="Shoes" className="w-32 h-24" />
                </figure>
                <div className="p-2 m-2 gap-4 ">
                  <h2 className="card-title font-serif font-bold ">
                    {product.title}
                  </h2>
                  <p className="truncate">{product.description}</p>
                  <p className="font-bold">Price: ₹{product.price}</p>
                  <button className="border-2 text-white cursor-pointer px-4 py-2 rounded-lg bg-indigo-600 hover:bg-red-500"
                  >
                    Buy Now
                  </button>
                  <button
                    className="border-2  text-white cursor-pointer px-4 py-2  rounded-lg bg-yellow-900 hover:bg-green-500"
                    onClick={() => {
                      navigate(`/cart/${product.id}`);
                    }}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Product;
