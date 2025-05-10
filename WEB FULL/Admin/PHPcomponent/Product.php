<?php
if (!isset($_SESSION['auth']) || $_SESSION['auth'] !== true) {
    header('Location: ../Login.php');
    exit();
}


include('Config/dbconnection.php');
include('AccessCode/GetAllProducts.php');
?>
<div class="content">
    <div class="container">

        <!--Product Table-->
        <div class="row mt-3">
            <div class="col-md-12">
                <div class="card">
                    <div class="content">

                        <div class="page-title">
                            <h3>Product Management
                                <button type="button" class="btn btn-sm btn-outline-primary float-end" data-bs-toggle="modal" data-bs-target="#addProductModal"><i class="fas fa-plus-circle"></i> Add Product</button>
                            </h3>
                        </div>

                        <div class="box box-primary">
                            <div class="box-body">
                                <table width="100%" class="table table-hover" id="dataTables-example">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Category</th>
                                            <th>Price</th>
                                            <th>Badge</th>
                                            <th>Offer Price</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody id="productList">
                                        <?php
                                        $products = GetAllProducts('Products');

                                        if(mysqli_num_rows($products) > 0) {
                                            foreach($products as $item) {
                                                ?>
                                                <tr>
                                                    <td>
                                                        <img src="UploadProduct/<?= $item['Image']?>" alt="<?= $item['ProductName']?>" style="border-radius: 50%; width: 50px; height: 50px;">
                                                    </td>
                                                    <td><?= $item['ProductName']?></td>
                                                    <td><?= $item['ProductCategory']?></td>
                                                    <td>රු <?= $item['Price']?></td>
                                                    <td><?= $item['Badge']?></td>
                                                    <td>රු <?= $item['OfferPrice']?></td>
                                                    <td class="text-end">
                                                        <button type="button" class="btn btn-outline-primary btn-rounded edit-button" data-bs-toggle="modal" data-bs-target="#editProductModal" 
                                                            data-id="<?= $item['id']?>"
                                                            data-image="<?= $item['Image']?>"
                                                            data-name="<?= $item['ProductName']?>"
                                                            data-description="<?= $item['ProductDescription']?>"
                                                            data-category="<?= $item['ProductCategory']?>"
                                                            data-badge="<?= $item['Badge']?>"
                                                            data-price="<?= $item['Price']?>"
                                                            data-offerprice="<?= $item['OfferPrice']?>">
                                                            <i class="fas fa-edit"></i>
                                                        </button>
                                                        <button type="button" class="btn btn-outline-danger btn-rounded delete-button" data-bs-toggle="modal" data-bs-target="#deleteProductModal" data-id="<?= $item['id']?>"><i class="fas fa-trash"></i></button>
                                                    </td>
                                                </tr>
                                                <?php
                                            }
                                        } else {
                                            ?>
                                            <tr>
                                                <td colspan="7">No Data Found</td>
                                            </tr>
                                            <?php
                                        }
                                        ?>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <!-- Add Product Modal -->
        <div class="modal fade" id="addProductModal" tabindex="-1" role="dialog" aria-labelledby="addProductModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addProductModalLabel">Add Product</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form action="AccessCode/AccessCodeUpload.php" method="POST" enctype="multipart/form-data">
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="Image" class="form-label">Image</label>
                                <input type="file" class="form-control" name="Image" required>
                            </div>
                            <div class="mb-3">
                                <label for="ProductName" class="form-label">Product Name</label>
                                <input type="text" class="form-control" name="ProductName" required>
                            </div>
                            <div class="mb-3">
                                <label for="ProductDescription" class="form-label">Product Description</label>
                                <textarea class="form-control" name="ProductDescription" required></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="ProductCategory" class="form-label">Product Category</label>
                                <input type="text" class="form-control" name="ProductCategory" required>
                            </div>
                            <div class="mb-3">
                                <label for="Badge" class="form-label">Badge</label>
                                <input type="text" class="form-control" name="Badge" >
                            </div>
                            <div class="mb-3">
                                <label for="Price" class="form-label">Price</label>
                                <input type="number" class="form-control" name="Price" required>
                            </div>
                            <div class="mb-3">
                                <label for="OfferPrice" class="form-label">Offer Price</label>
                                <input type="number" class="form-control" name="OfferPrice">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" name="AddProductButton" class="btn btn-primary">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- Edit Product Modal -->
        <div class="modal fade" id="editProductModal" tabindex="-1" role="dialog" aria-labelledby="editProductModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editProductModalLabel">Edit Product</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form id="editProductForm" action="AccessCode/AccessCodeEdit.php" method="POST" enctype="multipart/form-data">
                        <div class="modal-body">
                            <input type="hidden" id="editProductId" name="ProductId">
                            <div class="mb-3">
                                <label for="editProductImage" class="form-label">Image</label>
                                <input type="file" class="form-control" id="editProductImage" name="Image">
                                <img id="currentImage" src="" alt="Product Image" style="border-radius: 50%; width: 50px; height: 50px; margin-top: 10px;">
                            </div>
                            <div class="mb-3">
                                <label for="editProductName" class="form-label">Product Name</label>
                                <input type="text" class="form-control" id="editProductName" name="ProductName" required>
                            </div>
                            <div class="mb-3">
                                <label for="editProductDescription" class="form-label">Product Description</label>
                                <textarea class="form-control" id="editProductDescription" name="ProductDescription" required></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="editProductCategory" class="form-label">Product Category</label>
                                <input type="text" class="form-control" id="editProductCategory" name="ProductCategory" required>
                            </div>
                            <div class="mb-3">
                                <label for="editBadge" class="form-label">Badge</label>
                                <input type="text" class="form-control" id="editBadge" name="Badge" required>
                            </div>
                            <div class="mb-3">
                                <label for="editPrice" class="form-label">Price</label>
                                <input type="number" class="form-control" id="editPrice" name="Price" required>
                            </div>
                            <div class="mb-3">
                                <label for="editOfferPrice" class="form-label">Offer Price</label>
                                <input type="number" class="form-control" id="editOfferPrice" name="OfferPrice">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" name="EditProductButton" class="btn btn-primary">Save changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- Delete Product Modal -->
        <div class="modal fade" id="deleteProductModal" tabindex="-1" role="dialog" aria-labelledby="deleteProductModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="deleteProductModalLabel">Delete Product</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Are you sure you want to delete this product?
                    </div>
                    <div class="modal-footer">
                        <form id="deleteProductForm" action="AccessCode/AccessCodeDelete.php" method="POST">
                            <input type="hidden" id="deleteProductId" name="ProductId">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                            <button type="submit" name="DeleteProductButton" class="btn btn-danger">Yes, Delete</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
