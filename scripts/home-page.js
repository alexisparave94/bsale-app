import DOMHandler from "./dom-handler.js";
import { filterProducts } from "./services/products-services.js";
import STORE from "./store.js";

function render(){
  const current_category = STORE.current_category
  return `
    <header>
      <div class="header-container">
        <h1>Bsale</h1>
      <div>
    </header>
    <div class="main-container">
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
      <div class="products-container">
        ${ current_category ? STORE.filter_products.map(renderProducts).join("") : STORE.products.map(renderProducts).join("") }
      </div>
    </div>
  `;
}

function renderProducts(product){
  return `
    <div class="product-card">
      <div class="card-image">
        ${product.url_image ? 
          `
            <img src="${product.url_image}">
          `
          :
          `
            <div class="no-image">
              <p>NO HAY IMAGEN DISPONIBLE</p>
            </div>
          `
        }
        <img src="">
      </div>
      <div class="card-content">
        <h3>${product.name}</h3>
        ${ !product.discount ?
          `
            <p>
              S/ ${(product.price/100).toFixed(2)}
              <span> </span>
            </p>
          `
          :
          `
            <p>
              S/ ${ (product.price*(100-product.discount)/10000).toFixed(2) }
              <span> S/ ${(product.price/100).toFixed(2)} </span>
            </p>
          `
        }
      </div>
      <div class="card-button">
        <button class="button" type=""> Añadir </button>
      </div>
    </div>
  `
}

function listenLinkCategory(){
  const linkCategory = document.querySelector(".list-categories")
  linkCategory.addEventListener("click", async (e) => {
    e.preventDefault()
    STORE.current_category = Number(e.target.dataset.id)
    STORE.filter_products = await filterProducts(STORE.current_category)
    DOMHandler.reload()
  })
}

const HomePage = {
  toString() {
    return render()
  },
  addListeners() {
    listenLinkCategory()
  }
}

export default HomePage;