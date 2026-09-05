import { useState } from "react";
import { FaChevronUp } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { allCat, filterProduct } from "../../slices/productSlice";




const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

const BRANDS = [
  { name: "Adidas", count: 2 },
  { name: "Balmain", count: 7 },
  { name: "Balenciaga", count: 10 },
  { name: "Burberry", count: 39 },
  { name: "Kenzo", count: 95 },
  { name: "Givenchy", count: 1092 },
  { name: "Zara", count: 48 },
];

function SectionHeader({ title, open, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="flex w-full items-center justify-between py-2 text-left"
    >
      <span className="font-jost text-lg font-semibold uppercase tracking-wide text-primary">
        {title}
      </span>
      <FaChevronUp
        size={18}
        strokeWidth={2}
        className={`text-primary transition-transform duration-200 ${open ? "" : "rotate-180"
          }`}
      />
    </button>
  );
}

export default function ShopFilter({ currentPage, setCurrentPage }) {

const [Allshow, setAllshow] = useState(false)
  const [openSections, setOpenSections] = useState({
    categories: true,
    color: true,
    sizes: true,
    brands: true,
    price: true,
  });
  let Products = useSelector((state) => state.Products.products)

let Brand=Products.slice(0,40).map((item)=>(
  item.brand
))


  const filteredBrands = [...new Set(Brand)];
  let Categore = Products.map(item => item.category)

  const CATEGORIES = [...new Set(Categore)];

  const [selectedSizes, setSelectedSizes] = useState([]);
  const [brandSearch, setBrandSearch] = useState("");
  const [checkedBrands, setCheckedBrands] = useState([]);
  const [minPrice, setMinPrice] = useState(29);
  const [maxPrice, setMaxPrice] = useState(937);
  
  const [ActiveCategory, setActiveCategory] = useState("")
  let dispatch = useDispatch()

  const PRICE_FLOOR = 29;
  const PRICE_CEIL = 937;

  const toggleSection = (key) =>
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));

  const toggleSize = (size) =>
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );

  const toggleBrand = (name) =>
    setCheckedBrands((prev) =>
      prev.includes(name) ? prev.filter((b) => b !== name) : [...prev, name]
    );


// =====================should understand this code from sir=========================
  function handleActiveCategory(item) {
    setActiveCategory(item) /*this for active style */
    let filterProducts =item? Products.filter((Pitem) => Pitem.category == item ):[];  /* this is for filtering data by category */
    dispatch(filterProduct(filterProducts)) /* push filtering data on redux for using this data other components*/
  }

// =====================should understand this code from sir=========================
    function handleAllCategories() {
    setAllshow(true)      
    setActiveCategory("")
    dispatch(filterProduct([]))
    setCurrentPage(1)
  }
// =====================should understand this code from sir=========================



  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 1);
    setMinPrice(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 1);
    setMaxPrice(value);
  };

  return (
    <div className="font-jost w-full max-w-75 px-1 text-primary -mt-2">
      {/* Product Categories */}
      <div className="border-b border-gray-200 pb-6">
        <SectionHeader
          title="Product Categories"
          open={openSections.categories}
          onToggle={() => toggleSection("categories")}
        />
        {openSections.categories && (
          <ul className="mt-3 space-y-3">
            <li className={`${Allshow ? "text-black" : "text-gray"} cursor-pointer`} onClick={handleAllCategories}>All</li>
            {CATEGORIES.map((cat) => (
              <li key={cat}>
                <button className={`text-[15px]  capitalize cursor-pointer ${ActiveCategory == cat && "text-black!"} transition-colors text-gray `} onClick={() => {
                  handleActiveCategory(cat)
                  setAllshow(false)
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
            <ul className="space-y-4">
              {filteredBrands.map((brand,id) => (
                <li key={id} className="flex items-center justify-between">
                  <label className="flex cursor-pointer items-center gap-3 text-[15px] text-primary">
                    <input
                      type="checkbox"
                      checked={checkedBrands.includes(brand)}
                      onChange={() => toggleBrand(brand)}
                      className="h-4 w-4 rounded-none border-gray-300 text-primary accent-[#222222]"
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
              <span className="text-primary">Min Price: ${minPrice}</span>
              <span className="text-primary">Max Price: ${maxPrice}</span>
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