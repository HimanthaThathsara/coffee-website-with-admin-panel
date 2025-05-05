const products = [
    { "id": 1,
      "name": "Brown Sugar Cream Cold Brew", 
      "Category":"Coffee",
      "badge": "New",
      "price": 200,
      "offerPrice": 180,
      "image": "assets/img/products/product-1.png",
      "size" : "M",
      "quantity" : 1
    },

    { "id": 2, 
      "name": "Mocha Frappuccino", 
      "Category":"Coffee",
      "badge": "Offer",
      "price": 500,
      "offerPrice": 180,
      "image": "assets/img/products/product-2.png",
      "size" : "S",
      "quantity" : 2
    },

    { "id": 3,
      "name": "Cold Brew",
      "Category":"Coffee",
      "badge": false,
      "price": 600,
      "offerPrice": 180,
      "image": "assets/img/products/product-3.png",
      "size" : "L",
      "quantity" : 3
    }
    ];
  
    let checkoutItems = [...products]; // Clone the products array for the checkout list
    let totalPrice = 0;
    let tax = 0;
  
    function renderCheckoutList() {
      const checkoutList = document.querySelector('.checkout-list');
      checkoutList.innerHTML = '';
  
      checkoutItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.innerHTML = `
          <div class="row align-items-center">
            <div class="col-3">
              <a href="product.html">
                <img src="${item.image}" alt="..." class="img-fluid">
              </a>
            </div>
            <div class="col">
              <div class="d-flex mb-2 fw-bold">
                <a class="text-body text-uppercase" href="product.html">${item.name}</a> 
                <span class="ms-auto">රු ${item.price}.00</span>
              </div>
              <p class="mb-7 fs-sm text-muted">
                Size: ${item.size} <br> 
                Quantity: ${item.quantity}
              </p>
              <div class="d-flex align-items-center">
                <a class="fs-xs text-gray-500 ms-auto" href="#!" onclick="removeItemFromCheckout(${item.id})">
                  <i class="bi bi-x-lg"></i> Remove
                </a>
              </div>
            </div>
          </div>
        `;
        checkoutList.appendChild(listItem);
        updateTotalPrice();
      });
  
    }
  
    
    function updateTotalPrice() {        
      totalPrice = checkoutItems.reduce((total, item) => total + item.price, 0);
      document.querySelector('.subtotal').textContent = `රු ${totalPrice}`;
      tax = totalPrice * 0.05 ;
      document.querySelector('.tax').textContent = `රු ${(tax)}`;
      document.querySelector('.ChkectoutTotalPrice').textContent = `රු ${totalPrice + tax}` ;
    }
  
    function removeItemFromCheckout(id) {
      checkoutItems = checkoutItems.filter(item => item.id !== id);
      renderCheckoutList();
      if (checkoutItems.length == 0) {
        document.querySelector('.subtotal').textContent = `රු 0.00`;
        document.querySelector('.tax').textContent = `රු 0.00`;
        document.querySelector('.ChkectoutTotalPrice').textContent = `රු 0.00`;
      }
      
    }
  

    renderCheckoutList();