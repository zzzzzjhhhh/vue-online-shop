<template>
  <div>
    <manufacturer-form
      @save-manufacturer="updateManufacturer"
      :model="manufacturer"
      isEditing="true"
    ></manufacturer-form>
  </div>
</template>

<script>
import ManufacturerForm from "@/components/ManufacturerForm.vue";
export default {
  components: { ManufacturerForm },
  data() {
    const manufacturer = this.$store.getters.manufacturerById(
      this.$route.params["id"]
    );
    return {
      // 返回 manufacturer 的拷贝，是为了在修改 manufacturer 的拷贝之后，在保存之前不修改本地 Vuex store 的 manufacturer 属性
      manufacturer: { ...manufacturer }
    };
  },
  created() {
    const { name } = this.manufacturer;
    if (!name) {
      const manufacturerId = this.$route.params["id"];
      this.$store
        .dispatch("manufacturerById", {
          manufacturerId
        })
        .then(() => {
          this.manufacturer = { ...this.$store.state.manufacturer };
        });
    }
  },
  methods: {
    updateManufacturer(manufacturer) {
      this.$store.dispatch("updateManufacturer", { manufacturer });
    }
  }
};
</script>

<style scoped></style>
