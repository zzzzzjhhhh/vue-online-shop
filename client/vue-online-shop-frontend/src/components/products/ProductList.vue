<template>
  <div>
    <div class="products">
      <div class="container">
        This is ProductList
      </div>
      <product-item :products="products" />
    </div>
  </div>
</template>

<script>
import ProductItem from "@/components/products/ProductItem.vue";

export default {
  components: { ProductItem },
  created() {
    if (this.products.length === 0) {
      this.$store.dispatch("allProducts");
    }
  },
  computed: {
    products() {
      return this.$store.getters.allProducts;
    }
  }
};
</script>

<style scoped></style>
