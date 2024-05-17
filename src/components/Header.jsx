/* eslint-disable react/prop-types */
import { Filters } from './Filters.jsx'
import '../styles/header.css'


export function Header({changeFilters}){
    return (
        <header>
        <h1>Gastando Shop</h1>
        <Filters onChange={changeFilters} />
        </header>
        
    )

}