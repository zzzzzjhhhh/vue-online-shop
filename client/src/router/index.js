import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Cart from "@/views/Cart.vue";
import Detail from "@/views/Detail.vue";

// Admin Components
import Index from "@/views/admin/Index";
import New from "@/views/admin/products/New";
import Products from "@/views/admin/products/Products";
import Edit from "@/views/admin/products/Edit";
import Manufacturers from "@/views/admin/manufacturers/Manufacturers";
import EditManufacturers from "@/views/admin/manufacturers/EditManufacturers.vue";
import NewManufacturers from "@/views/admin/manufacturers/NewManufacturers.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart
    },
    {
      path: "/detail/:id",
      name: "Detail",
      component: Detail
    },
    {
      path: "/admin",
      name: "Admin",
      component: Index,
      children: [
        {
          path: "new",
          name: "New",
          component: New
        },
        {
          path: "products",
          name: "Products",
          component: Products
        },
        {
          path: "edit/:id",
          name: "Edit",
          component: Edit
        },
        {
          path: "manufacturers",
          name: "Manufacturers",
          component: Manufacturers
        },
        {
          path: "manufacturers/new",
          name: "NewManufacturers",
          component: NewManufacturers
        },
        {
          path: "manufacturers/edit/:id",
          name: "EditManufacturers",
          component: EditManufacturers
        }
      ]
    }
  ]
});
