let getCategories = JSON.parse(localStorage.getItem("categories"));
console.log("categories: ", getCategories); ///??

let getProducts = JSON.parse(localStorage.getItem("products")); /// Lấy được ra data sản phẩm

////// render giá trị categories ra giao diện
const divCategories = document.getElementById("categories");
for (let key of getCategories) {
  divCategories.innerHTML += `
  <div class="category-card">
    <a href="">
      <img src="${key.image}" alt="">
    </a>
    <div class="category-container">
      <a href="">
        <h3>${key.name}</h3>
      </a>
      <a href="">
        <p>${key.quantity}</p>
      </a>
    </div>
  </div>
  `
}

////// Render data sản phẩm ra màn hình website
const divProducts = document.getElementById("products");
for (let key of getProducts) {
  divProducts.innerHTML += `
        <div class="card">
          <div class="image-container">
            <img src="${key.image}" alt="">
          </div>
          <div class="container">
            <p>${key.category}</p>
            <h5>${key.name}</h5>
            <div class="stars"></div>
            <h6>
              <span>${key.oldPrice}</span>
              <span>${key.newPrice}</span>
            </h6>
          </div>
        </div>
`
}