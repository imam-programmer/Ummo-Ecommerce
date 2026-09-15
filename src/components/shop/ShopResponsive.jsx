import { useState, useMemo, useEffect, useRef } from "react";
// import { SlidersHorizontal, Heart, X, ChevronDown, Check } from "lucide-react";

import { CiHeart } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import { IoChevronDown } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import Product from "../layout/common/Product";

/* ------------------------------------------------------------------
   Data
------------------------------------------------------------------ */

const NAV = [
  "#STAYHOME",
  "New In",
  "Jackets",
  "Hoddies",
  "Men",
  "Women",
  "Trousers",
  "Accessories",
  "Shoes",
];

const CATEGORIES = ["Dresses", "Jackets", "Hoddies", "Trousers", "Shoes", "Accessories"];
const SIZES = ["XS", "S", "M", "L", "XL"];
const COLORS = [
  { name: "Black", hex: "#1a1a1a" },
  { name: "Stone", hex: "#c9c5bd" },
  { name: "Olive", hex: "#6b7256" },
  { name: "Rust", hex: "#a75c3c" },
  { name: "Ivory", hex: "#f2efe9" },
  { name: "Denim", hex: "#4a6076" },
];

const NAMES = [
  "Colorful Jacket",
  "Shirt In Botanical Cheetah Print",
  "Cableknit Shawl",
  "Calvin Shorts",
  "Oversized Wool Coat",
  "Ribbed Turtleneck",
  "Pleated Midi Skirt",
  "Canvas Utility Vest",
  "Cropped Denim Jacket",
  "Linen Camp Shirt",
  "Quilted Bomber",
  "Wide Leg Trouser",
  "Merino Crew Sweater",
  "Padded Anorak",
  "Silk Slip Dress",
  "Corduroy Overshirt",
  "Tailored Blazer",
  "Fleece Half Zip",
  "Boxy Hooded Sweat",
  "Panelled Track Pant",
];

const TOTAL_ITEMS = 497;
const PAGE_SIZE = 36;

// Deterministic pseudo-random so the catalogue is stable across renders.
function seeded(n) {
  const x = Math.sin(n * 9973.17) * 10000;
  return x - Math.floor(x);
}

function buildCatalogue() {
  return Array.from({ length: TOTAL_ITEMS }, (_, i) => {
    const r = seeded(i + 1);
    const r2 = seeded(i + 501);
    const r3 = seeded(i + 1001);
    return {
      id: i,
      name: NAMES[i % NAMES.length],
      category: CATEGORIES[Math.floor(r * CATEGORIES.length)],
      price: [99, 45, 839, 289, 129, 65, 410, 189, 76, 950][Math.floor(r2 * 10)],
      sizes: SIZES.filter((_, si) => seeded(i * 10 + si) > 0.35),
      color: COLORS[Math.floor(r3 * COLORS.length)].name,
      inStock: r3 > 0.18,
      addedAt: TOTAL_ITEMS - i,
      art: Math.floor(r2 * 4),
    };
  });
}

/* ------------------------------------------------------------------
   Placeholder artwork — the grey geometric tiles from the mockup
------------------------------------------------------------------ */


/* ------------------------------------------------------------------
   Small building blocks
------------------------------------------------------------------ */

function CheckRow({ label, checked, onChange, trailing }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 py-2 text-sm text-neutral-700 hover:text-black">
      <span
        className={`flex h-4 w-4 flex-none items-center justify-center border transition-colors ${
          checked ? "border-black bg-black" : "border-neutral-400 bg-white"
        }`}
      >
        {checked && <IoMdCheckmark className="h-3 w-3 text-white" strokeWidth={3} />}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span className="flex-1">{label}</span>
      {trailing}
    </label>
  );
}

function FilterGroup({ title, children }) {
  return (
    <div className="border-b border-neutral-200 py-5">
      <h3 className="mb-2 text-xs font-semibold tracking-[0.18em] text-black">{title}</h3>
      {children}
    </div>
  );
}

