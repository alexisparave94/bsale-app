import STORE from "./store.js";

function render(){
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
            ${ STORE.categories.map( cat => (
              `
                <li class="category-li">
                  <a href="#" class="category-link">
                    ${ cat.name }
                  </a>
                </li>
              `
            )).join("")}
          </ul>
        </div>
      </aside>
      <div class="products-container">
        ${ STORE.products.map( product => (
          `
            <div class="product-card">
              <div class="card-image">
                <img src="${product.url_image ? product.url_image : ""}">
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
        )).join("")}
      </div>
    </div>
  `;
}

const HomePage = {
  toString() {
    return render()
  },
  addListeners() {

  }
}

export default HomePage;