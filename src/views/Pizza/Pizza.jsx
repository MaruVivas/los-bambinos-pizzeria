import { useParams } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import Context from '../../context/context.js'
const Pizza = () => {
    
    const { id } = useParams()
    const { pizzas } = useContext(Context)

    const [ pizzaSelected, setPizzaSelected ] = useState({})

    useEffect(() => {
        
        const pizzaSelected = pizzas.filter((pizza) => pizza.id === id)
        setPizzaSelected(pizzaSelected[0])
        
    }, [])
    return (
        <div className="pizza-detail" key={pizzaSelected.id}>
            <img className="pizza-detail-img" src={ pizzaSelected.img } alt={pizzaSelected.name}></img>
            <div className="pizza-info">
                <h2>{ pizzaSelected.name }</h2>
                <p>{ pizzaSelected.desc }</p>
                {
                    pizzaSelected.ingredients.map((ingrediente) => {

                    return (
                        <ul>
                            <li>🍕{ ingrediente }</li>
                        </ul>
                    )
                })}
                
            </div>
        </div>
    )
}

export default Pizza