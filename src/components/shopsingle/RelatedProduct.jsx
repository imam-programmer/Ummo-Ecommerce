import React from "react";
import { FaRegHeart } from "react-icons/fa6";
const ShapeArt = ({ className = "" }) => (
  <svg viewBox="0 0 400 400" className={className} preserveAspectRatio="xMidYMid slice">
    <rect width="400" height="400" fill="#EDECE9" />
    <circle cx="200" cy="230" r="110" fill="#B9B7B2" />
    <polygon points="260,80 360,260 160,260" fill="#B9B7B2" />
  </svg>
);

const products = [
  {
    id: 1,
    category: "Dresses",
    name: "Cropped Faux Leather Jacket",
    price: "$29",
    salePrice: null,
    photo: true,
  },
  {
    id: 2,
    category: "Dresses",
    name: "Calvin Shorts",
    price: "$62",
    salePrice: null,
  },
  {
    id: 3,
    category: "Dresses",
    name: "Kirby T-Shirt",
    price: "$17",
    salePrice: null,
  },
  {
    id: 4,
    category: "Dresses",
    name: "Cableknit Shawl",
    price: "$120",
    salePrice: "$99",
  },
];

const ProductCard = ({ product }) => (
  <div className="group flex flex-col">
    <div className="relative aspect-4/5 w-full overflow-hidden bg-[#EDECE9]">
      {product.photo ? (
        <div className="flex h-full w-full items-center justify-center bg-[#EDECE9] text-xs text-gray">
          {/* Swap for a real <img> tag with the model photo */}
          <img
            src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=500&fit=crop"
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>
      ) : (
        <ShapeArt className="h-full w-full" />
      )}
    </div>

    <div className="mt-4 flex items-start justify-between gap-2">
      <div>
        <p className="text-xs text-gray">{product.category}</p>
        <h3 className="mt-1 text-sm font-medium text-primary">
          {product.name}
        </h3>
        <p className="mt-1 text-sm">
          {product.salePrice ? (
            <>
              <span className="mr-2 text-gray line-through">
                {product.price}
              </span>
              <span className="text-red-600">{product.salePrice}</span>
            </>
          ) : (
            <span className="text-gray">{product.price}</span>
          )}
        </p>
      </div>

      <button
        aria-label={`Add ${product.name} to wishlist`}
        className="mt-1 shrink-0 text-primary transition-colors hover:text-gray"
      >
        <FaRegHeart size={16} strokeWidth={1.5} />
      </button>
    </div>
  </div>
);

export default function RelatedProduct() {
  return (
    <section className="bg-white font-jost text-primary">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl">
          RELATED <span className="font-semibold">PRODUCTS</span>
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}