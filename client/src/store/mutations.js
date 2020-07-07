import { Message } from "element-ui";
import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  PRODUCT_BY_ID,
  PRODUCT_BY_ID_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_SUCCESS,
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
  ALL_MANUFACTURERS,
  ALL_MANUFACTURERS_SUCCESS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  MANUFACTURER_BY_ID,
  MANUFACTURER_BY_ID_SUCCESS,
  ADD_MANUFACTURER,
  ADD_MANUFACTURER_SUCCESS,
  UPDATE_MANUFACTURER,
  UPDATE_MANUFACTURER_SUCCESS,
  REMOVE_MANUFACTURER,
  REMOVE_MANUFACTURER_SUCCESS
} from "./mutationTypes";

export const productMutations = {
  [ALL_PRODUCTS](state) {
    state.showLoader = true;
  },
  [ALL_PRODUCTS_SUCCESS](state, payload) {
    const { products } = payload;
    state.showLoader = false;
    state.products = products;
  },
  [PRODUCT_BY_ID](state) {
    state.showLoader = true;
  },
  [PRODUCT_BY_ID_SUCCESS](state, payload) {
    const { product } = payload;
    state.showLoader = false;
    state.product = product;
  },
  [REMOVE_PRODUCT](state) {
    state.showLoader = true;
  },
  [REMOVE_PRODUCT_SUCCESS](state, payload) {
    state.showLoader = false;

    const { productId } = payload;
    state.products = state.products.filter(
      product => product._id !== productId
    );
  },
  [UPDATE_PRODUCT](state) {
    state.showLoader = true;
  },
  [UPDATE_PRODUCT_SUCCESS](state, { product: newProduct }) {
    state.showLoader = false;
    state.products = state.products.map(product => {
      if (product._id === newProduct._id) {
        return newProduct;
      }
      return product;
    });
    state.product = newProduct;
  },
  [ADD_PRODUCT](state) {
    state.showLoader = true;
  },
  [ADD_PRODUCT_SUCCESS](state, { product }) {
    state.showLoader = false;
    state.products.push(product);
  }
};
export const cartMutations = {
  [ADD_TO_CART](state, payload) {
    const { product } = payload;
    state.cart.push(product);
    Message({
      message: "成功加入购物车！",
      type: "success"
    });
  },
  [REMOVE_FROM_CART](state, payload) {
    const { productId } = payload;
    state.cart = state.cart.filter(product => product._id !== productId);
    Message({
      message: "成功移除购物车！",
      type: "success"
    });
  }
};
export const manufacturerMutations = {
  [ALL_MANUFACTURERS](state) {
    state.showLoader = true;
  },
  [ALL_MANUFACTURERS_SUCCESS](state, payload) {
    const { manufacturers } = payload;

    state.showLoader = false;
    state.manufacturers = manufacturers;
  },
  [REMOVE_MANUFACTURER](state) {
    state.showLoader = true;
  },
  [REMOVE_MANUFACTURER_SUCCESS](state, payload) {
    state.showLoader = false;

    const { manufacturerId } = payload;
    state.manufacturers = state.manufacturers.filter(
      manufacturer => manufacturer._id !== manufacturerId
    );
  },
  [UPDATE_MANUFACTURER](state) {
    state.showLoader = true;
  },
  [UPDATE_MANUFACTURER_SUCCESS](state, { manufacturer: newManufacturer }) {
    state.showLoader = false;
    state.manufacturers = state.manufacturers.map(manufacturer => {
      if (manufacturer._id === newManufacturer._id) {
        return newManufacturer;
      }
      return manufacturer;
    });
    state.manufacturer = newManufacturer;
  },
  [ADD_MANUFACTURER](state) {
    state.showLoader = true;
  },
  [ADD_MANUFACTURER_SUCCESS](state, { manufacturer }) {
    state.showLoader = false;
    state.manufacturers.push(manufacturer);
  },
  [MANUFACTURER_BY_ID](state) {
    state.showLoader = true;
  },
  [MANUFACTURER_BY_ID_SUCCESS](state, { manufacturer }) {
    state.showLoader = false;
    state.manufacturer = manufacturer;
  }
};
