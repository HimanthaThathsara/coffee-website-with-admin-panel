function addProductToWishlist() {
    let productImage = document.querySelector('.product-image').src;
    let productName = document.querySelector('.product-name').textContent;
    let productPrice = document.querySelector('.product-price').textContent;
    let WishlistItem = document.createElement('div');
    WishlistItem.classList.add('list-group-wishlist-item');
    WishlistItem.innerHTML = `
            <div class="col-6 col-md-4">
              <div class="card mb-7">

                <div class="card-img">


                  <button class="btn btn-xs btn-circle btn-white-primary card-action card-action-end">
                    <i class="bi bi-x-lg"></i>
                  </button>


                  <button class="btn btn-xs w-100 btn-dark card-btn" data-bs-toggle="modal" data-bs-target="#modalProduct">
                    <i class="add-to-cart-btn3 me-2 mb-1"></i> Add To Cart
                  </button>


                  <img class="card-img-top" src="${productImage}" alt="...">

                </div>

                <div class="card-body fw-bold text-center">
                  <a class="text-body" href="product.html">${productName}</a> <br>
                  <span class="text-muted">${productPrice}</span>
                </div>

              </div>
            </div>`;
    let listGroup = document.querySelector('.list-group-wishlist');
    listGroup.appendChild(WishlistItem);
  }

  function removeItemFromWishlist() {
    let WishlistItem = document.querySelector('.list-group-wishlist-item');
    WishlistItem.remove();
    }
//     document.querySelector('.col-6 col-md-4').style.display = 'none';
//   }