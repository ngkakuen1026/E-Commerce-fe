import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { myapi } from '../common/http-common';

interface Product {
  product_id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  seller_id: number;
  creation_date: string;
  image_url: string;
  category_id: number;
}

interface Category {
  category_id: number;
  name: string;
}

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

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

  useEffect(() => {
    axios
      .get(`${myapi.uri}/categories`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.error('Error fetching category data:', error);
      });
  }, []);

  const handleCategoryFilter = (categoryId: number) => {
    setSelectedCategory(categoryId);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!Array.isArray(products) || products.length === 0) {
    return <div>There are no products available now.</div>;
  }

  let filteredProducts: Product[] = products;
  if (selectedCategory) {
    filteredProducts = products.filter((product) => product.category_id === selectedCategory);
  }

  return (
    <div className=''>
      <div className="flex justify-center bg-gray-200 pt-8">
        <h1 className="text-4xl text-center font-bold">Product on Sales</h1>
      </div>
      <div className="flex justify-center bg-gray-200 py-4">
        {categories.map(({ category_id, name }) => (
          <button
            key={category_id}
            className={`${
              selectedCategory === category_id ? 'bg-blue-600' : 'bg-gray-300'
            } hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mx-2`}
            onClick={() => handleCategoryFilter(category_id)}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="flex justify-center bg-gray-200 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {filteredProducts.map(
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
    </div>
  );
};

export default Products;