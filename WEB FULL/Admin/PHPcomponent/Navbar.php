
            <nav class="navbar navbar-expand-lg navbar-white bg-white">
            <button type="button" id="sidebarCollapse" class="btn btn-light">
                    <i class="fas fa-bars"></i><span></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="nav navbar-nav ms-auto">
                        <?php
                            if(isset($_SESSION['auth']))
                            {
                                ?>
                                    <li class="nav-item dropdown">
                                        <div class="nav-dropdown">
                                            <a href="#" id="nav2" class="nav-item nav-link dropdown-toggle text-secondary" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="fas fa-user"></i> 
                                                <span>
                                                    <?= $_SESSION['auth_user']['Badge'];?>
                                                </span> <i style="font-size: .8em;" class="fas fa-caret-down"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end nav-link-menu">
                                                <ul class="nav-list">
                                                    <li> 
                                                        <button type="button" class="btn btn-sm btn-outline-transparent float-start me-1 w-100"  data-bs-toggle="modal" data-bs-target="#">
                                                        <a href="" class="dropdown-item"><i class="fas fa-cog"></i> Settings</a>
                                                        </button>
                                                    </li>
                                                    <div class="dropdown-divider"></div>
                                                    <li>
                                                        <button type="button" class="btn btn-sm btn-outline-transparent float-start me-1 w-100"  data-bs-toggle="modal" data-bs-target="#Logout">
                                                        <a href="#Logout" class="dropdown-item"><i class="fas fa-sign-out-alt"></i> Logout</a>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                <?php
                            }
                            else{
                                ?>
                                    <li class="nav-item dropdown">
                                        <div class="nav-dropdown">
                                            <a href="#" id="nav2" class="nav-item nav-link dropdown-toggle text-secondary" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="fas fa-user" style="margin-right:5px;"></i> 
                                                <span>
                                                   Admin
                                                </span> <i style="font-size: .8em;" class="fas fa-caret-down"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end nav-link-menu">
                                                <ul class="nav-list">
                                                    <li> 
                                                        <button type="button" class="btn btn-sm btn-outline-transparent float-start me-1 w-100"  data-bs-toggle="modal" data-bs-target="#">
                                                        <a href="" class="dropdown-item"><i class="fas fa-cog"></i> Settings</a>
                                                        </button>
                                                    </li>
                                                    <div class="dropdown-divider"></div>
                                                    <li>
                                                        <button type="button" class="btn btn-sm btn-outline-transparent float-start me-1 w-100"  data-bs-toggle="modal" data-bs-target="#Logout">
                                                        <a href="#Logout" class="dropdown-item"><i class="fas fa-sign-out-alt"></i> Logout</a>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                <?php
                            }
                        ?>       
                    </ul>
                </div>
            </nav>
            <!-- navbar end -->

            <!-- Logout Modal -->
            <div class="modal fade" id="Logout" tabindex="-1" role="dialog" aria-labelledby="LogoutModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="LogoutModalLabel">Logout</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Are you sure you want to logout?
                        </div>
                        <div class="modal-footer">
                            <form id="logoutForm" action="PHPcomponent/Logout.php" method="POST">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                <button type="submit" name="LogoutAdmin" class="btn btn-danger">Yes, Logout</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>