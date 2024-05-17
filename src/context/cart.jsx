/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext() //contexto creado

export function CartProvider ({children}){
        const [cart, setCart] = useState([])

            const addToCart = product =>{
                //Primero reviso si el producto esta dentro del carrito
                const productInCartIndex = cart.findIndex(item => item.id === product.id)

                if(productInCartIndex >=0){
                    const newCart = structuredClone(cart) //el structureClone nos realiza una copia profunda 
                    newCart[productInCartIndex].quantity +=1 //revisar por que no acumula la cantidad si no que crea otro item
                    setCart(newCart)
                }
                // si el producto no esta en el carrito
                setCart(prevState =>([
                    ...prevState,
                    {
                        ...product,
                        quantity:1
                    }
                ]))
            }

         const removeFromCart = product =>{
            setCart(prevState => prevState.filter(item =>item.id !== product.id))
         }   
        

            const clearCart = () =>{
                setCart([])
            }
        return (
            <CartContext.Provider value={{
                cart,
                addToCart,
                removeFromCart,
                clearCart
            }
        }> {children}</CartContext.Provider>
        )
        
}