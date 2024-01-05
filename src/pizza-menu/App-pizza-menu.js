import React from "react";
import {pizzaData} from "./data"
import "./App-pizza-menu.css"

  


export default function App(){
    return(
        <div className="container">
          <Header />
          <Menu />
          <Footer />
        </div>
    )
}

function Header(){
  return <header  className="header">
    <h1>Fast React Pizza Co.</h1>
  </header>
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our menu</h2>
      {pizzaData.map(pizza => (
        <Pizza
          key={pizza.name}
          name={pizza.name}
          ingredients={pizza.ingredients}
          photoName={pizza.photoName}
          price={pizza.price}
        />
      ))}
    </div>
  )
}


function Footer(){
  const hour = new Date().getHours()
  const openHour = 12
  const closeHour = 22
  const isOpen = hour >= openHour && hour <= closeHour
  console.log(isOpen)
  // if(hour >= openHour && hour <= closeHour) {alert("We're currently open")} else {alert("Sorry we're currently closed")}
  console.log(hour)
  return <footer className="footer"> {new Date().toLocaleTimeString()}. we're currently open</footer>
}

function Pizza(props) {
  const { name, ingredients, photoName , price} = props
  return (
    <div className="pizza">
      <img src={photoName} alt={`Pizza ${name}`} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </div>
  )
}

