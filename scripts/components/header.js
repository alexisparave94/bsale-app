import DOMHandler from "../dom-handler.js"
import { searchProducts } from "../services/products-services.js"
import STORE from "../store.js"

function render(){
  return `
    <header>
      <div class="header-container">
        <h1>Bsale</h1>
        <div class="search-container">
          <form class="search-form">
            <input class="search-input" type="text" placeholder="Nombre del producto" name="search">
            <button class="search-button" type="submit">
              <i class="ri-search-line"></i>
            </button>
          </form>
        </div>
      </div>
    </header>
  `
}

function listenSearch(){
  const searchForm = document.querySelector(".search-form")
  searchForm.addEventListener("submit",async (e) => {
    e.preventDefault()
    const { search } = e.target.elements
    STORE.query = search.value
    try {
      STORE.filter_products = await searchProducts(search.value)
      STORE.current_category = -1
      STORE.search = true
      STORE.errors = null
      DOMHandler.reload()
    } catch(error) {
      console.log(error)
      STORE.errors = error.message
      DOMHandler.reload()
    }
  })
}

const Header = {
  toString() {
    return render()
  },
  addListeners() {
    listenSearch()
  }
}

export default Header;