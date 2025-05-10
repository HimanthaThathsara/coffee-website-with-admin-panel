<?php

if (!isset($_SESSION['auth']) || $_SESSION['auth'] !== true) {
    header('Location: ../Login.php');
    exit();
}

include('Config/dbconnection.php');
include('AccessCode/GetAllRoles.php');
?>
<div class="content">
    <div class="container">
        <div class="row mt-3">
            <div class="col-md-12">
                <div class="card">
                    <div class="content">
                        <div class="page-title">
                            <h3>Admin Management
                                <button type="button" class="btn btn-sm btn-outline-primary float-end" data-bs-toggle="modal" data-bs-target="#registerForm"><i class="fas fa-plus-circle"></i> Add</button>
                                <a href="AdminIndex.php" class="btn btn-sm btn-outline-info float-end me-1"><i class="fas fa-angle-left"></i> <span class="btn-header">Return</span></a>
                            </h3>
                        </div>

                        <div class="box box-primary">
                            <div class="box-body">
                                <table width="100%" class="table table-hover" id="dataTables-example">
                                    <thead>
                                        <tr>
                                            <th>Role</th>
                                            <th>Email</th>
                                            <th>Password</th>
                                            <th>Badge</th>
                                            <th>Login Date</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php
                                        $RolData = GetAllRoles('admins');

                                        if(mysqli_num_rows($RolData) > 0) {
                                            foreach($RolData as $item) {
                                                ?>
                                                <tr>
                                                    <td><?= $item['Role']?></td>
                                                    <td><?= $item['Email']?></td>
                                                    <td><?= $item['Password']?></td>
                                                    <td><?= $item['Badge']?></td>
                                                    <td><?= $item['Register_Date']?></td>
                                                    <td class="text-end">
                                                        <button type="button" class="btn btn-outline-primary btn-rounded edit-button" data-bs-toggle="modal" data-bs-target="#editRoles"
                                                            data-id="<?= $item['id']?>"
                                                            data-role="<?= $item['Role']?>"
                                                            data-email="<?= $item['Email']?>"
                                                            data-password="<?= $item['Password']?>"
                                                            data-badge="<?= $item['Badge']?>"
                                                            data-register="<?= $item['Register_Date']?>"
                                                        >
                                                            <i class="fas fa-edit"></i>
                                                        </button>
                                                        <button type="button" class="btn btn-outline-danger btn-rounded delete-button" data-bs-toggle="modal" data-bs-target="#deleteRoles" data-id="<?= $item['id']?>"><i class="fas fa-trash"></i></button>
                                                    </td>
                                                </tr>
                                                <?php
                                            }
                                        } else {
                                            ?>
                                            <tr>
                                                <td colspan="6">No Data Found</td>
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

        <!-- Add Admin Modal -->
        <div class="modal fade" id="registerForm" role="dialog" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="text-muted">Create new account</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form action="AccessCode/AccessCode.php" method="POST" class="px-3 py-3">
                        <div class="mb-3 text-start">
                            <label for="Role" class="form-label">Role</label>
                            <input type="text" class="form-control" name="Role" placeholder="Enter Role" required>
                        </div>
                        <div class="mb-3 text-start">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" name="email" placeholder="Enter Email" required>
                        </div>
                        <div class="mb-3 text-start">
                            <label for="Badge" class="form-label">Badge</label>
                            <input type="text" class="form-control" name="Badge" placeholder="Enter Badge" required>
                        </div>
                        <div class="mb-3 text-start">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" name="Password" placeholder="Password" required>
                        </div>
                        <div class="mb-3 text-start">
                            <label for="Confirm password" class="form-label">Confirm Password</label>
                            <input type="password" class="form-control" name="ConfirmPassword" placeholder="Confirm password" required>
                        </div>
                        <button type="submit" name="RegisterButton" class="btn btn-primary shadow-2 mb-4">Register</button>
                    </form>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Edit Admin Modal -->
        <div class="modal fade" id="editRoles" tabindex="-1" role="dialog" aria-labelledby="editRolesModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editRolesModalLabel">Edit Admin</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form id="editRolesForm" action="AccessCode/AccessRolesEdit.php" method="POST">
                        <div class="modal-body">
                            <input type="hidden" id="editAdminId" name="AdminId">
                            <div class="mb-3">
                                <label for="editAdminRole" class="form-label">Role</label>
                                <input type="text" class="form-control" id="editAdminRole" name="Role" required>
                            </div>
                            <div class="mb-3">
                                <label for="editAdminEmail" class="form-label">Email</label>
                                <input type="email" class="form-control" id="editAdminEmail" name="Email" required>
                            </div>
                            <div class="mb-3">
                                <label for="editAdminBadge" class="form-label">Badge</label>
                                <input type="text" class="form-control" id="editAdminBadge" name="Badge" required>
                            </div>
                            <div class="mb-3">
                                <label for="editAdminPassword" class="form-label">Password</label>
                                <input type="password" class="form-control" id="editAdminPassword" name="Password" required>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" name="EditAdminButton" class="btn btn-primary">Save changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- Delete Admin Modal -->
        <div class="modal fade" id="deleteRoles" tabindex="-1" role="dialog" aria-labelledby="deleteRolesModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="deleteRolesModalLabel">Delete Admin</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Are you sure you want to delete this admin?
                    </div>
                    <div class="modal-footer">
                        <form id="deleteRolesForm" action="AccessCode/AccessCodeDelete.php" method="POST">
                            <input type="hidden" id="deleteAdminId" name="AdminId">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                            <button type="submit" name="DeleteAdminButton" class="btn btn-danger">Yes, Delete</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>

