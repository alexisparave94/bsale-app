import DOMHandler from "../dom-handler.js"
import { filterProducts } from "../services/products-services.js"
import STORE from "../store.js"

function render(){
  const current_category = STORE.current_category
  return ` 
    <aside class="categories-menu">
      <div class="menu-title">
        <h2>CATEGORIES</h2>
      </div>
      <div class="categories-container">
        <ul class="list-categories">
          <a 
            href="#" 
            class="category-link ${current_category == 0 ? "active-link" : "" }"
            data-id="0"
          >
            Todas las categorias
          </a>
          ${ STORE.categories.map( cat => (
            `
              <a href="#" class="category-link ${current_category == cat.id ? "active-link" : "" }" data-id="${cat.id }">
                ${ cat.name }
              </a>
            `
          )).join("")}
        </ul>
      </div>
    </aside>
  `
}

function listenLinkCategory(){
  const linkCategory = document.querySelector(".list-categories")
  linkCategory.addEventListener("click", async (e) => {
    e.preventDefault()
    STORE.current_category = Number(e.target.dataset.id)
    STORE.filter_products = await filterProducts(STORE.current_category)
    STORE.search = false
    DOMHandler.reload()
  })
}

const CategoriesMenu = {
  toString() {
    return render()
  },
  addListeners() {
    listenLinkCategory()
  }
}

export default CategoriesMenu;