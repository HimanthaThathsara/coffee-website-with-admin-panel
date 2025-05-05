let cartArray = [];

    const TotalPrice = document.querySelector('.total-price');
    const cartItemInNav = document.querySelector('.cartItemInNav');
    let ProductPriceTotal;
    let cartItem ;

    function addProductToCart() {
      let productImage = document.querySelector('.product-image').src;
      let productName = document.querySelector('.product-name').textContent;
      let productPrice = document.querySelector('.product-price').textContent;
      cartItem = document.createElement('li');
      cartItem.classList.add('list-group-item');
      cartItem.innerHTML = `
        <div class="row align-items-center">
            <div class="col-4">
              <!-- Image -->
              <a href="product.html">
                <img
                  class="img-fluid"
                  src="${productImage}"
                  alt="..."
                />
              </a>
            </div>
            <div class="col-8">
              <!-- Title -->
              <p class="fs-sm fw-bold mb-6">
                <a class="text-body" href="product.html">${productName}</a> <br />
                <span class="text-muted">${productPrice}</span>
              </p>

              <!--Footer -->
              <div class="d-flex align-items-center">
                <!-- Select -->
                <select class="form-select form-select-xxs w-auto">
                  <option value="1">1</option>
                  <option value="1">2</option>
                  <option value="1">3</option>
                </select>

                <!-- Remove -->
                <a class="remove-cart-item fs-xs text-gray-500 ms-auto" href="#!" onclick="removeItemFromCart()">
                  <i class="bi bi-x-lg"></i> Remove
                </a>
              </div>
            </div>
          </div>
      `;
      let listGroup = document.querySelector('.list-group');
      listGroup.appendChild(cartItem);
      cartArray.push(cartItem);

      cartArray.forEach(element => {
        ProductPriceTotal = cartArray.length * 200;
      });

      if (cartArray.length == 0) {
        TotalPrice.innerHTML = "රු 0.00";
        let ItemsInCartShow = 0;
        document.querySelector('.cartItemInNav').setAttribute('data-cart-items', ItemsInCartShow);
      } 
      else {
          TotalPrice.innerHTML = "රු " + ProductPriceTotal + ".00";
          let ItemsInCartShow = cartArray.length;
          document.querySelector('.cartItemInNav').setAttribute('data-cart-items', ItemsInCartShow);
      }
    }

    function removeItemFromCart() {
      let listGroupItem = document.querySelector('.list-group-item');
      listGroupItem.remove();
      cartArray.pop(cartItem);

      cartArray.forEach(element => {
        ProductPriceTotal = cartArray.length * 200;
      });

      if (cartArray.length == 0) {
          TotalPrice.innerHTML = "රු 0.00";
          let ItemsInCartShow = 0;
          document.querySelector('.cartItemInNav').setAttribute('data-cart-items', ItemsInCartShow);
      } 
      else {
          TotalPrice.innerHTML = "රු " + ProductPriceTotal + ".00";
          let ItemsInCartShow = cartArray.length;
          document.querySelector('.cartItemInNav').setAttribute('data-cart-items', ItemsInCartShow);
      }
}
