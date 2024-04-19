import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { myapi } from '../common/http-common';

interface Product {
  name: string;
  description: string;
  price: number;
  quantity: number;
  category_id: number;
  seller_id: number;
  creation_date: any;
  image_url: string;
}

interface Category {
  name: string;
  description: string;
}

const DetailProduct = () => {
  const { product_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<Product | null>(null);
  const [category, setCategory] = useState<Category | null>(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const productResponse = await axios.get(`${myapi.uri}/products/${product_id}`);
        // Fetching category name to the corresponding product
        const categoryResponse = await axios.get(`${myapi.uri}/categories/${productResponse.data.category_id}`);
        setProduct(productResponse.data);
        setCategory(categoryResponse.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product data:', error);
        setLoading(false);
      }
    };

    fetchProductData();
  }, [product_id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!product) {
    return <div>There is no product available with the specified ID.</div>;
  }
  
  const { name, description, price, quantity, seller_id, creation_date, image_url } = product;

  const formattedCreationDate = new Date(creation_date).toLocaleString("en-US");

  return (
    <div className="container mx-auto p-12">
        <div className="grid grid-cols-2 gap-4">
          <div className="product-img-box">
            <img src={image_url} alt={name} className="w-full h-auto object-cover" />
          </div>
            <div className="detail-box">
                {category && (
                    <p className="text-lg text-sky-700 my-2">
                      <a href='/'>Category </a> &gt; {category.name} &gt; {name}
                    </p>
                )}
                <div className="product-detail-box my-12">
                    <h2 className="text-8xl font-bold mt-2 mb-8">{name}</h2>
                    <p className="text-2xl text-gray-600 my-4">{description}</p>
                    <p className="text-lg italic text-gray-800 my-4">
                        <span className="font-semibold">{quantity}</span> left from the storage
                    </p>
                    <p className="text-2xl font-bold mt-4">${price}</p>
                    <p className="text-xl text-gray-400 font-semibold line-through mb-4">${price * 2}</p>
                </div>

                <div className="seller-detail-box my-4">
                    <p className="text-gray-800">Seller ID: {seller_id}</p>
                    <p className="italic  text-gray-500">Posted at: {formattedCreationDate}</p>
                </div>

                <div className="button my-4">
                    <div className="flex items-center mb-4">
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-l">
                        -
                        </button>
                        <span className="bg-gray-100 text-gray-700 px-4 py-2">{quantity}</span>
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-r">
                        +
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-4">
                        Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default DetailProduct;