<template>
  <div>
    <div class="title">
      <h1>In Stock</h1>
    </div>
    <product-list />
  </div>
</template>

<script>
import ProductList from "@/components/products/ProductList.vue";

export default {
  components: { ProductList },
  data() {
    return {
      msg: "Welcome to the Home Page"
    };
  }
};
</script>

<style scoped></style>
