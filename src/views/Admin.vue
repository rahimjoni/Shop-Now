<template>
    <div class="admin">
        <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
            <a id="show-sidebar" class="btn btn-sm btn-dark">
                <i class="fas fa-bars"></i>
            </a>
            <nav id="sidebar" class="sidebar-wrapper">
                <div class="sidebar-content">
                    <!-- sidebar-brand  -->
                    <div class="sidebar-item sidebar-brand">
                        <a href="#">Vue Shopping</a>

                    </div>
                    <!-- sidebar-header  -->
                    <div class="sidebar-item sidebar-header">
                        <div class="user-pic">
                            <img class="img-responsive img-rounded" src="/img/user1-128x128.jpg" alt="User picture">
                        </div>
                        <div class="user-info">
                        <span class="user-name">
                            <strong>Smith</strong>
                        </span>
                            <span class="user-role">{{email}}</span>
                            <span class="user-status">
                            <i class="fa fa-circle"></i>
                            <span>Online</span>
                        </span>
                        </div>
                    </div>
                    <!-- sidebar-search  -->
                    <div class="sidebar-item sidebar-search">
                        <div>
                            <div class="input-group">
                                <input type="text" class="form-control search-menu" placeholder="Search...">
                                <div class="input-group-append">
                                <span class="input-group-text">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" sidebar-item sidebar-menu">
                        <ul>
                            <li class="header-menu">
                                <span>Menu</span>
                            </li>

                            <li>
                                <router-link to="/admin/overview">
                                    <i class="fa fa-chart-line"></i>
                                    <span>Overview Item</span>
                                    <span class="badge badge-pill badge-success">Pro</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/admin/products">
                                    <i class="fab fa-amazon"></i>
                                    <span>Product Items</span>
                                    <span class="badge badge-pill badge-success">Pro</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/admin/orders">
                                    <i class="fa fa-shopping-cart"></i>
                                    <span>Place Orders </span>
                                    <span class="badge badge-pill badge-success">New</span>
                                </router-link>
                            </li>

                            <li>
                                <router-link to="/admin/profile">
                                    <i class="fa fa-user"></i>
                                    <span>Profile Menus</span>
                                    <span class="badge badge-pill badge-success">Pro</span>
                                </router-link>
                            </li>
                            <li>
                                <a href="#" @click="logout">
                                    <i class="fa fa-power-off"></i>
                                    <span>Log Out Now</span>
                                    <span class="badge badge-pill badge-success">New</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!-- sidebar-menu  -->
                </div>
            </nav>
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card border-success mb-3" style="max-width: 22rem;">
                        <div class="card-header bg-success text-white">Work Process</div>
                        <div class="card-body text-success" style="font-size: 80px">
                            <i class="fas fa-chart-line"></i>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card border-success mb-3" style="max-width: 22rem;">
                            <div class="card-header bg-success text-white">Available Center</div>
                            <div class="card-body text-success" style="font-size: 80px">
                                <i class="fas fa-building"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card border-success mb-3" style="max-width: 22rem;">
                            <div class="card-header bg-success text-white">Header</div>
                            <div class="card-body text-success" style="font-size: 80px">
                                <i class="fas fa-boxes"></i>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <!-- sidebar-content  -->
            <main class="page-content">
                <router-view></router-view>
            </main>
            <!-- page-content" -->
        </div>
        <!-- page-wrapper -->

    </div>
</template>

<script>

    import {fb} from '../firebase'
    // @ is an alias to /src
    export default {
        name: "admin",
        data(){
            return{
                name:null,
                email:null,
            }
        },
        components: {
        },
        methods:{
            logout(){
                fb.auth().signOut()
                    .then(()=>{
                        this.$router.replace('/')
                    })
                    .catch()
            }
        },
        created(){
            var user = fb.auth().currentUser;
            this.name=user.name;
            this.email=user.email;
        }
    };
</script>


<style>
</style>