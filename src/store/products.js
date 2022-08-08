import { makeAutoObservable } from "mobx";

class Products {
  products = [];

  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }

  fetchProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => (this.products = [...json]));
  }

  addToCart() {}

  removeFromCart() {}
}

export default new Products();
