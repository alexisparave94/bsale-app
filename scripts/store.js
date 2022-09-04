import { getCategories, getProducts } from "./services/products-services.js";

async function fetchProducts(){
  return STORE.products = await getProducts()
}

async function fetchCategories(){
  return STORE.categories = await getCategories()
}

const STORE = {
  products: [],
  categories: [],
  filter_products: [],
  current_category: 0,
  fetchProducts,
  fetchCategories
}

export default STORE