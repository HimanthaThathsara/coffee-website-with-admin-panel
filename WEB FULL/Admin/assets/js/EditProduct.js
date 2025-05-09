document.addEventListener('DOMContentLoaded', function() {
    const editButtons = document.querySelectorAll('.edit-button');
    const deleteButtons = document.querySelectorAll('.delete-button');

    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const image = this.getAttribute('data-image');
            const name = this.getAttribute('data-name');
            const description = this.getAttribute('data-description');
            const category = this.getAttribute('data-category');
            const badge = this.getAttribute('data-badge');
            const price = this.getAttribute('data-price');
            const offerprice = this.getAttribute('data-offerprice');

            document.getElementById('editProductId').value = id;
            document.getElementById('currentImage').src = `UploadProduct/${image}`;
            document.getElementById('editProductName').value = name;
            document.getElementById('editProductDescription').value = description;
            document.getElementById('editProductCategory').value = category;
            document.getElementById('editBadge').value = badge;
            document.getElementById('editPrice').value = price;
            document.getElementById('editOfferPrice').value = offerprice;
        });
    });

    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            document.getElementById('deleteProductId').value = id;
        });
    });
});
