import DOMHandler from "./scripts/dom-handler.js";
import HomePage from "./scripts/home-page.js";
import STORE from "./scripts/store.js";

async function init(){
  try {
    await STORE.fetchProducts()
    await STORE.fetchCategories()
    STORE.errors = null
    DOMHandler.load(HomePage)
  } catch (error) {
    console.log(error)
    STORE.errors = error.message
    DOMHandler.load(HomePage)
  }
}

init()