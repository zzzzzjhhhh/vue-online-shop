<template>
  <manufacturer-from
    @save-manufacturer="addManufacturer"
    :model="manufacturer"
  ></manufacturer-from>
</template>

<script>
import ManufacturerFrom from "@/components/ManufacturerForm";

export default {
  components: { ManufacturerFrom },
  data() {
    return {
      manufacturer: {}
    };
  },

  methods: {
    addManufacturer(manufacturer) {
      this.$store.dispatch("addManufacturer", { manufacturer });
    }
  }
};
</script>

<style scoped></style>
