<template>
  <div>
    <el-table class="table" :data="products" min-height="250">
      <el-table-column
        prop="name"
        label="产品名称"
        width="180"
      ></el-table-column>
      <el-table-column prop="price" label="价格" width="180"></el-table-column>
      <el-table-column
        prop="manufacturer.name"
        label="生产商"
        width="180"
      ></el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button class="modify" type="text" size="small"
            ><router-link :to="'/admin/edit/' + scope.row._id" tag="div"
              >修改</router-link
            ></el-button
          >
          <el-button
            class="remove"
            @click="removeProduct(scope.row._id)"
            type="text"
            size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- <table class="table">
      <thead>
        <tr>
          <th>名称</th>
          <th>价格</th>
          <th>制造商</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product._id">
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.manufacturer.name }}</td>
          <td class="modify">
            <router-link :to="'/admin/edit/' + product._id">修改</router-link>
          </td>
          <td class="remove">
            <a @click="removeProduct(product._id)" href="#">删除</a>
          </td>
        </tr>
      </tbody>
    </table> -->
  </div>
</template>

<script>
export default {
  created() {
    if (this.products.length === 0) {
      this.$store.dispatch("allProducts");
    }
  },
  computed: {
    products() {
      return this.$store.getters.allProducts;
    }
  },
  methods: {
    removeProduct(productId) {
      const res = confirm("是否删除此商品？");
      if (res) {
        this.$store.dispatch("removeProduct", {
          productId
        });
      }
    }
  }
};
</script>

<style scoped>
.products {
  padding-top: 10px;
  text-align: center;
}
.table {
  margin: 0 auto;
  width: 740px;
}
.el-table .cell {
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
}
.modify {
  color: blue;
}

.remove {
  color: red;
}
</style>
