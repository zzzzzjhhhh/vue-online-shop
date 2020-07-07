<template>
  <div>
    <div class="title">
      <h1>{{ msg }}</h1>
    </div>
    <product-item :products="cart" />
  </div>
</template>

<script>
import ProductItem from "@/components/products/ProductItem.vue";

export default {
  components: { ProductItem },
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  },
  data() {
    return {
      msg: "Welcome to the Cart Page"
    };
  }
};
</script>

<style scoped></style>
