import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filter: [],
  options: {
    category: "",
    brands: [],
    minPrice: null,
    maxPrice: null,
    sort: "default",
  },
};

const getFilteredProducts = (products, options) => {
  const filtered = products.filter((product) => {
    const matchesCategory =
      !options.category || product.category === options.category;
    const matchesBrand =
      options.brands.length === 0 || options.brands.includes(product.brand);
    const matchesMinPrice =
      options.minPrice === null || product.price >= options.minPrice;
    const matchesMaxPrice =
      options.maxPrice === null || product.price <= options.maxPrice;

    return (
      matchesCategory && matchesBrand && matchesMinPrice && matchesMaxPrice
    );
  });

  return [...filtered].sort((first, second) => {
    if (options.sort === "low") return first.price - second.price;
    if (options.sort === "high") return second.price - first.price;
    return 0;
  });
};

export const counterSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products = action.payload;
      state.filter = getFilteredProducts(action.payload, state.options);
    },
    filterProduct: (state, action) => {
      state.filter = action.payload;
    },
    setShopOptions: (state, action) => {
      state.options = { ...state.options, ...action.payload };
      state.filter = getFilteredProducts(state.products, state.options);
    },
    resetShopOptions: (state) => {
      state.options = { ...initialState.options };
      state.filter = [...state.products];
    },
    allCat: (state, action) => {
      state.AllCat = action.payload;
    },
  },
});

export const {
  addProduct,
  filterProduct,
  allCat,
  setShopOptions,
  resetShopOptions,
} = counterSlice.actions;
export default counterSlice.reducer;
