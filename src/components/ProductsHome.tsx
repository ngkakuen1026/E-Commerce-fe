import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { myapi } from '../common/http-common';

const ProductsHome = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${myapi.uri}/products`)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!Array.isArray(products) || products.length === 0) {
    return (
      <div className='m-20 text-center text-3xl'>
        There are no products available now.
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center bg-gray-200 pt-8">
        <h1 className="text-4xl text-center font-bold">Product on Sales</h1>
      </div>
      <div className="flex justify-center bg-gray-200 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {products.map(
            ({
              product_id,
              name,
              description,
              price,
              quantity,
              seller_id,
              creation_date,
              image_url,
            }) => (
              <Link to={`/p/${product_id}`} key={product_id}>
                <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:bg-gray-100
                transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-150">
                  <img
                    className="rounded-2xl w-full h-96 object-cover p-2"
                    src={image_url}
                    alt={name}
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl">{name}</div>
                    <div className="text-lg italic text-gray-800">
                      <span className="font-semibold">{quantity}</span> left from the storage
                    </div>
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default ProductsHome;