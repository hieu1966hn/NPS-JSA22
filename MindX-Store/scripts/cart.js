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

        </table>
      </div>
    </div>
    `
  }
}


displayCart();

