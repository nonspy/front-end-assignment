import React from "react"
import ReactDOM from "react-dom"
import Bacon from "./components/Bacon/Bacon"

const node = document.getElementById("bacon")

if (node) {
  ReactDOM.render(
    <Bacon />,
    node
  )
}
