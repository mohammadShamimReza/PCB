// pages/product/[productId].tsx

import Image from "next/image";
import { useRouter } from "next/router";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

const ProductDetailPage = () => {
  const router = useRouter();
  const { productId } = router.query;

  // Replace this with your actual product data
  const product: Product = {
    id: productId as string,
    name: "Product Name",
    price: 29.99,
    description: "Product description goes here...",
    imageUrl: "/path/to/product-image.jpg",
  };

  return (
    <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto">
      {/* Left side - Product Image */}
      <div className="md:w-1/2 p-4">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={500}
          height={500}
          objectFit="contain"
        />
      </div>

      {/* Right side - Product Information */}
      <div className="md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
        <p className="text-gray-600 text-lg mb-4">
          ${product.price.toFixed(2)}
        </p>
        <p className="text-gray-800">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetailPage;
