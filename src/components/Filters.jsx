/* eslint-disable react/prop-types */
import '../styles/filters.css'
import { useState, useId } from 'react'
import { Search } from '../components/Search'

export function Filters({onChange}){
    const [minPrice, setMinPrice]= useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        onChange(prevState =>({
            ...prevState , minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) =>{
        onChange(prevState =>({
            ...prevState , category: event.target.value
        }))
    }



    return (
        <section className='filters'>
            <div>
                <label htmlFor={minPriceFilterId}>Price</label>
                <input 
                    type = 'range'
                    id = {minPriceFilterId}
                    min = '0'
                    max = '1000'
                    value={minPrice}
                    onChange={handleChangeMinPrice}
                    >                                        
                </input>
                <span>${minPrice}</span>
            </div>
            <div>
                <Search />
            </div>
            <div>
                <label htmlFor="category">Categoria</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Portatiles</option>
                    <option value="smartphones">Celulares</option>
                    <option value="home-decoration">Hogar</option>
                    <option value="fragrances">Perfume</option>
                    <option value="skincare">Belleza</option>
                    <option value="groceries">Comida</option>                   
                </select>
            </div>
        </section>
    )


}