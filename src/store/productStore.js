// src/store/productStore.js

import { defineStore } from "pinia"
import { reactive, computed } from "vue"

const productStore = defineStore("product", () => {
  const products = reactive([])
  const totalProducts = computed(() => products.length)
  const addProduct = (product) => {
    products.push({
      id: product.id,
      name: product.name,
      price: product.price,
    })
  }

  return { products, addProduct, totalProducts }
})

export { productStore }
