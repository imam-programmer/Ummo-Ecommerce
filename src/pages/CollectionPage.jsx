import { useMemo, useState } from "react";

const products = [
    {
        id: 1,
        name: "Classic Cotton T-Shirt",
        category: "T-Shirts",
        price: 29,
        oldPrice: 39,
        rating: 4.8,
        image:
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",
        colors: ["Black", "White", "Gray"],
    },
    {
        id: 2,
        name: "Minimal Oversized Hoodie",
        category: "Hoodies",
        price: 64,
        oldPrice: 79,
        rating: 4.9,
        image:
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=80",
        colors: ["Cream", "Black"],
    },
    {
        id: 3,
        name: "Relaxed Linen Shirt",
        category: "Shirts",
        price: 48,
        oldPrice: null,
        rating: 4.7,
        image:
            "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=700&q=80",
        colors: ["White", "Beige", "Blue"],
    },
    {
        id: 4,
        name: "Everyday Cargo Pants",
        category: "Pants",
        price: 58,
        oldPrice: 72,
        rating: 4.6,
        image:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80",
        colors: ["Olive", "Black"],
    },
    {
        id: 5,
        name: "Premium Denim Jacket",
        category: "Jackets",
        price: 89,
        oldPrice: null,
        rating: 4.8,
        image:
            "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=700&q=80",
        colors: ["Blue", "Black"],
    },
    {
        id: 6,
        name: "Essential Knit Sweater",
        category: "Sweaters",
        price: 55,
        oldPrice: 68,
        rating: 4.5,
        image:
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
        colors: ["Brown", "Cream"],
    },
];

const categories = [
    "All",
    "T-Shirts",
    "Hoodies",
    "Shirts",
    "Pants",
    "Jackets",
    "Sweaters",
];

function FilterIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-5 w-5"
        >
            <path d="M4 6h16M7 12h10M10 18h4" />
        </svg>
    );
}

function HeartIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-5 w-5"
        >
            <path d="M20.8 8.8c0 5.4-8.8 10.2-8.8 10.2S3.2 14.2 3.2 8.8A4.8 4.8 0 0 1 12 6.2a4.8 4.8 0 0 1 8.8 2.6Z" />
        </svg>
    );
}

function ProductCard({ product }) {
    const [liked, setLiked] = useState(false);

    return (
        <article className="group">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {product.oldPrice && (
                    <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-900">
                        Sale
                    </span>
                )}

                <button
                    type="button"
                    aria-label="Add to wishlist"
                    onClick={() => setLiked(!liked)}
                    className={`absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white transition hover:bg-black hover:text-white ${liked ? "text-red-500" : "text-gray-700"
                        }`}
                >
                    <HeartIcon />
                </button>

                <button
                    type="button"
                    className="absolute bottom-3 left-3 right-3 translate-y-16 rounded-xl bg-black py-3 text-sm font-semibold text-white opacity-0 transition duration-300 hover:bg-gray-800 group-hover:translate-y-0 group-hover:opacity-100"
                >
                    Add to cart
                </button>
            </div>

            <div className="pt-4">
                <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                    {product.category}
                </p>

                <h3 className="mt-1 font-medium text-gray-900">{product.name}</h3>

                <div className="mt-2 flex items-center gap-2">
                    <span className="font-semibold text-gray-950">${product.price}</span>

                    {product.oldPrice && (
                        <span className="text-sm text-gray-400 line-through">
                            ${product.oldPrice}
                        </span>
                    )}
                </div>

                <div className="mt-2 flex items-center gap-1 text-sm text-gray-500">
                    <span className="text-yellow-500">★</span>
                    <span>{product.rating}</span>
                </div>
            </div>
        </article>
    );
}

export default function CollectionPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [sortBy, setSortBy] = useState("featured");
    const [showFilters, setShowFilters] = useState(false);
    const [maxPrice, setMaxPrice] = useState(100);

    const filteredProducts = useMemo(() => {
        const result = products
            .filter(
                (product) =>
                    (activeCategory === "All" ||
                        product.category === activeCategory) &&
                    product.price <= maxPrice
            )
            .sort((a, b) => {
                if (sortBy === "price-low") return a.price - b.price;
                if (sortBy === "price-high") return b.price - a.price;
                if (sortBy === "rating") return b.rating - a.rating;
                return a.id - b.id;
            });

        return result;
    }, [activeCategory, maxPrice, sortBy]);

    return (
        <main className="min-h-screen bg-white text-gray-900">
            {/* Hero */}
            <section className="border-b border-gray-200 bg-[#f5f3ef]">
                <div className="mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 lg:py-24">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
                        New season essentials
                    </p>

                    <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
                        The Collection
                    </h1>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
                        Thoughtfully designed everyday pieces made with premium materials
                        and timeless silhouettes.
                    </p>
                </div>
            </section>

            <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
                {/* Category Navigation */}
                <div className="overflow-x-auto">
                    <div className="flex min-w-max items-center gap-2 border-b border-gray-200 pb-5">
                        {categories.map((category) => (
                            <button
                                key={category}
                                type="button"
                                onClick={() => setActiveCategory(category)}
                                className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${activeCategory === category
                                        ? "bg-black text-white"
                                        : "text-gray-500 hover:bg-gray-100 hover:text-gray-950"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Toolbar */}
                <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-gray-500">
                        Showing{" "}
                        <span className="font-semibold text-gray-900">
                            {filteredProducts.length}
                        </span>{" "}
                        products
                    </p>

                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium hover:border-black"
                        >
                            <FilterIcon />
                            Filters
                        </button>

                        <label className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm">
                            <span className="hidden text-gray-500 sm:inline">Sort by:</span>

                            <select
                                value={sortBy}
                                onChange={(event) => setSortBy(event.target.value)}
                                className="bg-transparent font-medium outline-none"
                            >
                                <option value="featured">Featured</option>
                                <option value="price-low">Price: Low to high</option>
                                <option value="price-high">Price: High to low</option>
                                <option value="rating">Top rated</option>
                            </select>
                        </label>
                    </div>
                </div>

                {/* Filter Panel */}
                {showFilters && (
                    <div className="mb-8 rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6">
                        <div className="max-w-sm">
                            <div className="flex items-center justify-between">
                                <label htmlFor="price" className="text-sm font-semibold">
                                    Maximum price
                                </label>

                                <span className="text-sm text-gray-500">${maxPrice}</span>
                            </div>

                            <input
                                id="price"
                                type="range"
                                min="20"
                                max="100"
                                value={maxPrice}
                                onChange={(event) => setMaxPrice(Number(event.target.value))}
                                className="mt-4 w-full accent-black"
                            />
                        </div>
                    </div>
                )}

                {/* Products */}
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="rounded-2xl border border-dashed border-gray-300 py-20 text-center">
                        <h2 className="text-lg font-semibold">No products found</h2>
                        <p className="mt-2 text-sm text-gray-500">
                            Try changing your category or price filter.
                        </p>
                    </div>
                )}

                {/* Load More */}
                <div className="mt-14 text-center">
                    <button
                        type="button"
                        className="rounded-xl border border-black px-8 py-3 text-sm font-semibold transition hover:bg-black hover:text-white"
                    >
                        Load more
                    </button>
                </div>
            </div>
        </main>
    );
}
