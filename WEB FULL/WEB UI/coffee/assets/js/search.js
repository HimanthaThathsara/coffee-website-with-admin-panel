let SearchInput;
      
      function SearchInputSubmitButton() {
        const products = [
      { "id": 1,
        "name": "Brown Sugar Cream Cold Brew", 
        "Category":"Coffee",
        "badge": "New",
        "price": 200,
        "offerPrice": 180,
        "image": "assets/img/products/product-1.png" },

      { "id": 2, 
        "name": "Mocha Frappuccino", 
        "Category":"Coffee",
        "badge": "Offer",
        "price": 250,
        "offerPrice": 180,
        "image": "assets/img/products/product-2.png" },

      { "id": 3,
        "name": "Cold Brew",
        "Category":"Coffee",
        "badge": false,
        "price": 290,
        "offerPrice": 180,
        "image": "assets/img/products/product-3.png" },

      { "id": 4, 
        "name": "Cold Brew with Milk",
        "Category":"Coffee",
        "badge": "Offer",
        "price": 200,
        "offerPrice": 180,
        "image": "assets/img/products/product-4.png" },

      { "id": 5, 
        "name": "Dark Mocha Frappuccino",
        "Category":"Coffee",
        "badge": false,
        "price": 300,
        "offerPrice": 180,
        "image": "assets/img/products/product-5.png" },

      { "id": 6,
        "name": "Espresso Frappuccino",
        "Category":"Coffee",
        "badge": false,
        "price": 200,
        "offerPrice": 180,
        "image": "assets/img/products/product-6.png" },

      { "id": 7,
        "name": "Chai Cream Frappuccino", 
        "Category":"Coffee",
        "badge": "New",
        "price": 200, 
        "offerPrice": 180,
        "image": "assets/img/products/product-7.png" },

      { "id": 8, 
        "name": "Chocolate Cream Frappuccino",
        "Category":"Coffee",
        "badge": false,
        "price": 200,
        "offerPrice": 180,
        "image": "assets/img/products/product-8.png" },

      { "id": 9,
        "name": "Chocolate Cream Frappuccino",
        "Category":"Coffee",
        "badge": false,
        "price": 200,
        "offerPrice": 180,
        "image": "assets/img/products/product-9.png" },

      { "id": 10,
        "name": "Chocolate Cream Frappuccino",
        "Category":"Coffee",
        "badge": false,
        "price": 200,
        "offerPrice": 180,
        "image": "assets/img/products/product-10.png" },

      { "id": 11,
        "name": "Chocolate Cream Frappuccino",
        "Category":"Coffee",
        "badge": "New",
        "price": 200,
        "offerPrice": 180,
        "image": "assets/img/products/product-11.png" },

      { "id": 12,
        "name": "Chocolate Cream Frappuccino", 
        "Category":"Coffee",
        "badge": false,
        "price": 200, 
        "offerPrice": 180,
        "image": "assets/img/products/product-12.png" },

      { "id": 13,
        "name": "Chocolate Cream Frappuccino", 
        "Category":"Coffee",
        "badge": "Offer",
        "price": 200, 
        "offerPrice": 180,
        "image": "assets/img/products/product-13.png" },

      { "id": 14, 
        "name": "Coffee Frappuccino",
        "Category":"Coffee",
        "badge": "Offer",
        "price": 200, 
        "offerPrice": 180,
        "image": "assets/img/products/product-14.png" },

      { "id": 15,
        "name": "Chocolate Cream Frappuccino", 
        "Category":"Coffee",
        "badge": false,
        "price": 200,
        "offerPrice": 180,
        "image": "assets/img/products/product-15.png" },

      { "id": 16,
        "name": "Chocolate Cream Frappuccino", 
        "Category":"Coffee",
        "badge": "New",
        "price": 200, 
        "offerPrice": 180,
        "image": "assets/img/products/product-16.png" },

      { "id": 17, 
        "name": "Chocolate Cream Frappuccino", 
        "Category":"Coffee",
        "badge": false,
        "price": 200,
        "offerPrice": 180,
        "image": "assets/img/products/product-17.png" },

      { "id": 18,
        "name": "Chocolate Cream Frappuccino", 
        "Category":"Coffee",
        "badge": false,
        "price": 200, 
        "offerPrice": 180,
        "image": "assets/img/products/product-18.png" },

      { "id": 19, 
        "name": "Chocolate Cream Frappuccino",
        "Category":"Coffee",
        "badge": "Offer",
        "price": 200,
        "offerPrice": 180,
        "image": "assets/img/products/product-19.png" },

      { "id": 20,
        "name": "Chocolate Cream Frappuccino",
        "Category":"Coffee",
        "badge": false,
        "price": 200,
        "offerPrice": 180,
        "image": "assets/img/products/product-20.png" },

      { "id": 21,
        "name": "Chocolate Cream Frappuccino",
        "Category":"Coffee",
        "badge": false,
        "price": 200,
        "offerPrice": 180,
        "image": "assets/img/products/product-21.png" },

      { "id": 22,
        "name": "Chocolate Cream Frappuccino",
        "Category":"Coffee",
        "badge": "Offer",
        "price": 200,
        "offerPrice": 180,
        "image": "assets/img/products/product-22.png" },

      { "id": 23,
        "name": "Chocolate Cream Frappuccino",
        "Category":"Coffee",
        "badge": false,
        "price": 200,
        "offerPrice": 180,
        "image": "assets/img/products/product-23.png" },

      { "id": 24,
        "name": "Chocolate Cream Frappuccino",
        "Category":"Coffee",
        "badge": false,
        "price": 200,
        "offerPrice": 180,
        "image": "assets/img/products/product-24.png" },

      { "id": 25,
        "name": "Chocolate Cream Frappuccino",
        "Category":"Coffee",
        "badge": "Offer",
        "price": 200,
        "offerPrice": 180,
        "image": "assets/img/products/product-25.png" },

      { "id": 26,
        "name": "Chocolate Cream Frappuccino",
        "Category":"Coffee",
        "badge": false,
        "price": 200,
        "offerPrice": 180,
        "image": "assets/img/products/product-26.png" },

      { "id": 27,
        "name": "Chocolate Cream Frappuccino",
        "Category":"Coffee",
        "badge": "Offer",
        "price": 200,
        "offerPrice": 180,
        "image": "assets/img/products/product-27.png" }
    ];
      
        SearchInput = document.querySelector('.nav-bar-search-input').value.toLowerCase();
        // console.log(SearchInput);
      
        let arraySearchProducts = [];
        const productListSearch = document.querySelector('.product-list-search');
        productListSearch.innerHTML = ''; // Clear previous search results
      
        products.forEach(product => {
          if (product.name.toLowerCase().includes(SearchInput) || product.Category.toLowerCase().includes(SearchInput)) {
            if(product.badge === false){
            const productHTML = `
              <div class="row align-items-center position-relative mb-10">
                <div class="col-4 col-md-3">
          
                  <!-- Image -->
                  <img class="img-fluid" src="${product.image}" alt="...">
          
                </div>
                <div class="col position-static">
          
                  <!-- Text -->
                  <p class="mb-0 fw-bold">
                    <a class="stretched-link text-body" href="product.html">${product.name}</a> <br>
                    <span class="text-muted">රු${product.price}.00</span>
                  </p>
          
                </div>
              </div>
                `;
            productListSearch.innerHTML += productHTML;
            arraySearchProducts.push(product.id);
            }
            else{
              const productHTML = `
              <div class="row align-items-center position-relative mb-10">
                <div class="col-4 col-md-3">
          
                  <!-- Image -->
                  <img class="img-fluid" src="${product.image}" alt="...">
          
                </div>
                <div class="col position-static">
          
                  <!-- Text -->
                  <p class="mb-0 fw-bold">
                    <a class="stretched-link text-body" href="product.html">${product.name}</a> <br>
                    <span class="fs-xs text-gray-350 text-decoration-line-through">රු${product.price}.00</span><br>
                    <span class="text-primary">රු${product.offerPrice}.00</span>
                  </p>
          
                </div>
              </div>
                `;
            productListSearch.innerHTML += productHTML;
            arraySearchProducts.push(product.id);
            }
          }
        });
      
        if (arraySearchProducts.length === 0) {
          const productHTML = `
            <div class="offcanvas-body">
              <p class="mb-3 fs-sm text-center">
                Nothing matches your search
              </p>
              <p class="mb-0 fs-sm text-center">
                😞
              </p>
            </div>
          `;
          productListSearch.innerHTML += productHTML;
        }
      }

