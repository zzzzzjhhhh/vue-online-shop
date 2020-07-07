<template>
  <div>
    <product-detail :product="product" />
  </div>
</template>

<script>
import ProductDetail from "@/components/products/ProductDetail.vue";

export default {
  components: { ProductDetail },
  created() {
    const { name } = this.product;
    if (!name) {
      this.$store.dispatch("productById", {
        productId: this.$route.params["id"]
      });
    }
  },
  computed: {
    product() {
      return this.$store.getters.productById(this.$route.params["id"]);
    }
  }
};
</script>

<style scoped></style>
