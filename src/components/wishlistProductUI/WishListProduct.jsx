import React from 'react'
import { CiStar } from 'react-icons/ci'
import { FiTrash2 } from 'react-icons/fi'
import { MdOutlineShoppingBag } from 'react-icons/md'

const WishListProduct = ({product}) => {
  return (
    <article
              key={product.id}
              className="group grid grid-cols-[100px_1fr] gap-4 border-b border-gray-200 pb-5 xs:grid-cols-[130px_1fr] sm:grid-cols-[170px_1fr] sm:gap-6 lg:grid-cols-[210px_1fr]"
            >
              {/* Image */}
              <div className="relative aspect-4/5 overflow-hidden bg-[#f5f5f5]">
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
                      className="shrink-0 text-gray transition-colors hover:text-red-500"
                    >
                      <FiTrash2 className='cursor-pointer' size={17} strokeWidth={1.5} />
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
                    className="flex w-full cursor-pointer items-center justify-center gap-2 bg-primary px-4 py-2.5 text-xs uppercase tracking-wider text-white transition-all duration-300 hover:bg-black disabled:cursor-not-allowed disabled:bg-gray-300 xs:w-auto"
                  >
                    <MdOutlineShoppingBag size={15} strokeWidth={1.6} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
  )
}

export default WishListProduct