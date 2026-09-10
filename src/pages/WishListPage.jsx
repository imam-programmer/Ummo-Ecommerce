import React from "react";

import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import { CiStar } from "react-icons/ci";

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
  return (
    <main className="min-h-screen bg-white font-jost text-primary">
      {/* Header */}
      <section className="border-b border-gray-200">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-5 sm:px-6 lg:px-10">
          <div>
            <p className="mb-1 text-xs uppercase tracking-[3px] text-gray">
              My Account
            </p>

            <h1 className="text-2xl font-medium sm:text-3xl">
              My Wishlist
            </h1>
          </div>

          <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gray-100">
            <FaRegHeart size={20} strokeWidth={1.6} />

            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] text-white">
              {wishlistProducts.length}
            </span>
          </div>
        </div>
      </section>

      {/* Wishlist Content */}
      <section className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-14">
        {/* Top bar */}
        <div className="mb-7 flex flex-col gap-4 border-b border-gray-200 pb-5 xs:flex-row xs:items-center xs:justify-between">
          <div>
            <h2 className="text-lg font-medium sm:text-xl">
              Saved Items
            </h2>

            <p className="mt-1 text-sm text-gray">
              {wishlistProducts.length} items in your wishlist
            </p>
          </div>

          <button
            type="button"
            className="flex w-fit items-center gap-2 text-sm text-gray transition-colors hover:text-primary"
          >
            <FiTrash2 size={16} strokeWidth={1.6} />
            Clear Wishlist
          </button>
        </div>

        {/* Product List */}
        <div className="space-y-5">
          {wishlistProducts.map((product) => (
            <article
              key={product.id}
              className="group grid grid-cols-[100px_1fr] gap-4 border-b border-gray-200 pb-5 xs:grid-cols-[130px_1fr] sm:grid-cols-[170px_1fr] sm:gap-6 lg:grid-cols-[210px_1fr]"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#f5f5f5]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {product.oldPrice && (
                  <span className="absolute left-2 top-2 bg-primary px-2 py-1 text-[9px] uppercase tracking-wider text-white sm:left-3 sm:top-3">
                    Sale
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="flex min-w-0 flex-col justify-between py-1">
                <div>
                  <div className="mb-1 flex items-start justify-between gap-3">
                    <div>
                      <p className="mb-1 text-xs uppercase tracking-wider text-gray">
                        {product.category}
                      </p>

                      <h3 className="text-base font-medium sm:text-lg lg:text-xl">
                        {product.name}
                      </h3>
                    </div>

                    <button
                      type="button"
                      aria-label={`Remove ${product.name}`}
                      className="flex-shrink-0 text-gray transition-colors hover:text-red-500"
                    >
                      <FiTrash2 size={17} strokeWidth={1.5} />
                    </button>
                  </div>

                  {/* Rating */}
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, index) => (
                        <CiStar
                          key={index}
                          size={13}
                          strokeWidth={1.5}
                          className={
                            index < Math.round(product.rating)
                              ? "fill-primary text-primary"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>

                    <span className="text-xs text-gray">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-base font-medium sm:text-lg">
                      ${product.price.toFixed(2)}
                    </span>

                    {product.oldPrice && (
                      <span className="text-sm text-gray line-through">
                        ${product.oldPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom */}
                <div className="mt-5 flex flex-col gap-3 xs:flex-row xs:items-center xs:justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        product.inStock
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    />

                    <span className="text-xs text-gray">
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>

                  <button
                    type="button"
                    disabled={!product.inStock}
                    className="flex w-full items-center justify-center gap-2 bg-primary px-4 py-2.5 text-xs uppercase tracking-wider text-white transition-all duration-300 hover:bg-black disabled:cursor-not-allowed disabled:bg-gray-300 xs:w-auto"
                  >
                    <MdOutlineShoppingBag size={15} strokeWidth={1.6} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
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

          <button
            type="button"
            className="group flex items-center gap-3 border-b border-primary pb-1 text-sm uppercase tracking-wider"
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
