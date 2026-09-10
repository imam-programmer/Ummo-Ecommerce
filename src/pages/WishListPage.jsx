import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import WishListProduct from "../components/wishlistProductUI/WishListProduct";
import { useNavigate } from "react-router";

const wishlistProducts = [
  {
    id: 1,
    name: "Classic Cotton T-Shirt",
    category: "T-Shirts",
    price: 39.99,
    oldPrice: 49.99,
    rating: 4.8,
    reviews: 124,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",
    inStock: true,
  },
  {
    id: 2,
    name: "Minimal Leather Bag",
    category: "Bags",
    price: 89.99,
    oldPrice: null,
    rating: 4.6,
    reviews: 87,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
    inStock: true,
  },
  {
    id: 3,
    name: "Classic Running Shoes",
    category: "Shoes",
    price: 74.99,
    oldPrice: 99.99,
    rating: 4.9,
    reviews: 215,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
    inStock: true,
  },
  {
    id: 4,
    name: "Premium Wrist Watch",
    category: "Accessories",
    price: 129.99,
    oldPrice: null,
    rating: 4.7,
    reviews: 65,
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",
    inStock: false,
  },
];

const WishListPage = () => {
  const navigate=useNavigate()
  function handleShop(){
    navigate("/shop")
  }
  return (
    <main className="min-h-screen bg-white font-jost text-primary">
      {/* Header */}

      {/* Wishlist Content */}
      <section className="mx-auto max-w-360 px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-14">
        {/* Top bar */}
        <div className="mb-7 flex flex-col gap-4 border-b border-gray-200 pb-5 xs:flex-row xs:items-center xs:justify-between">
          <div>
            <h2 className="text-lg font-medium sm:text-xl">
              Wishlist Items
            </h2>

            <p className="mt-1 text-sm text-gray">
              {wishlistProducts.length} items in your wishlist
            </p>
          </div>

          <button
            type="button"
            className="flex w-fit items-center cursor-pointer gap-2 text-sm text-gray transition-colors hover:text-primary"
          >
            <FiTrash2 size={16} strokeWidth={1.6} />
            Clear Wishlist
          </button>
        </div>

        {/* Product List */}
        <div className="space-y-5">
          {wishlistProducts.map((product) => (
            <WishListProduct product={product}/>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-gray-200 pt-7 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-lg font-medium">
              Looking for something else?
            </h3>

            <p className="mt-1 text-sm text-gray">
              Explore our latest collection and discover more.
            </p>
          </div>

          <button onClick={handleShop}
            type="button"
            className="group flex cursor-pointer items-center gap-3 border-b border-primary pb-1 text-sm uppercase tracking-wider"
          >
            Continue Shopping

            <BsArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </section>
    </main>
  );
};

export default WishListPage;
