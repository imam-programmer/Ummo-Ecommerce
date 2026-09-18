import { useState, useRef } from "react";
import Product from "../components/layout/common/Product";
import { useSelector } from "react-redux";

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
    },
    {
        id: 4,
        name: "Everyday Cargo Pants",
        category: "Pants",
        price: 58,
        oldPrice: 72,
        rating: 4.6,
        image:
            "https://images.unsplash.com/photo-1506629905607-d9b1d0d7c2a8?auto=format&fit=crop&w=700&q=80",
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
    },
];

const categories = [
    "All",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-bags",
    "womens-dresses",
    "womens-watches",
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


export default function CollectionPage() {
    const productsSectionRef = useRef(null);
    const [activeCategory, setActiveCategory] = useState("All");
    const [sortBy, setSortBy] = useState("featured");
    const [maxPrice, setMaxPrice] = useState(20);
    const [showFilters, setShowFilters] = useState(false);
    const Data=useSelector(state=>state.AllProduct.Products)
    console.log(Data[0].category
)
    function scrollToProducts() {
        productsSectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }

    function getFilteredProducts() {
        let filteredProducts = Data.filter((product) => {
            const matchesCategory =
                activeCategory === "All" ||
                product.category === activeCategory;
            const matchesPrice = product.price <= maxPrice;
            return matchesCategory && matchesPrice;
        });

        if (sortBy === "price-low") {
            filteredProducts.sort((a, b) => a.price - b.price);
        }

        if (sortBy === "price-high") {
            filteredProducts.sort((a, b) => b.price - a.price);
        }

        if (sortBy === "rating") {
            filteredProducts.sort((a, b) => b.rating - a.rating);
        }

        return filteredProducts;
    }

    const filteredProducts = getFilteredProducts();

    return (
        <main className="min-h-screen bg-white text-gray-900">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gray-950">
                <div className="mx-auto flex min-h-[420px] max-w-7xl items-center justify-center px-5 py-16 text-center sm:px-8">
                    {/* Soft decorative shapes */}
                    <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/5" />
                    <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-white/5" />

                    <div className="relative z-10 max-w-2xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
                            Curated for you
                        </p>

                        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                            Find your new favorites.
                        </h1>

                        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-gray-400 sm:text-base">
                            Explore our latest styles, carefully selected to bring comfort,
                            confidence, and effortless style to your everyday wardrobe.
                        </p>

                        <button
                            type="button"
                            onClick={() => scrollToProducts()}
                            className="mt-8 rounded-lg cursor-pointer bg-white px-7 py-3.5 text-sm font-semibold text-gray-950 transition hover:bg-gray-200"
                        >
                            Explore products
                        </button>
                    </div>
                </div>
            </section>





            <div ref={productsSectionRef} className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
                {/* Categories */}
                <div className="overflow-x-auto">
                    <div className="flex min-w-max gap-2 border-b border-gray-200 pb-5">
                        {categories.map((category) => (
                            <button
                                key={category}
                                type="button"
                                onClick={() => setActiveCategory(category)}
                                className={`rounded-full capitalize px-5 py-2.5 text-sm font-medium transition ${activeCategory === category
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
                            className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium transition hover:border-black"
                        >
                            <FilterIcon />
                            Filters
                        </button>

                        <select
                            value={sortBy}
                            onChange={(event) => setSortBy(event.target.value)}
                            className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium outline-none focus:border-black"
                        >
                            <option value="featured">Featured</option>
                            <option value="price-low">Price: Low to high</option>
                            <option value="price-high">Price: High to low</option>
                            <option value="rating">Top rated</option>
                        </select>
                    </div>
                </div>

                {/* Price Filter */}
                {showFilters && (
                    <div className="mb-8 rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6">
                        <div className="max-w-sm">
                            <div className="flex items-center justify-between">
                                <label htmlFor="price" className="text-sm font-semibold">
                                    Maximum price
                                </label>

                                <span className="text-sm text-gray-500">
                                    ${maxPrice}
                                </span>
                            </div>

                            <input
                                id="price"
                                type="range"
                                min="20"
                                max="100"
                                value={maxPrice}
                                onChange={(event) =>
                                    setMaxPrice(Number(event.target.value))
                                }
                                className="mt-4 w-full accent-black"
                            />
                        </div>
                    </div>
                )}

                {/* Product Grid */}
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4">
                        {filteredProducts.map((product) => (
                            <Product item={product}/>
                        ))}
                    </div>
                ) : (
                    <div className="rounded-2xl border border-dashed border-gray-300 py-20 text-center">
                        <h2 className="text-lg font-semibold">
                            No products found
                        </h2>

                        <p className="mt-2 text-sm text-gray-500">
                            Try changing your category or price filter.
                        </p>

                        <button
                            type="button"
                            onClick={() => {
                                setActiveCategory("All");
                                setMaxPrice(100);
                            }}
                            className="mt-5 rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white"
                        >
                            Reset filters
                        </button>
                    </div>
                )}

            </div>
        </main>
    );
}
