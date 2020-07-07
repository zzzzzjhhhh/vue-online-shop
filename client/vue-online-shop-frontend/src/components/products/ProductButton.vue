<template>
  <div>
    <!-- <button class="btn" v-if="isAdding" @click="addToCart">加入购物车</button>
    <button class="btn" v-else @click="removeFromCart(product._id)">
      从购物车中移除
    </button> -->
    <el-button v-if="isAdding" @click="addToCart" type="text" size="small"
      >加入购物车</el-button
    >
    <el-button v-else @click="removeFromCart(id)" type="text" size="small">
      从购物车中移除</el-button
    >
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    product() {
      return this.$store.getters.productById(this.id);
    },
    isAdding() {
      let isAdding = true;
      this.cart.forEach(product => {
        if (product._id === this.product._id) {
          isAdding = false;
        }
      });
      return isAdding;
    },
    cart() {
      return this.$store.state.cart;
    }
  },
  methods: {
    addToCart() {
      this.$store.commit("ADD_TO_CART", {
        product: this.product
      });
    },
    removeFromCart(productId) {
      this.$store.commit("REMOVE_FROM_CART", {
        productId
      });
    }
  }
};
</script>

<style scoped></style>
