<template>
  <div class="add-to-cart">

    <button class="btn btn-primary" @click="addToCart"> Add to Cart </button>

  <!-- Modal -->
  <div class="modal fade" id="miniCart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">My Shopping Cart</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <ul>
              <li v-for="(item,index) in this.$store.state.cart" :key="index" class="media">
                <img :src="item.productImage" width="120px" class="align-self-center mr-3" alt="">
                <div class="media-body">
                  <h5 class="mt-0">{{item.productName}}
                    <span class='float-right' @click="$store.commit('removeFromCart',item)"><i class="fas fa-trash-alt"></i></span>
                  </h5>
                  <p class="mt-0 align-text-left">Product Price - {{item.productPrice}}</p>
                  <p class="mt-0">Quantity : {{item.productQuantity }}</p>
                </div>
              </li>
            </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal">Continue</button>
          <button type="button" class="btn btn-primary" @click="checkout()">Check Out</button>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: "add-to-cart",
    props: {
      name: String,
      price: String,
      image: String,
      pId: String
    },
    data(){
      return {
        item :{
          productName: this.name,
          productImage: this.image,
          productPrice: this.price,
          productId: this.pId,
          productQuantity: 1,
        }
      }
    },
    methods:{
      checkout(){
        $('#miniCart').modal('hide');
        this.$router.push('/checkout')
      },

      addToCart(){
        $('#miniCart').modal('show');
        this.$store.commit('addToCart', this.item)
      }
    }
  };
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>