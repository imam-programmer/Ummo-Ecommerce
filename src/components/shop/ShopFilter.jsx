import { useState } from "react";
import { FaChevronUp } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { useSelector,useDispatch } from "react-redux";
import { allCat, filterProduct } from "../../slices/productSlice";


const COLORS = [
  // { name: "Navy", hex: "#1B2A5E" },
  // { name: "Yellow", hex: "#E4B94C" },
  // { name: "Black", hex: "#232323" },
  // { name: "Light Blue", hex: "#A9CDEB" },
  // { name: "Brown", hex: "#8C5A2B" },
  // { name: "Gold", hex: "#D89B3D" },
  // { name: "Peach", hex: "#F0B79E" },
  // { name: "Gray", hex: "#B9B9B9" },
  // { name: "Red", hex: "#D9736B" },
  // { name: "Mint", hex: "#AEDCC0" },
];

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
        className={`text-primary transition-transform duration-200 ${
          open ? "" : "rotate-180"
        }`}
      />
    </button>
  );
}

export default function ShopFilter({cpage,setcpage}) {
  
  
  const [openSections, setOpenSections] = useState({
    categories: true,
    color: true,
    sizes: true,
    brands: true,
    price: true,
  });
let Products=useSelector((state)=>state.Products.products)
const AllCate=useSelector((state)=>state.Products.AllCat)

let Categore=Products.map(item=>item.category)

const CATEGORIES = [...new Set(Categore)] ;
  const [selectedColor, setSelectedColor] = useState("Gray");
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [brandSearch, setBrandSearch] = useState("");
  const [checkedBrands, setCheckedBrands] = useState([]);
  // const [AllCate, setAllCate] = useState(true)
  const [minPrice, setMinPrice] = useState(29);
  const [maxPrice, setMaxPrice] = useState(937);
  const [ActiveCategory, setActiveCategory] = useState("All")

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

  const filteredBrands = BRANDS.filter((b) =>
    b.name.toLowerCase().includes(brandSearch.toLowerCase())
  );

  let dispatch=useDispatch()

function handleActiveCategory(item){
setActiveCategory(item)
let filterProducts=Products.filter((Pitem)=>Pitem.category==item)
dispatch(filterProduct(filterProducts))
dispatch(allCat(false))
setcpage(1)
}

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 1);
    setMinPrice(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 1);
    setMaxPrice(value);
  };
// console.log(ActiveCategory);

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
            <li className={`${AllCate?"text-black":"text-gray"} cursor-pointer`} onClick={()=>{
             
              dispatch(allCat(true))
              setActiveCategory("")
            }}>All</li>
            {CATEGORIES.map((cat) => (                   
              <li key={cat}>
                <button className={`text-[15px]  capitalize cursor-pointer ${ActiveCategory==cat&&"!text-black"} transition-colors text-gray `} onClick={()=>handleActiveCategory(cat)}>
                  {cat}
                </button>
              </li>
       
            ))}
          </ul>
        )}
      </div>

      {/* Color */}
 

      {/* Sizes */}
      <div className="border-b border-gray-200 py-6">
        <SectionHeader
          title="Sizes"
          open={openSections.sizes}
          onToggle={() => toggleSection("sizes")}
        />
        {openSections.sizes && (
          <div className="mt-4 flex flex-wrap gap-3">
            {SIZES.map((size) => {
              const active = selectedSizes.includes(size);
              return (
                <button
                  key={size}
                  onClick={() => toggleSize(size)}
                  className={`flex cursor-pointer h-11 w-16 items-center justify-center border text-sm transition-colors ${
                    active
                      ? "border-primary bg-primary text-white"
                      : "border-gray-300 text-primary hover:border-primary"
                  }`}
                >
                  {size}
                </button>
              );
            })}
          </div>
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
              {filteredBrands.map((brand) => (
                <li key={brand.name} className="flex items-center justify-between">
                  <label className="flex cursor-pointer items-center gap-3 text-[15px] text-primary">
                    <input
                      type="checkbox"
                      checked={checkedBrands.includes(brand.name)}
                      onChange={() => toggleBrand(brand.name)}
                      className="h-4 w-4 rounded-none border-gray-300 text-primary accent-[#222222]"
                    />
                    {brand.name}
                  </label>
                  <span className="text-sm text-gray">{brand.count}</span>
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