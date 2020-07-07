export const productGetters = {
  allProducts(state) {
    return state.products;
  },
  productById(state, getters) {
    return id => {
      if (getters.allProducts.length > 0) {
        return getters.allProducts.find(product => product._id === id);
      }
      return state.product;
    };
  }
};
export const manufacturerGetters = {
  allManufacturers(state) {
    return state.manufacturers;
  },
  manufacturerById(state, getters) {
    return id => {
      if (getters.allManufacturers.length > 0) {
        return getters.allManufacturers.find(
          manufacturer => manufacturer._id === id
        );
      }
      return state.manufacturer;
    };
  }
};
