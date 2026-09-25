import { useState } from "react";
import { FaChevronUp } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { setShopOptions } from "../../slices/productSlice";


function SectionHeader({ title, open, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="flex w-full items-center justify-between py-2 text-left"
    >
      <span className="font-jost text-[12px] text-nowrap xl:text-lg font-semibold uppercase tracking-wide text-primary">
        {title}
      </span>
      <FaChevronUp
        strokeWidth={2}
        className={`text-primary text-sm xl:text-lg transition-transform duration-200 ${open ? "" : "rotate-180"
          }`}
      />
    </button>
  );
}

export default function ShopFilter({ setCurrentPage = () => { } }) {

  const [openSections, setOpenSections] = useState({
    categories: true,
    color: true,
    sizes: true,
    brands: true,
    price: true,
  });
  const Products = useSelector((state) => state.Products.products)
  const options = useSelector((state) => state.Products.options)
  const CATEGORIES = [...new Set(Products.map((item) => item.category).filter(Boolean))];
  const BRANDS = [...new Set(Products.map((item) => item.brand).filter(Boolean))];
  const [brandSearch, setBrandSearch] = useState("");
  let dispatch = useDispatch()

  const prices = Products.map((item) => item.price).filter((price) => typeof price === "number");
  const PRICE_FLOOR = prices.length ? Math.floor(Math.min(...prices)) : 0;
  const PRICE_CEIL = prices.length ? Math.ceil(Math.max(...prices)) : 1000;

  const minPrice = options.minPrice ?? PRICE_FLOOR;
  const maxPrice = options.maxPrice ?? PRICE_CEIL;

  const toggleSection = (key) =>
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));

  function updateOptions(changes) {
    dispatch(setShopOptions(changes))
    setCurrentPage(1)
  }

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 1);
    updateOptions({ minPrice: value })
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 1);
    updateOptions({ maxPrice: value })
  };

  const filteredBrands = BRANDS.filter((brand) => brand.toLowerCase().includes(brandSearch.toLowerCase()));

  return (
    <div className="font-jost w-45 lg:w-60  xl:w-90  xl:px-1 text-primary -mt-3 xl:-mt-2  px-2 pt-2 xl:pt-0">
      {/* Product Categories */}
      <div className="border-b border-gray-200 pb-6">
        <SectionHeader
          title="Product Categories"
          open={openSections.categories}
          onToggle={() => toggleSection("categories")}
        />
        {openSections.categories && (
          <ul className="xl:mt-3 xl:space-y-3 space-y-px">
            <li className={`${!options.category ? "text-black" : "text-gray"} cursor-pointer text-[12px] xl:text-[15px]`} onClick={() => {
              updateOptions({ category: '' })
            }}>All</li>
            {CATEGORIES.map((cat) => (
              <li key={cat}>
                <button className={`xl:text-[15px] text-[12px] capitalize cursor-pointer ${options.category === cat ? "text-black!" : ""} transition-colors text-gray`} onClick={() => {
                  updateOptions({ category: cat })
                }}>
                  {cat}
                </button>
              </li>

            ))}
          </ul>
        )}
      </div>

      {/* Brands */}
      <div className="border-b border-gray-200 py-6">
        <SectionHeader
          title="Brands"
          open={openSections.brands}
          onToggle={() => toggleSection("brands")}
        />
        {openSections.brands && (
          <div className="mt-4">
            <div className="relative mb-4">
              <input
                type="text"
                value={brandSearch}
                onChange={(e) => setBrandSearch(e.target.value)}
                placeholder="Search"
                className="w-full border border-gray-300 py-2.5 pl-4 pr-10 text-sm text-primary placeholder-gray outline-none focus:border-primary"
              />
              <FiSearch
                size={16}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray"
              />
            </div>
            <ul className="xl:space-y-4 space-y-2">
              {filteredBrands.map((brand) => (
                <li key={brand} className="flex items-center justify-between">
                  <label className="flex cursor-pointer items-center gap-3 text-[12px] xl:text-[15px] text-primary">
                    <input
                      type="checkbox"
                      checked={options.brands.includes(brand)}
                      onChange={() => updateOptions({
                        brands: options.brands.includes(brand)
                          ? options.brands.filter((selectedBrand) => selectedBrand !== brand)
                          : [...options.brands, brand],
                      })}
                      className="lg:h-4 lg:w-4 rounded-none border-gray-300 text-primary accent-primary"
                    />
                    {brand}
                  </label>

                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Price */}
      <div className="py-6">
        <SectionHeader
          title="Price"
          open={openSections.price}
          onToggle={() => toggleSection("price")}
        />
        {openSections.price && (
          <div className="mt-5">
            <div className="relative h-1">
              <div className="absolute inset-0 rounded-full bg-gray-200" />
              <div
                className="absolute h-1 rounded-full bg-primary"
                style={{
                  left: `${((minPrice - PRICE_FLOOR) / (PRICE_CEIL - PRICE_FLOOR)) * 100}%`,
                  right: `${100 - ((maxPrice - PRICE_FLOOR) / (PRICE_CEIL - PRICE_FLOOR)) * 100}%`,
                }}
              />
              <input
                type="range"
                min={PRICE_FLOOR}
                max={PRICE_CEIL}
                value={minPrice}
                onChange={handleMinChange}
                className="range-thumb pointer-events-none absolute inset-0 w-full appearance-none bg-transparent"
              />
              <input
                type="range"
                min={PRICE_FLOOR}
                max={PRICE_CEIL}
                value={maxPrice}
                onChange={handleMaxChange}
                className="range-thumb pointer-events-none absolute inset-0 w-full appearance-none bg-transparent"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-primary">Min Price: ${minPrice ?? PRICE_FLOOR}</span>
              <span className="text-primary">Max Price: ${maxPrice ?? PRICE_CEIL}</span>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .range-thumb::-webkit-slider-thumb {
          pointer-events: auto;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 9999px;
          background: #ffffff;
          border: 2px solid var(--color-primary);
          cursor: pointer;
        }
        .range-thumb::-moz-range-thumb {
          pointer-events: auto;
          width: 18px;
          height: 18px;
          border-radius: 9999px;
          background: #ffffff;
          border: 2px solid var(--color-primary);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}