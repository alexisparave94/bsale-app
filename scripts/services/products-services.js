import apiBSaleClient from "./api-bsale-client.js";

export function getProducts(){
  return apiBSaleClient("products")
}

export function filterProducts(id){
  const endpoint = `categories/${id}/products`
  return apiBSaleClient(endpoint)
}

export function searchProducts(query){
  const endpoint = `search?query=${query}`
  return apiBSaleClient(endpoint)
}

export function getCategories(){
  return apiBSaleClient("categories")
}