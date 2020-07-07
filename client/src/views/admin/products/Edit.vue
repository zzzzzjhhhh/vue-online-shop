<template>
  <div>
    <div class="title">
      <product-form
        @save-product="updateProduct"
        :model="model"
        :manufacturers="manufacturers"
        isEditing="true"
      ></product-form>
    </div>
  </div>
</template>

<script>
import ProductForm from "@/components/products/ProductForm";

export default {
  components: { ProductForm },
  props: ["product"],

  data() {
    const product = this.$store.getters.productById(this.$route.params["id"]);
    const res = { ...product, manufacturer: { ...product.manufacturer } };
    return { model: res };
  },
  created() {
    const { name = "" } = this.modelData || {};

    if (!name) {
      this.$store
        .dispatch("productById", {
          productId: this.$route.params["id"]
        })
        .then(() => {
          const product = this.$store.state.product;
          this.model = {
            ...product,
            manufacturer: { ...product.manufacturer }
          };
        });
    }
    if (this.manufacturers.length === 0) {
      this.$store.dispatch("allManufacturers");
    }
  },
  computed: {
    manufacturers() {
      return this.$store.getters.allManufacturers;
    }
    // model() {
    //   const product = this.$store.getters.productById(this.$route.params["id"]);
    //   const res = { ...product, manufacturer: { ...product.manufacturer } };

    //   return res;
    // }
  },
  methods: {
    updateProduct(product) {
      this.$store.dispatch("updateProduct", { product });
    }
  }
};
</script>

<style scoped></style>
