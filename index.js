import DOMHandler from "./scripts/dom-handler.js";
import HomePage from "./scripts/home-page.js";
import STORE from "./scripts/store.js";

async function init(){
  await STORE.fetchProducts()
  await STORE.fetchCategories()
  DOMHandler.load(HomePage)
}

init()