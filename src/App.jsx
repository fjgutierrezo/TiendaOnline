import { products as initialProducts } from "./mocks/products.json"
import { Products } from "./components/Products.jsx";
import { useState } from "react";
import { Header } from "./components/Header.jsx";
import {Cart} from './components/Cart.jsx'
import { CartProvider } from "./context/cart.jsx";
import { Footer } from "./components/Footer.jsx";


function useFilters(){
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0      
  })

  const filterProducts = (products) =>{
    return products.filter(product =>{
        return (
          product.price >= filters.minPrice && (filters.category === 'all' || product.category === filters.category)
        )
    })
  }

  return { filterProducts,setFilters}
}

function App() {
   
    const [products] = useState(initialProducts)
    const {filterProducts,setFilters}= useFilters()
    const filteredProducts = filterProducts(products)

  return (
   //<Products products={products} />
   
   <CartProvider>
      <Header changeFilters={setFilters}/> 
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
  </CartProvider>
  )
}

export default App
