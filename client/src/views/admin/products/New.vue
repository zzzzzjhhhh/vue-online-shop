<template>
  <div>
    <div class="title">
      <h1>This is Admin/New</h1>
    </div>
    <product-form
      @save-product="addProduct"
      :model="model"
      :manufacturers="manufacturers"
    ></product-form>
  </div>
</template>
<script>
import ProductForm from "@/components/products/ProductForm.vue";

export default {
  created() {
    if (this.manufacturers.length === 0) {
      this.$store.dispatch("allManufacturers");
    }
  },
  data() {
    return {
      model: { manufacturer: { name: "" } }
    };
  },
  computed: {
    manufacturers() {
      return this.$store.getters.allManufacturers;
    }
  },
  methods: {
    addProduct(product) {
      this.$store.dispatch("addProduct", { product });
    }
  },
  components: {
    ProductForm
  }
};
</script>
