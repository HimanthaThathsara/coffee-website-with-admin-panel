document.addEventListener('DOMContentLoaded', () => {
    let products = [ { "id": 1,
        "name": "LD01 LOUNGE CHAIR", 
        "Category":"Coffee",
        "badge": "New",
        "price": 200,
        "offerPrice": 180,
        "image": "assets/img/products/product-1.png" },

      { "id": 2, 
        "name": "LD02 LOUNGE CHAIR", 
        "Category":"Coffee",
        "badge": "Offer",
        "price": 250,
        "offerPrice": 180,
        "image": "assets/img/products/product-2.png" },

      { "id": 3,
        "name": "LD03 LOUNGE CHAIR",
        "Category":"Coffee",
        "badge": false,
        "price": 290,
        "offerPrice": 180,
        "image": "assets/img/products/product-3.png" },

      { "id": 4, 
        "name": "LD04 LOUNGE CHAIR",
        "Category":"Coffee",
        "badge": "Offer",
        "price": 200,
        "offerPrice": 180,
        "image": "assets/img/products/product-4.png" },

      { "id": 5, 
        "name": "LD05 LOUNGE CHAIR",
        "Category":"Coffee",
        "badge": false,
        "price": 300,
        "offerPrice": 180,
        "image": "assets/img/products/product-5.png" },

      { "id": 6,
        "name": "LD06 LOUNGE CHAIR",
        "Category":"Coffee",
        "badge": false,
        "price": 200,
        "offerPrice": 180,
        "image": "assets/img/products/product-6.png" },

      { "id": 7,
        "name": "LD07 LOUNGE CHAIR", 
        "Category":"Coffee",
        "badge": "New",
        "price": 200, 
        "offerPrice": 180,
        "image": "assets/img/products/product-7.png" },

      { "id": 8, 
        "name": "LD08 LOUNGE CHAIR",
        "Category":"Coffee",
        "badge": false,
        "price": 200,
        "offerPrice": 180,
        "image": "assets/img/products/product-8.png" },

      { "id": 9,
        "name": "LD08 LOUNGE CHAIR",
        "Category":"Coffee",
        "badge": false,
        "price": 200,
        "offerPrice": 180,
        "image": "assets/img/products/product-9.png" },

      { "id": 10,
        "name": "LD08 LOUNGE CHAIR",
        "Category":"Coffee",
        "badge": false,
        "price": 200,
        "offerPrice": 180,
        "image": "assets/img/products/product-10.png" },

      { "id": 11,
        "name": "LD08 LOUNGE CHAIR",
        "Category":"Coffee",
        "badge": "New",
        "price": 200,
        "offerPrice": 180,
        "image": "assets/img/products/product-11.png" },

      { "id": 12,
        "name": "LD08 LOUNGE CHAIR", 
        "Category":"Coffee",
        "badge": false,
        "price": 200, 
        "offerPrice": 180,
        "image": "assets/img/products/product-12.png" },

      { "id": 13,
        "name": "LD08 LOUNGE CHAIR", 
        "Category":"Coffee",
        "badge": "Offer",
        "price": 200, 
        "offerPrice": 180,
        "image": "assets/img/products/product-13.png" },

      { "id": 14, 
        "name": "LD0 LOUNGE CHAIR",
        "Category":"Coffee",
        "badge": "Offer",
        "price": 200, 
        "offerPrice": 180,
        "image": "assets/img/products/product-14.png" },

      { "id": 15,
        "name": "LD08 LOUNGE CHAIR", 
        "Category":"Coffee",
        "badge": false,
        "price": 200,
        "offerPrice": 180,
        "image": "assets/img/products/product-15.png" },

      { "id": 16,
        "name": "LD08 LOUNGE CHAIR", 
        "Category":"Coffee",
        "badge": "New",
        "price": 200, 
        "offerPrice": 180,
        "image": "assets/img/products/product-16.png" },

      { "id": 17, 
        "name": "LD08 LOUNGE CHAIR", 
        "Category":"Coffee",
        "badge": false,
        "price": 200,
        "offerPrice": 180,
        "image": "assets/img/products/product-17.png" },

      { "id": 18,
        "name": "LD08 LOUNGE CHAIR", 
        "Category":"Coffee",
        "badge": false,
        "price": 200, 
        "offerPrice": 180,
        "image": "assets/img/products/product-18.png" },

      { "id": 19, 
        "name": "LD08 LOUNGE CHAIR",
        "Category":"Coffee",
        "badge": "Offer",
        "price": 200,
        "offerPrice": 180,
        "image": "assets/img/products/product-19.png" },

      { "id": 20,
        "name": "LD08 LOUNGE CHAIR",
        "Category":"Coffee",
        "badge": false,
        "price": 200,
        "offerPrice": 180,
        "image": "assets/img/products/product-20.png" },

      { "id": 21,
        "name": "LD08 LOUNGE CHAIR",
        "Category":"Coffee",
        "badge": false,
        "price": 200,
        "offerPrice": 180,
        "image": "assets/img/products/product-21.png" },

      { "id": 22,
        "name": "LD08 LOUNGE CHAIR",
        "Category":"Coffee",
        "badge": "Offer",
        "price": 200,
        "offerPrice": 180,
        "image": "assets/img/products/product-22.png" },

      { "id": 23,
        "name": "LD08 LOUNGE CHAIR",
        "Category":"Coffee",
        "badge": false,
        "price": 200,
        "offerPrice": 180,
        "image": "assets/img/products/product-23.png" },

      { "id": 24,
        "name": "LD08 LOUNGE CHAIR",
        "Category":"Coffee",
        "badge": false,
        "price": 200,
        "offerPrice": 180,
        "image": "assets/img/products/product-24.png" },

      { "id": 25,
        "name": "LD08 LOUNGE CHAIR",
        "Category":"Coffee",
        "badge": "Offer",
        "price": 200,
        "offerPrice": 180,
        "image": "assets/img/products/product-25.png" },

      { "id": 26,
        "name": "LD08 LOUNGE CHAIR",
        "Category":"Coffee",
        "badge": false,
        "price": 200,
        "offerPrice": 180,
        "image": "assets/img/products/product-26.png" },

      { "id": 27,
        "name": "LD08 LOUNGE CHAIR",
        "Category":"Coffee",
        "badge": "Offer",
        "price": 200,
        "offerPrice": 180,
        "image": "assets/img/products/product-27.png" }
    ];

    let deleteProducts = [];

    const addProductButton = document.getElementById('addProductButton');
    const popupForm = document.getElementById('popupForm');
    const productForm = document.getElementById('productForm');
    const closePopup = document.getElementById('closePopup');
    const productList = document.getElementById('productList');
    const AllProductsCount = document.getElementById('All-Products');
    const AveregePrice = document.getElementById('Averege-price');
    const deleteProductCount = document.getElementById('Delete-Items');
    

    const editPopupForm = document.getElementById('editPopupForm');
    const editProductForm = document.getElementById('editProductForm');
    const editProductIndex = document.getElementById('editProductIndex');
    const editProductName = document.getElementById('editProductName');
    const editProductImage = document.getElementById('editProductImage');
    const editProductCategory = document.getElementById('editProductCategory');
    const editProductPrice = document.getElementById('editProductPrice');
    const editProductOfferPrice = document.getElementById('editProductOfferPrice');
    const closeEditPopup = document.getElementById('closeEditPopup');
    
    displayProducts();
    AllProducts();
    AveregePriceShow();
    deleteProductss();
    
    function displayProducts() {
        productList.innerHTML = '';
        products.forEach((product, index) => {
            const badgeRender = product.badge === false ? 
                `<span class="badge badge-primary" style="background-color: transparent;"></span>` 
                : 
                `<span class="badge badge-primary" style="background-color: black;">${product.badge}</span>`;
    
            const productElement = document.createElement('tr');
            productElement.innerHTML = `
                <td>
                    <img src="${product.image}" alt="image" style="border-radius: 50%; width: 50px; height: 50px;">
                </td>
                <td>
                    ${product.name}
                </td>
                <td>
                    ${product.Category}
                </td>
                <td>
                    රු ${product.price}
                </td>
                <td>
                    ${badgeRender}
                </td>
                <td>
                    රු ${product.offerPrice}
                </td>
                <td class="text-end">
                    <button class="btn btn-outline-primary btn-rounded edit-button" data-index="${index}"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-outline-danger btn-rounded delete-button" data-index="${index}"><i class="fas fa-trash"></i></button>
                </td>
            `;
            productList.appendChild(productElement);
        });
    

        const deleteButtons = document.querySelectorAll('.delete-button');
        deleteButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const index = e.target.closest('.delete-button').dataset.index;
                const deletedProduct = products[index];
                deleteProducts.push(deletedProduct);
                products.splice(index, 1);

                displayProducts();
                AllProducts();
                AveregePriceShow();
                deleteProductss();
            });
        });
    

        const editButtons = document.querySelectorAll('.edit-button');
        editButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const index = e.target.closest('.edit-button').dataset.index;
                const product = products[index];
    

                editProductIndex.value = index;
                editProductImage.value = product.image;
                editProductName.value = product.name;
                editProductCategory.value = product.Category;
                editProductPrice.value = product.price;
                editProductOfferPrice.value = product.offerPrice;
    

                editPopupForm.style.display = 'block';
            });
        });
    }
    

    editProductForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const index = editProductIndex.value;
        products[index].image = editProductImage.value;
        products[index].name = editProductName.value;
        products[index].Category = editProductCategory.value;
        products[index].price = parseFloat(editProductPrice.value);
        products[index].offerPrice = parseFloat(editProductOfferPrice.value);
    

        editPopupForm.style.display = 'none';
        displayProducts();
        AllProducts();
        AveregePriceShow();
        deleteProductss();
    });
    

    closeEditPopup.addEventListener('click', () => {
        editPopupForm.style.display = 'none';
    });
    
    function AllProducts() {
        AllProductsCount.textContent = products.length;
    }
    
    function AveregePriceShow() {
        if (products.length > 0) {
            const total = products.reduce((sum, product) => sum + product.price, 0);
            const average = total / products.length;
            AveregePrice.textContent = `රු ${average.toFixed(2)}`;
        } else {
            AveregePrice.textContent = 'රු 0.00';
        }
    }

    function deleteProductss(){
        deleteProductCount.textContent = deleteProducts.length;
    }
    
    addProductButton.addEventListener('click', () => {
        popupForm.style.display = 'block';
    });

    closePopup.addEventListener('click', () => {
        popupForm.style.display = 'none';
    });

    productForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const productName = document.getElementById('productName').value;
        const ProductCategory = document.getElementById('productCatagory').value;
        const productPrice = document.getElementById('productPrice').value;
        const productOfferPrice = document.getElementById('productOfferPrice').value;
        const productBadge = document.getElementById('productBadge').value;
        const productImage = document.getElementById('productImage').value;

        const product = {
            image: productImage,         
            name: productName,
            category: ProductCategory,
            price: productPrice,
            offerPrice: productOfferPrice,
            badge: productBadge
        };

        products.push(product);
        displayProducts();
        popupForm.style.display = 'none';
        productForm.reset();


});


});



