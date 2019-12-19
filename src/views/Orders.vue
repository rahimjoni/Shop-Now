<template>
    <div class="products">
        <div class="container">
            <div class="intros">
                <div class="row justify-content-center align-items-center">
                    <div class="col-md-6">
                        <h3>Our Products</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur ducimus harum inventore praesentium quaerat quisquam repellendus voluptatibus. Doloremque error excepturi itaque, necessitatibus nihil placeat possimus rem sed vitae voluptates.</p>
                    </div>

                    <div class="col-md-6">
                        <img src="/img/svg/orders.svg" alt="" class="img-fluid" style="height: 400px" width="400px">
                    </div>
                </div>
            </div>

            <div class="product-test pt-5">
                <h3 class="d-inline-block">Order list</h3>
                <button class="btn btn-primary float-right mb-3" @click="add"><i class="fas fa-user-plus"></i> Create</button>

                <div class="table-responsive table-hover table-striped">
                    <table class="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th scope="col">Order name</th>
                            <th scope="col">Order Price</th>
                            <th scope="col">Order Tags</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(product,idx) in products" :key="idx">

                            <td>{{product.name}}</td>
                            <td>{{product.price}}</td>
                            <td>{{product.tag}}</td>
                            <td>
                                <a href="#" @click="editproduct(product)"><i class="fas fa-edit"></i></a> |
                                <a href="#" @click="DeleteProduct(product)" ><i class="fas fa-trash-alt"></i></a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="product" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" v-if="activemode=='new'" id="editLabel">Add Product</h5>
                        <h5 class="modal-title" v-if="activemode=='edit'" id="editLabel1">Edit Product</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <div class="row">
                            <!-- main product -->

                            <div class="col-md-8">
                                <div class="form-group">
                                    <input type="text" placeholder="Product Name" v-model="product.name" class="form-control">
                                </div>
                                <div class="form-group">
                                    <vue-editor v-model="product.description"></vue-editor>
                                </div>
                            </div>
                            <!-- product sidebar -->
                            <div class="col-md-4">
                                <h4 class="display-6">Product Details</h4>
                                <hr>
                                <div class="form-group">
                                    <input type="text" placeholder="Product price" v-model="product.price" class="form-control">
                                </div>
                                <div class="form-group">
                                    <input type="text" placeholder="Product tags" v-model="product.tag" class="form-control">

                                    <div class="d-flex"></div>
                                </div>

                                <div class="form-group">
                                    <label class="float-left" for="product">Choose Images</label>
                                    <input type="file" @change="uplodeImage" class="form-control">
                                </div>

                                <div class="form-group d-flex">
                                    <div class="p-1" v-for="(image,index) in product.images" :key="image">

                                        <div class="show-image">
                                            <img :src="image" alt="" width="80px">
                                            <i class="fas fa-trash" style="color: red;width: 10px;font-size: 18px" @click="deleteImage(image,index)"></i>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                        <button  type="button" v-if="activemode == 'new'" class="btn btn-success" @click="addProuct">Create</button>
                        <button  type="button" v-if="activemode == 'edit'" class="btn btn-success" @click="updateProuct">Update</button>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
    import { VueEditor } from "vue2-editor";
    import Swal from 'sweetalert2';

    import $ from 'jquery'
    import {fb,db} from '../firebase'
    export default {
        name: "Products",
        components: {
            VueEditor
        },
        props: {
            msg: String
        },
        firestore () {
            return {
                // Collection
                products: db.collection('products'),
            }
        },
        data(){
            return{
                products:[],
                product:{
                    name:null,
                    description:null,
                    price:null,
                    tag:null,
                    images:[],
                },
                activemode:null,
                activeItem:null,
            }
        },
        methods:{
            deleteImage(img,index){
                let image = fb.storage().refFromURL(img);
                this.product.images.splice(index,1);
                image.delete().then(() =>{
                    console.log('image deleted');
                }).catch(() =>{
                    // Uh-oh, an error occurred!
                    console.log('an error occurred');
                });
            },
            uplodeImage(e){
                if (e.target.files[0]){
                    let file = e.target.files[0];
                    var storageRef = fb.storage().ref('products/'+file.name);
                    let uploadTask= storageRef.put(file);

                    uploadTask.on('state_changed',()=>{

                    }, ()=> {
                        // Handle unsuccessful uploads
                    },() =>{
                        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL)=> {
                            this.product.images.push(downloadURL);
                            console.log('File available at', downloadURL);
                        });
                    });
                    console.log(e.target.files[0])
                }

            },

            //this is for update product
            updateProuct(){
                this.$firestore.products.doc(this.product.id).update(this.product)
                $('#product').modal('hide');
            },

            //this is for update modal show
            editproduct(product){
                this.product=product
                this.activemode='edit'
                $('#product').modal('show');
            },
            //delete product with sweet alert message
            DeleteProduct(doc){
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes!,'
                }).then((result) => {
                    if (result.value) {
                        this.$firestore.products.doc(doc['id']).delete()
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
            },

            //when click on save button then work this button
            addProuct(){
                this.$firestore.products.add(this.product);
                $('#product').modal('hide');
            },
            //when click add new button then show pop from this login
            add(){
                this.activemode='new'
                this.reset()
                $('#product').modal('show');
            },

            watcher(){
            },
            updatesProduct(){
            },
            editProduct(){
            },
            Delete(){
            },
            readData(){
            },
            store(){
            },
            reset(){
                /*Object.assign(this.$data, this.$options.data.apply(this))*/
                this.product={
                    name:null,
                    description:null,
                    price:null,
                    tag:null,
                    images:[],
                }
            }
        },
        created() {
            /*this.readData();*/
        }

    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    div.show-image {
        position: relative;
        float:left;
        margin:5px;}

    div.show-image:hover i
    {
        display: block;
    }

    div.show-image i {
        position:absolute;
        top:0;
        left:0;
        display:none;
    }
</style>