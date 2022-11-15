
import "./Pizzas.css";
import { useContext } from "react";
import Context from "../../context/context.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faPizzaSlice  } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom"




const Pizzas = () => {
    const { pizzas } = useContext(Context)
    const navigate = useNavigate();

    const viewPizza = (id) => navigate(`/pizzas/${id}`)

    return (
        <main>
            <h1>Nuestras pizzas</h1>
            <div className="pizzas-container row row-cols-2 row-cols-md-2  m-4 g-4">
                {
                    pizzas.map((pizza) => {
                        return (
                            <div className="card bg-dark" key={ pizza.id }>
                                <img src={ pizza.img } alt={ pizza.name }></img>
                                <h2>{ pizza.name }</h2>
                                <p>${ pizza.price }</p>
                                    <div className="icons">
                                    <FontAwesomeIcon className="icon " onClick={() => viewPizza(pizza.id)} icon={faPizzaSlice} />
                                    <FontAwesomeIcon className="icon " icon={faCartPlus} />
                                    </div>
                            </div>
                        )
                    })
                }
            </div>  
        </main>
    )
}

export default Pizzas