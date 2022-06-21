import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
  
  
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{props.item.item_name}</h4>
      

      <ul className="fact-list">{nutritionFacts.map((fact, index) => {
        // 
        // 
        return(
          <NutritionalLabelFact 
          key = {index}
          fact = {fact}
          selectedItem = {props.item}
          />
        )
      })}</ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {
  const attribute = props.fact.attribute

  return (
    <li className="nutrition-fact">
      <span className="fact-label">{props.fact.label}</span>{" "}
      <span className="fact-value">{props.selectedItem[attribute]}</span>
      
    </li>
  )
}

export default NutritionalLabel
