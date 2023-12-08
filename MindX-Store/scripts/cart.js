// if not logged in, redirect to login page
// if (!localStorage.getItem("currentUser")) {
//   location.href = '../html/login.html'
// }

function displayCart() {
  const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
  //// Sử dụng toán tử 3 ngôi để lấy giữ liệu giỏ hàng về

  if (cart.length === 0) {
    document.getElementById("cart-container")
      .innerHTML = `
    <h4 class="empty-warning">Your cart is empty</h4>
    `
  }
  else {
    document.getElementById("cart-container").innerHTML = `
    <h2>Shopping Cart</h2>
    <p>Home * Shopping Cart</p>

    <div>
      <div style="flex:1;">
        <table>
            <thead>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </thead>
            ${cart.map(
      (product) =>
        `
                <tr>
                  <td>
                    <div class="product-cell">
                      <img src ="../assets/products/${product.image}" alt="Not found"/>
                      <p>${product.name}</p>
                    </div>
                  </td>

                  <td>${product.newPrice}</td>

                  <td>
                    <div class="quantity-cell">
                      <button onclick="removeFromCart('${product.id}'); displayCart()">
                        <i class="fa-solid fa-minus"></i>
                      </button>
                      <span>${product.quantity}</span>
                      <button onclick="addToCart('${product.id}'); displayCart()">
                        <i class="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </td>

                  <td>
                    <button class="remove-from-cart" onclick="removeFromCart('${product.id}', 'all'); displayCart()">
                      <i class="fa-solid fa-x">Remove</i>
                    </button>
                  </td>
                </tr>
                `
    )

      }
        </table>
      </div>
    </div>
    `
  }
}

displayCart();

