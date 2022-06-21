import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(item) {
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{item.item_name}</h4>

      <ul className="fact-list">{nutritionFacts.map(fact => {
        // console.log('fact: ', fact);
        console.log('item: ', item.item);
        return(
          <NutritionalLabelFact 
          fact = {fact}
          selectedItem = {item.item}
          />
        )
      })}</ul>
    </div>
  )
}

export function NutritionalLabelFact(fact, selectedItem) {
  console.log('fact: ', fact);
  console.log('fact.selectedItem: ', fact.selectedItem);
  console.log('fact.selectedItem.attribute: ', fact.selectedItem.attribute);
  // console.log('item[props.attribute]: ', item[props.attribute]);
  const attribute = fact.fact.attribute
  const newSI = fact.selectedItem
  // newSI.attribute
  console.log('newSI.attribute: ', newSI.attribute);
  console.log('attribute: ', fact.fact.attribute);

  return (
    <li className="nutrition-fact">
      <span className="fact-label">{fact.fact.label}</span>{" "}
      <span className="fact-value">{fact.selectedItem.attribute}</span>
      
    </li>
  )
}

export default NutritionalLabel