function Chip({ label, onRemove }) {
  return (
    <span className="inline-flex items-center gap-1.5 border border-neutral-300 px-2.5 py-1 text-xs text-neutral-700">
      {label}
      <button
        onClick={onRemove}
        aria-label={`Remove ${label}`}
        className="text-neutral-500 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
      >
        <CiTrash className="h-3 w-3" />
      </button>
    </span>
  );
}

/* ------------------------------------------------------------------
   Sort dropdown
------------------------------------------------------------------ */

const SORTS = [
  { id: "default", label: "Default sorting" },
  { id: "new", label: "Newest first" },
  { id: "price-asc", label: "Price: low to high" },
  { id: "price-desc", label: "Price: high to low" },
  { id: "name", label: "Name A–Z" },
];


/* ------------------------------------------------------------------
   Product card
------------------------------------------------------------------ */

// function ProductCard({ product, saved, onToggleSave }) {
//   return (
//     <article className="group">
//       <div className="relative overflow-hidden bg-neutral-200">
//         <Placeholder variant={product.art} />
//         {!product.inStock && (
//           <span className="absolute left-3 top-3 bg-white px-2 py-1 text-[10px] font-medium uppercase tracking-widest">
//             Sold out
//           </span>
//         )}
//       </div>

//       <div className="mt-3 flex items-start justify-between gap-2">
//         <div className="min-w-0">
//           <p className="text-[11px] text-neutral-500">{product.category}</p>
//           <h2 className="truncate text-sm text-black">{product.name}</h2>
//           <p className="mt-1 text-sm text-black">${product.price}</p>
//         </div>

//         <button
//           onClick={() => onToggleSave(product.id)}
//           aria-pressed={saved}
//           aria-label={saved ? `Remove ${product.name} from saved` : `Save ${product.name}`}
//           className="flex-none p-1 text-neutral-500 transition-colors hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
//         >
//           <CiHeart className={`h-4 w-4 ${saved ? "fill-black text-black" : ""}`} />
//         </button>
//       </div>
//     </article>
//   );
// }

/* ------------------------------------------------------------------
   Page
------------------------------------------------------------------ */

