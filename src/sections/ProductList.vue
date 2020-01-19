<template>
    <div class="products" id="products">
        <div class="container">
            <h1 class="text-center p-5">Our Products
            </h1>
            <div class="row">
                <div class="col-md-4" v-for="(product,idx) in products" :key="idx">
                    <div class="container containers">
                        <div class="cards">
                            <div class="cards-head" v-for="(image,idx) in product.images" :key="idx">
                                <img src="https://s5.postimg.cc/wy79025cz/nike_Logo_White.png" alt="logo" class="cards-logo">
                                <img :src="image" alt="Shoe" class="products-img">
                                <div class="products-detail">
                                    <h2>{{product.name}}</h2> Support and Nike Zoom Air come together for a more supportive feel with high-speed responsiveness
                                </div>
                                <span class="back-texts">FAS</span>
                            </div>
                            <div class="cards-body">
                                <div class="product-desc">
                                    <span class="products-title"><b>{{product.name}}</b><span class="badge">New</span></span>
                                    <span class="product-caption">Basket Ball Collection</span>
                                    <span class="product-rating">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star grey"></i>
                                    </span>
                                </div>
                                <span class="product-price">BDT<b>{{ product.price}}</b></span>
                                <div class="product-properties">
                                    <span class="product-size">
                                        <h4>Size</h4>
                                        <ul class="ul-size">
                                            <li><a href="#">7</a></li>
                                            <li><a href="#">8</a></li>
                                            <li><a href="#">9</a></li>
                                            <li><a href="#" class="active">10</a></li>
                                        </ul>
                                    </span>
                                    <span class="product-color">
                                        <ul class="ul-color">
                                            <li><a href="#" class="orange active"></a></li>
                                            <li><a href="#" class="green"></a></li>
                                            <li><a href="#" class="yellow"></a></li>
                                        </ul>
                                        <h4>Colour</h4>
                                    </span>
                                </div>
                            </div>
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
        margin-top: 0rem;
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

    .containers {
        width: 320px;
        height: 500px;
        margin: 30px auto;
    }
    .cards {
        border-radius: 25px;
        box-shadow: -11px 11px 1px rgba(0, 0, 0, 0.3);
    }
    .cards-head {
        position: relative;
        height: 252px;
        background: #fa782e;
        /* Old browsers */
        background: -moz-linear-gradient(-45deg, #fa782e 8%, #c82930 83%);
        /* FF3.6-15 */
        background: -webkit-linear-gradient(-45deg, #fa782e 8%, #c82930 83%);
        /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(135deg, #fa782e 8%, #c82930 83%);
        /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: unquote("progid: DXImageTransform.Microsoft.gradient( startColorstr='#fa782e', endColorstr='#c82930', GradientType=1)");
        /* IE6-9 fallback on horizontal gradient */
        border-radius: 25px 25px 0 0;
    }
    .cards-logo {
        width: 55px;
        margin: 20px;
    }
    .products-img {
        position: absolute;
        left: 0;
        margin-top: 80px;
        margin-left: 93px;
        width: 90%;
    }
    .products-detail {
        padding: 0 20px;
        font-size: 11px;
        color: #fff;
    }
    .products-detail h2 {
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 2px;
        padding-bottom: 10px;
        text-transform: uppercase;
    }
    .back-texts {
        display: inline-block;
        font-size: 125px;
        font-weight: 900;
        margin-left: -7px;
        margin-top: -12px;
        opacity: 0.1;
    }
    .cards-body {
        height: 255px;
        background: #fff;
        border-radius: 0 0 25px 25px;
    }
    .products-title {
        padding: 20px 20px 5px 20px;
        display: block;
        font-size: 17px;
        font-weight: 500;
        letter-spacing: 1px;
        text-transform: uppercase;
    }
    .products-title b {
        font-weight: 900;
        letter-spacing: 0px;
    }
    .badge {
        position: relative;
        font-size: 10px;
        font-weight: 300;
        color: #fff;
        background: #11e95b;
        padding: 2px 5px;
        border-radius: 4px;
        top: -2px;
        margin-left: 5px;
    }
    .product-caption {
        display: block;
        padding: 0 20px;
        font-size: 10px;
        font-weight: 400;
        text-transform: uppercase;
    }
    .product-rating {
        padding: 0 20px;
        font-size: 11px;
    }
    .product-rating i.grey {
        color: #acacab;
    }
    .product-size h4 {
        font-size: 11px;
        padding: 0 21px;
        margin-top: 50px;
        padding-bottom: 10px;
        text-transform: uppercase;
    }
    .ul-size {
        margin-left: 15px;
    }
    .ul-size li {
        list-style: none;
        float: left;
        margin-right: 20px;
    }
    .ul-size li a {
        display: inline-block;
        text-decoration: none;
        font-size: 11px;
        width: 22px;
        height: 22px;
        border-radius: 100%;
        text-align: center;
        line-height: 23px;
        color: #000;
    }
    .ul-size li a.active {
        background: #f35e3d;
        color: #fff;
    }
    .product-size:before,
    .product-size:after {
        content: '';
        display: block;
        clear: both;
    }
    .product-color h4 {
        font-size: 11px;
        padding: 0 21px;
        margin-top: 20px;
        padding-bottom: 20px;
        text-transform: uppercase;
    }
    .ul-color {
        margin-left: 10px;
    }

    .ul-color li {
        list-style: none;
        float: left;
        margin-right: 20px;
    }

    .ul-color li a {
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 100%;
    }

    .ul-color li a.orange {
        background: #f35e3d;
    }

    .ul-color li a.green {
        background: #11e95b;
    }

    .ul-color li a.yellow {
        background: #ffd414;
    }

    .ul-color li a.active:after {
        position: absolute;
        content: '';
        display: inline-block;
        border: 1px solid #f35e3d;
        width: 24px;
        height: 24px;
        border-radius: 100%;
        margin-left: -12px;
        margin-top: -4px;    }
    .product-price {
        position: absolute;
        background: #11e95b;
        padding: 2px 15px;
        text-align: center;
        display: inline-block;
        font-size: 14px;
        font-weight: 200;
        color: #fff;
        border-radius: 17px;
        margin-top: 5px;
        margin-left: -48px;
        box-shadow: -10px 20px 15px -10px rgba(41, 249, 109, 1);
    }
    .product-price b {
        margin-left: 5px;
    }
    .yt
    {
        position: fixed;
        padding:7px 10px 3px 10px;
        top: 5px;
        right: 5px;
        background: rgba(0,0,0,0.1);
    }

    .yt:hover
    {
        background: rgba(0,0,0,0.2);
    }
</style>