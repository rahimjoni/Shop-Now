<template>
    <div class="products" id="products">
        <div class="container">
            <h1 class="text-center p-5">Our Products List</h1>
            <div class="row">
                <div class="col-md-3 pb-4" v-for="(product,idx) in products" :key="idx">
                    <div class="card product-item">
                        <carousel :perPage="1">
                            <slide v-for="(image,idx) in product.images" :key="idx" class="img-hover">
                                <img :src="image" class="card-img-top" alt="..." width="250px">
                            </slide>
                        </carousel>
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                            <h5 class="card-title">{{ product.name }}</h5>
                            <h5 class="card-priceS">{{ product.price}}</h5>
                        </div>
                            <add-to-cart
                                    :image="getImage(product.images)"
                                    :p-id="product.id"
                                    :price="product.price"
                                    :name="product.name">
                            </add-to-cart>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
    import {db} from '../firebase';
    export default {
        name: "Products-list",
        props: {
            msg: String
        },
        data(){
            return {
                products: [],
            }
        },
        methods:{
            getImage(images){
                return images[0];
            }
        },
        firestore(){
            return {
                products: db.collection('products'),
            }
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .products{
        margin-top: 7rem;
        background: #f2f2f2;
        padding-bottom: 3rem;
    }
    .img-hover img {
        -webkit-transition: all .3s ease; /* Safari and Chrome */
        -moz-transition: all .3s ease; /* Firefox */
        -o-transition: all .3s ease; /* IE 9 */
        -ms-transition: all .3s ease; /* Opera */
        transition: all 2.3s ease;
        position:relative;
    }
    .img-hover img:hover {
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transform:translateZ(0) scale(2.20); /* Safari and Chrome */
        -moz-transform:scale(1.20); /* Firefox */
        -ms-transform:scale(1.20); /* IE 9 */
        -o-transform:translatZ(0) scale(1.20); /* Opera */
        transform:translatZ(0) scale(1.20);
    }

    .img-hover:hover:after {
        content:"";
        position:absolute;
        top:0;
        left:0;
        z-index:2;
        width:30px;
        height:30px;
        border:1px solid #000;
    }

    .grayscale {
        -webkit-filter: brightness(1.10) grayscale(100%) contrast(90%);
        -moz-filter: brightness(1.10) grayscale(100%) contrast(90%);
        filter: brightness(1.10) grayscale(100%);
    }
</style>