export default function ShopResponsive() {
  const catalogue = useMemo(buildCatalogue, []);

  const [filterOpen, setFilterOpen] = useState(false);
  const [sort, setSort] = useState("default");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [saved, setSaved] = useState(() => new Set());

  const [categories, setCategories] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [inStockOnly, setInStockOnly] = useState(false);

  const toggle = (setter) => (value) =>
    setter((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));

  const filtered = useMemo(() => {
    const list = catalogue.filter((p) => {
      if (categories.length && !categories.includes(p.category)) return false;
      if (sizes.length && !sizes.some((s) => p.sizes.includes(s))) return false;
      if (colors.length && !colors.includes(p.color)) return false;
      if (p.price > maxPrice) return false;
      if (inStockOnly && !p.inStock) return false;
      return true;
    });

    const sorted = [...list];
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    if (sort === "name") sorted.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "new") sorted.sort((a, b) => b.addedAt - a.addedAt);
    return sorted;
  }, [catalogue, categories, sizes, colors, maxPrice, inStockOnly, sort]);

  // Any change to the filters or sort puts the grid back to the first page.
  useEffect(() => {
    setVisible(PAGE_SIZE);
  }, [categories, sizes, colors, maxPrice, inStockOnly, sort]);

  // Escape closes the filter panel.
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setFilterOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const shown = filtered.slice(0, visible);
  const activeCount =
    categories.length + sizes.length + colors.length + (inStockOnly ? 1 : 0) + (maxPrice < 1000 ? 1 : 0);

  function clearAll() {
    setCategories([]);
    setSizes([]);
    setColors([]);
    setMaxPrice(1000);
    setInStockOnly(false);
  }

  function toggleSave(id) {
    setSaved((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  return (
    <div className="min-h-screen bg-white text-black antialiased">
 

      {/* Toolbar */}
      <div className="mx-auto max-w-6xl px-4">
        

        {activeCount > 0 && (
          <div className="flex flex-wrap items-center gap-2 py-4">
            {categories.map((c) => (
              <Chip key={c} label={c} onRemove={() => toggle(setCategories)(c)} />
            ))}
            {sizes.map((s) => (
              <Chip key={s} label={`Size ${s}`} onRemove={() => toggle(setSizes)(s)} />
            ))}
            {colors.map((c) => (
              <Chip key={c} label={c} onRemove={() => toggle(setColors)(c)} />
            ))}
            {maxPrice < 1000 && (
              <Chip label={`Under $${maxPrice}`} onRemove={() => setMaxPrice(1000)} />
            )}
            {inStockOnly && <Chip label="In stock" onRemove={() => setInStockOnly(false)} />}
            <button
              onClick={clearAll}
              className="ml-1 text-xs underline underline-offset-4 hover:opacity-70"
            >
              Clear all
            </button>
          </div>
        )}
      </div>

      {/* Grid */}
      <main className="mx-auto max-w-6xl px-4 py-6">
        {shown.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-base">Nothing matches these filters.</p>
            <button
              onClick={clearAll}
              className="mt-3 border-b border-black pb-0.5 text-xs font-medium uppercase tracking-[0.15em] hover:opacity-70"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
            {shown.map((p) => (
              <Product
                key={p.id}
                item={p}
                saved={saved.has(p.id)}
                onToggleSave={toggleSave}
              />
            ))}
          </div>
        )}

        {/* Progress + load more */}
        {shown.length > 0 && (
          <div className="mx-auto mt-14 max-w-sm text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.12em]">
              Showing {shown.length} of {filtered.length} items
            </p>

            <div
              className="mt-3 h-1 w-full bg-neutral-200"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={filtered.length}
              aria-valuenow={shown.length}
            >
              <div
                className="h-1 bg-black transition-all duration-300"
                style={{ width: `${(shown.length / filtered.length) * 100}%` }}
              />
            </div>

            {visible < filtered.length ? (
              <button
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="mt-7 border-b-2 border-black pb-1 text-xs font-semibold uppercase tracking-[0.15em] hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                Show more
              </button>
            ) : (
              <p className="mt-7 text-xs uppercase tracking-[0.15em] text-neutral-500">
                You've reached the end
              </p>
            )}
          </div>
        )}
      </main>

      {/* Filter panel */}
      {filterOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={() => setFilterOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Filter products"
        className={`fixed left-0 top-0 z-50 flex h-full w-[86%] max-w-sm flex-col bg-white shadow-xl transition-transform duration-300 ${
          filterOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em]">Filter</h2>
          <button
            onClick={() => setFilterOpen(false)}
            aria-label="Close filters"
            className="p-1 hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            <CiTrash className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5">
          <FilterGroup title="CATEGORY">
            {CATEGORIES.map((c) => (
              <CheckRow
                key={c}
                label={c}
                checked={categories.includes(c)}
                onChange={() => toggle(setCategories)(c)}
                trailing={
                  <span className="text-xs text-neutral-400">
                    {catalogue.filter((p) => p.category === c).length}
                  </span>
                }
              />
            ))}
          </FilterGroup>

    


          <FilterGroup title="PRICE">
            <input
              type="range"
              min={45}
              max={1000}
              step={5}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="mt-2 w-full accent-black"
              aria-label="Maximum price"
            />
            <div className="flex justify-between text-xs text-neutral-600">
              <span>$45</span>
              <span className="font-medium text-black">Up to ${maxPrice}</span>
            </div>
          </FilterGroup>

    
        </div>

        <div className="flex items-center gap-3 border-t border-neutral-200 px-5 py-4">
          <button
            onClick={clearAll}
            className="flex-1 border border-black py-3 text-xs font-medium uppercase tracking-[0.15em] hover:bg-neutral-100"
          >
            Clear all
          </button>
          <button
            onClick={() => setFilterOpen(false)}
            className="flex-1 bg-black py-3 text-xs font-medium uppercase tracking-[0.15em] text-white hover:opacity-90"
          >
            Show {filtered.length} items
          </button>
        </div>
      </aside>
    </div>
  );
}