<template>
  <div class="hello">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Shop Now</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">Product</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <router-link to="/checkout"><a class="btn text-white btn-success mr-2"><i class="fas fa-cart-arrow-down"></i> Card</a></router-link>
          <a class="btn text-white btn-success my-2 my-sm-0" data-toggle="modal" data-target="#login">Login</a>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: "Navbar",
  props: {
    msg: String
  },
  components: {

  }

};
</script>

<script type='text/javascript' src="/bootstrap.js"></script>
<script type="text/javascript" src="/functions.js"></script>
<script language="JavaScript" type="text/javascript">
  $(document).ready(function(){
    $('.carousel').carousel({
      interval: 2000
    })
  });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
