import { getProducts } from "./services/products-services.js";

async function fetchProducts(){
  return STORE.products = await getProducts()
}

const STORE = {
  products: [],
  fetchProducts
}

export default STORE