<template>
  <div class="productInfo">
    <el-form
      class="form"
      ref="form"
      label-width="180px"
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
    >
      <el-form-item label="Name">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="Price">
        <el-input v-model="model.price"></el-input>
      </el-form-item>
      <el-form-item label="Manufacturer ">
        <el-select
          v-model="model.manufacturer.name"
          clearable
          placeholder="请选择制造商"
        >
          <el-option
            v-for="manufacturer in manufacturers"
            :key="manufacturer._id"
            :label="manufacturer.name"
            :value="manufacturer.name"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Image ">
        <el-input v-model="model.image"></el-input>
      </el-form-item>
      <el-form-item label="Description ">
        <el-input type="textarea" v-model="model.description"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          v-if="isEditing"
          type="primary"
          native-type="submit"
          @click="onSubmit"
          >Update Product</el-button
        >
        <el-button v-else @click="onSubmit">Add Product</el-button>
      </el-form-item></el-form
    >
  </div>
</template>

<script>
export default {
  props: ["model", "manufacturers", "isEditing"],
  // data() {
  //   return { modelData: {} };
  // },
  // created() {
  //   const product = this.model;
  //   this.modelData = { ...product, manufacturer: { ...product.manufacturer } };
  // },
  // watch: {
  //   model(val, oldVal) {
  //     this.dataModel = val;
  //   }
  // },
  computed: {
    loading() {
      return this.$store.state.showLoader;
    }
  },
  methods: {
    onSubmit() {
      const newManufacturerName = this.model.manufacturer.name;
      const newManufacturer = this.manufacturers.find(
        item => item.name === newManufacturerName
      );
      this.model.manufacturer = newManufacturer;
      this.$emit("save-product", this.model);
    }
  }
};
</script>

<style scoped>
.productInfo {
  padding-top: 10px;
}
.form {
  margin: 0 auto;
  width: 500px;
}
.el-input__inner {
  height: 60px;
}
</style>
