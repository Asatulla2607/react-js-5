import React from "react";
import {data} from "../Data/Data"
const Recipes = () =>{
    return(
        <div id="recipes">
            <div className="container">
                <div className="recipes">
                    <h1>Вкусные рецепты</h1>
                    {
                        data.map(el =>(
                            <div>
                                <h3>{el.name}</h3>
                                <ul>
                                    {
                                    el.ingredients.map(el =>(
                                        <li>
                                            {el.name}
                                        </li>
                                    ))
                                    }
                                </ul>
                                <hr/>
                                <h1 className="inctruction">Инструкция по приготовлению</h1>
                                <ol>
                                    {
                                    el.steps.map(el =>(
                                        <li>
                                            {el}
                                        </li>
                                    ))
                                }
                                </ol>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}
export default Recipes