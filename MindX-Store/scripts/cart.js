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
    ).join("")

      }
        </table>

        <div>
          <div class="coupon-code">
            <p>Coupon Code: </p>
            <div>
              <form>
                <input type="text" placeholder="Enter Coupon Code" />
                <button>Apply</button>
              </form>
              <button onclick="local.Storage.removeItem('cart'); displayCart();">Clear Cart</button>
            </div>
          </div>
        </div>
      </div>

      <div class="checkout-wrapper">
        <div class="checkout-top">
          <span>Subtotal</span>
          <span id="subtotal">$${subTotal}</span>
        </div>

        <div class="checkout-shipping">
          <h4>Shipping</h4>
          <div>
            <input type="radio" id="flat_rate" name="shipping" ${extraFee === 20 ? "checked" : ''} />
            <label for="flat_rate">Flat rate: <span>$20.00</span></label>
          </div>

          <div>
            <input type="radio" id="local_pickup" name="shipping" ${extraFee === 25 ? "checked" : ''} />
            <label for="local_pickup">Flat rate: <span>$25.00</span></label>
          </div>

          <div>
            <input type="radio" id="free_shipping" name="shipping" ${extraFee === 0 ? "checked" : ''} />
            <label for="free_shipping">Free shipping</label>
          </div>
        </div>

        <div class="checkout-total"> 
          <span>Total</span><span>$${subTotal + extraFee}</span>
        </div>

        <div class="checkout-proceed">
          <a href="" onclick="alert('Purchased successfully'); localStorage.removeItem('cart'); displayCart();">
          Proceed to Checkout</a>
        </div>
      </div>
    </div>
    `
  }
}

displayCart();

