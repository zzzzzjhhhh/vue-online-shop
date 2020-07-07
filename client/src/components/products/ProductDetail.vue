<template>
  <div class="product-detail">
    <div class="product-detail-image">
      <img :src="product.image" alt="" class="image" />
    </div>
    <div class="product-detail-info">
      <div class="product-detail-description">
        <small>{{ product.manufacturer.name }}</small>
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
      </div>
    </div>
    <div class="product-details-price-cart">
      <p>{{ product.price }}</p>
      <product-button :product="product"></product-button>
    </div>
  </div>
</template>

<script>
import ProductButton from "@/components/products/ProductButton.vue";

export default {
  props: ["product"],
  components: { ProductButton }
};
</script>

<style scoped>
.product-detail-image .image {
  width: 100px;
  height: 100px;
}
</style>
