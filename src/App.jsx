import * as React from "react"
// IMPORT ANY NEEDED COMPONENTS HERE
import { createDataSet } from "./data/dataset"
import Header from "./components/Header/Header"
import Chip from "./components/Chip/Chip"
import Instructions from "./components/Instructions/Instructions"
import NutritionalLabel, { NutritionalLabelFact } from "./components/NutritionalLabel/NutritionalLabel"
import "./App.css"
import { useState } from "react"

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!
const { data, categories, restaurants } = createDataSet()

export function App() {
  const[selectedCat, setSelectedCat] = useState("")
  const[selectedRest, setSelectedRest] = useState("")
  const[selectedItem, setSelectedItem] = useState("")

  function handleClickCat(category){
    setSelectedCat(category)
  }

  function handleClickRest(restaurant){
    setSelectedRest(restaurant)
  }

  function handleClickItem(item){
    setSelectedItem(item)
  }

  var currentMenuItems;
  currentMenuItems = data.filter(datum => {
    if (datum.restaurant == selectedRest && datum.food_category == selectedCat){
      return(
        datum
      )
    }
  })
  
  

  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
          {categories.map(category => {
            return (
              <Chip label = {category} 
              key = {category}
              isActive = {category === selectedCat ? true: false}
              onClick = {() => handleClickCat(category)}/>
            )
          })}
          
        </div>
      </div>

      {/* MAIN COLUMN */}
      <div className="container">
        {/* HEADER GOES HERE */}
        <Header 
          title={appInfo.title}
          tagline={appInfo.tagline}
          description={appInfo.description}
          />

        {/* RESTAURANTS ROW */}
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">{/* YOUR CODE HERE */}
          {restaurants.map(restaurant => {
            return (
              <Chip label = {restaurant} 
              key = {restaurant}
              isActive = {restaurant === selectedRest ? true: false}
              onClick = {() => handleClickRest(restaurant)}/>
            )
          })}
          
          </div>
        </div>

        {/* INSTRUCTIONS GO HERE */}
        <Instructions 
        instructions = {appInfo.instructions}

        />


        {/* MENU DISPLAY */}
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {currentMenuItems.map((item, index) => {
              return(
                <Chip label = {item.item_name} 
                  key = {index}
                  isActive = {item === selectedItem? true: false}
                  onClick = {() => handleClickItem(item)}/>
              )
            })}
            {/* YOUR CODE HERE */}
          </div>

          {/* NUTRITION FACTS */}
          
          <div className="NutritionFacts nutrition-facts">{/* YOUR CODE HERE */}
          {selectedItem === "" ? null: <NutritionalLabel item = {selectedItem}/>}
                 
          </div>
        </div>

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  )
}

export default App
