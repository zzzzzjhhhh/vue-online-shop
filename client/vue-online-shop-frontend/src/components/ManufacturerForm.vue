<template>
  <div class="manufactureInfo">
    <el-form
      class="form"
      ref="form"
      :model="model"
      label-width="180px"
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
    >
      <el-form-item label="Name">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button v-if="isEditing" type="primary" @click="onSubmit"
          >编辑制造商</el-button
        >
        <el-button v-else @click="onSubmit">添加制造商</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ["model", "isEditing"],
  computed: {
    loading() {
      return this.$store.state.showLoader;
    }
  },
  methods: {
    onSubmit() {
      this.$emit("save-manufacturer", this.model);
    }
  }
};
</script>

<style>
.manufacturerInfo {
  padding-top: 10px;
}
.form {
  margin: 0 auto;
  width: 500px;
}
.el-input__inner {
  height: 50px;
}
</style>
