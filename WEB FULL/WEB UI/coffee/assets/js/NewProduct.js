document.addEventListener("DOMContentLoaded", () => {
    const productListNew = document.querySelector('.product-list-new');
  
    const products = [
        { "id": 1,
          "name": "Brown Sugar Cream Cold Brew", 
          "Category":"Coffee",
          "price": 200, 
          "image": "assets/img/products/product-1.png" },
  
        { "id": 2, 
          "name": "Mocha Frappuccino", 
          "Category":"Coffee",
          "price": 250,
          "image": "assets/img/products/product-2.png" },
  
        { "id": 3,
          "name": "Cold Brew",
          "Category":"Coffee",
          "price": 290,
          "image": "assets/img/products/product-3.png" },
  
        { "id": 4, 
          "name": "Cold Brew with Milk",
          "Category":"Coffee",
          "price": 200,
          "image": "assets/img/products/product-4.png" },
  
        { "id": 5, 
          "name": "Dark Mocha Frappuccino",
          "Category":"Coffee",
          "price": 300,
          "image": "assets/img/products/product-5.png" },
  
        { "id": 6,
          "name": "Espresso Frappuccino",
          "Category":"Coffee",
          "price": 200,
          "image": "assets/img/products/product-6.png" },
  
        { "id": 7,
          "name": "Chai Cream Frappuccino", 
          "Category":"Coffee",
          "price": 200, 
          "image": "assets/img/products/product-7.png" },
  
        { "id": 8, 
          "name": "Chocolate Cream Frappuccino",
          "Category":"Coffee",
          "price": 200,
          "image": "assets/img/products/product-8.png" },
  
        { "id": 9,
          "name": "Chocolate Cream Frappuccino",
          "Category":"Coffee",
          "price": 200,
          "image": "assets/img/products/product-9.png" },
  
        { "id": 10,
          "name": "Chocolate Cream Frappuccino",
          "Category":"Coffee",
          "price": 200,
          "image": "assets/img/products/product-10.png" },
  
        { "id": 11,
          "name": "Chocolate Cream Frappuccino",
          "Category":"Coffee",
          "price": 200,
          "image": "assets/img/products/product-11.png" },
  
        { "id": 12,
          "name": "Chocolate Cream Frappuccino", 
          "Category":"Coffee",
          "price": 200, 
          "image": "assets/img/products/product-12.png" },
  
        { "id": 13,
          "name": "Chocolate Cream Frappuccino", 
          "Category":"Coffee",
          "price": 200, 
          "image": "assets/img/products/product-13.png" },
  
        { "id": 14, 
          "name": "Chocolate Cream Frappuccino",
          "Category":"Coffee",
          "price": 200, 
          "image": "assets/img/products/product-14.png" },
  
        { "id": 15,
          "name": "Chocolate Cream Frappuccino", 
          "Category":"Coffee",
          "price": 200,
          "image": "assets/img/products/product-15.png" },
  
        { "id": 16,
          "name": "Chocolate Cream Frappuccino", 
          "Category":"Coffee",
          "price": 200, 
          "image": "assets/img/products/product-16.png" },
  
        { "id": 17, 
          "name": "Chocolate Cream Frappuccino", 
          "Category":"Coffee",
          "price": 200,
          "image": "assets/img/products/product-17.png" },
  
        { "id": 18,
          "name": "Chocolate Cream Frappuccino", 
          "Category":"Coffee",
          "price": 200, 
          "image": "assets/img/products/product-18.png" },
  
        { "id": 19, 
          "name": "Chocolate Cream Frappuccino",
          "Category":"Coffee",
          "price": 200,
          "image": "assets/img/products/product-19.png" },
  
        { "id": 20,
          "name": "Chocolate Cream Frappuccino",
          "Category":"Coffee",
          "price": 200,
          "image": "assets/img/products/product-20.png" },
  
        { "id": 21,
          "name": "Chocolate Cream Frappuccino",
          "Category":"Coffee",
          "price": 200,
          "image": "assets/img/products/product-21.png" },
  
        { "id": 22,
          "name": "Chocolate Cream Frappuccino",
          "Category":"Coffee",
          "price": 200,
          "image": "assets/img/products/product-22.png" },
          
        { "id": 23,
          "name": "Chocolate Cream Frappuccino",
          "Category":"Coffee",
          "price": 200,
          "image": "assets/img/products/product-23.png" },
  
        { "id": 24,
          "name": "Chocolate Cream Frappuccino",
          "Category":"Coffee",
          "price": 200,
          "image": "assets/img/products/product-24.png" },
  
        { "id": 25,
          "name": "Chocolate Cream Frappuccino",
          "Category":"Coffee",
          "price": 200,
          "image": "assets/img/products/product-25.png" },
  
        { "id": 26,
          "name": "Chocolate Cream Frappuccino",
          "Category":"Coffee",
          "price": 200,
          "image": "assets/img/products/product-26.png" },
  
        { "id": 27,
          "name": "Chocolate Cream Frappuccino",
          "Category":"Coffee",
          "price": 200,
          "image": "assets/img/products/product-27.png" },

        { "id": 28,
          "name": "Chocolate Cream Frappuccino",
          "Category":"Coffee",
          "price": 200,
          "image": "assets/img/products/product-28.png" },

        { "id": 29,
          "name": "Chocolate Cream Frappuccino",
          "Category":"Coffee",
          "price": 200,
          "image": "assets/img/products/product-29.png" },

        { "id": 30,
          "name": "Chocolate Cream Frappuccino",
          "Category":"Coffee",
          "price": 200,
          "image": "assets/img/products/product-30.png" },

        { "id": 31,
          "name": "Chocolate Cream Frappuccino",
          "price": 200,
          "image": "assets/img/products/product-31.png" },

        { "id": 32,
          "name": "Chocolate Cream Frappuccino",
          "price": 200,
          "image": "assets/img/products/product-32.png" },

        { "id": 33,
          "name": "Chocolate Cream Frappuccino",
          "price": 200,
          "image": "assets/img/products/product-33.png" },

        { "id": 34,
          "name": "Chocolate Cream Frappuccino",
          "price": 200,
          "image": "assets/img/products/product-34.png" },

        { "id": 35,
          "name": "Chocolate Cream Frappuccino",
          "price": 200,
          "image": "assets/img/products/product-35.png" },

        { "id": 36,
          "name": "Chocolate Cream Frappuccino",
          "price": 200,
          "image": "assets/img/products/product-36.png" },

        { "id": 37,
          "name": "Chocolate Cream Frappuccino",
          "price": 200,
          "image": "assets/img/products/product-37.png" },

        { "id": 38,
          "name": "Chocolate Cream Frappuccino",
          "price": 200,
          "image": "assets/img/products/product-38.png" },

        { "id": 39,
          "name": "Chocolate Cream Frappuccino",
          "price": 200,
          "image": "assets/img/products/product-39.png" },

        { "id": 40,
          "name": "Chocolate Cream Frappuccino",
          "price": 200,
          "image": "assets/img/products/product-40.png" },

        { "id": 41,
          "name": "Chocolate Cream Frappuccino",
          "price": 200,
          "image": "assets/img/products/product-41.png" },

        { "id": 42,
          "name": "Chocolate Cream Frappuccino",
          "price": 200,
          "image": "assets/img/products/product-42.png" },

        { "id": 43,
          "name": "Chocolate Cream Frappuccino",
          "price": 200,
          "image": "assets/img/products/product-43.png" },

        { "id": 44,
          "name": "Chocolate Cream Frappuccino",
          "price": 200,
          "image": "assets/img/products/product-44.png" },

        { "id": 45,
          "name": "Chocolate Cream Frappuccino",
          "price": 200,
          "image": "assets/img/products/product-45.png" },

        { "id": 46,
          "name": "Chocolate Cream Frappuccino",
          "price": 200,
          "image": "assets/img/products/product-46.png" },

        { "id": 47,
          "name": "Chocolate Cream Frappuccino",
          "price": 200,
          "image": "assets/img/products/product-47.png" },

        { "id": 48,
          "name": "Chocolate Cream Frappuccino",
          "price": 200,
          "image": "assets/img/products/product-48.png" },

        { "id": 49,
          "name": "Chocolate Cream Frappuccino",
          "price": 200,
          "image": "assets/img/products/product-49.png" },

        { "id": 50,
          "name": "Chocolate Cream Frappuccino",
          "price": 200,
          "image": "assets/img/products/product-50.png" },

        { "id": 51,
          "name": "Chocolate Cream Frappuccino",
          "price": 200,
          "image": "assets/img/products/product-51.png" },

        { "id": 52,
          "name": "Chocolate Cream Frappuccino",
          "price": 200,
          "image": "assets/img/products/product-52.png" }
                    
      ];

    products.slice(0, 8).forEach(product => {
      const productHTML = `
        <div class="col-6 col-md-4 col-lg-3">
          <div class="card mb-7">
            <div class="badge bg-dark card-badge card-badge-start text-uppercase">
              New
            </div>
            <div class="card-img">
              <a class="card-img-hover" href="product.html">
                <img class="product-image card-img-top card-img-back" src="${product.image}" alt="${product.name}" />
                <img class="card-img-top card-img-front" src="${product.image}" alt="${product.name}" />
              </a>
              <div class="card-actions">
                <span class="card-action">
                  <button class="add-to-cart-btn btn btn-xs btn-circle btn-white-primary" data-toggle="button" onclick="addProductToCart()">
                    <img width="20" height="20" src="https://img.icons8.com/fluency-systems-regular/48/shopping-cart--v1.png" alt="shopping-cart--v1"/>
                  </button>
                </span>
                <span class="card-action">
                  <button class="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                    <img width="20" height="20" src="https://img.icons8.com/fluency-systems-regular/48/like--v1.png" alt="like--v1"/>
                  </button>
                </span>
              </div>
            </div>
            <div class="card-body px-0">
              <div class="fs-xs">
                <a class="text-muted" href="shop.html">${product.Category}</a>
              </div>
              <div class="fw-bold">
                <a class="product-name text-body" href="product.html">${product.name}</a>
              </div>
              <div class="product-price fw-bold text-muted">රු${product.price}.00</div>
            </div>
          </div>
        </div>
      `;
      productListNew.innerHTML += productHTML;
    });


  });

