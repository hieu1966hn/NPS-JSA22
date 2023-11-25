console.log(products);

const divProducts = document.querySelector("#products")

for (let key of products) {
  divProducts.innerHTML += `
  <div class="card">
  <div class="image-container">
    <img src="" alt="Not Found">
    <div class="card-action">
      <button>Add To Card</button>
      <button>Quick View</button>
      <button>Wish list</button>
    </div>
  </div>
  <div class="container">
    <p></p>
    <h5></h5>
    <div class="stars"></div>
    <h6>
      <span>${key.oldPrice}<span>
      <span>${key.newPrice}</span>
    </h6>
  </div>

</div>
  `
}

