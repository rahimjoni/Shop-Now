<template>
<div class="main w-100">
    <div class="container-fluid w-100">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="/img/products/banner1.jpg" style="height: 600px" alt="First slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="/img/products/slider_english-en.jpg" style="height: 600px" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="/img/products/sl-1.jpg" style="height: 600px" alt="Third slide">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
    <products-list></products-list>

    <div class="hero">
        <div class="container h-100">
            <div class="row h-100 justify-content-center align-items-center">
                <div class="col-md-5">
                    <div class="hero-content">
                        <h4 class="hero-title">
                            Online Shoping From Here. Stay with Us & Get Product Without Service Charge.
                        </h4>
                        <p>We have technology, finally, that for the first time in human history allows people to really maintain rich connections with much larger numbers of people. People shop and learn in a whole new way compared to just a few years ago, so marketers need to adapt or risk extinction.</p>
                        <div class="hero-btn mt-5">
                            <button class="btn custom-btn btn-info mr-4">Explore</button>
                            <button class="btn custom-btn btn-outline-secondary">Products</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="graphic">
                        <img src="/img/svg/graphic.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2 class="text-center pb-4">Top Sell Product</h2>
                <div id="carouselExampleIndicators1" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators1" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators1" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators1" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row">
                                <div class="col-md-3">
                                    <img class="d-block w-100" src="/img/products/slider-img-1.jpg" alt="First slide">
                                </div>
                                <div class="col-md-3">
                                    <img class="d-block w-100" src="/img/products/slider-img-4.jpg" alt="First slide">
                                </div>
                                <div class="col-md-3">
                                    <img class="d-block w-100" src="/img/products/slider-img-3.jpg" alt="First slide">
                                </div>
                                <div class="col-md-3">
                                    <img class="d-block w-100" src="/img/products/slider-img-2.jpg" alt="First slide">
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row">
                                <div class="col-md-3">
                                    <img class="d-block w-100" src="/img/products/pro2.jpg" alt="First slide">
                                </div>
                                <div class="col-md-3">
                                    <img class="d-block w-100" src="/img/products/pro1.jpg" alt="First slide">
                                </div>
                                <div class="col-md-3">
                                    <img class="d-block w-100" src="/img/products/pro3.jpg" alt="First slide">
                                </div>
                                <div class="col-md-3">
                                    <img class="d-block w-100" src="/img/products/pro4.jpg" alt="First slide">
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row">
                                <div class="col-md-3">
                                    <img class="d-block w-100" src="/img/products/slider-img-3.jpg" alt="First slide">
                                </div>
                                <div class="col-md-3">
                                    <img class="d-block w-100" src="/img/products/slider-img-1.jpg" alt="First slide">
                                </div>
                                <div class="col-md-3">
                                    <img class="d-block w-100" src="/img/products/slider-img-2.jpg" alt="First slide">
                                </div>
                                <div class="col-md-3">
                                    <img class="d-block w-100" src="/img/products/slider-img-4.jpg" alt="First slide">
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "Hero",
        props: {
            msg: String
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .hero{
        padding-top: 0rem;
        width: 100%;
        text-align: left;
    }
    @-webkit-keyframes zoom {
        from {
            -webkit-transform: scale(1, 1);
        }
        to {
            -webkit-transform: scale(1.5, 1.5);
        }
    }
    @keyframes zoom {
        from {
            transform: scale(1, 1);
        }
        to {
            transform: scale(1.5, 1.5);
        }
    }
    .carousel-inner .carousel-item> img {
        -webkit-animation: zoom 20s;
        animation: zoom 20s;
    }
</style>