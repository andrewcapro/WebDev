import { useState } from "react"
import React from "react"
import Card from "./Card"

export default function Items({ onAdd }) {

  const [shopitems] = useState({
    clogs: [
      {
        color: "Slate Gray",
        style: "Clog",
        price: 50,
        photo: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/10001_0DA_ALT150/crocs",
        key: "sgray",
      },
      {
        color: "Bright Cobalt",
        style: "Clog",
        price: 50,
        photo: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/10001_4JL_ALT150/crocs",
        key: "bcobalt"
      },
    ],
    allTerrainClogs: [
      {
        color: "Blue Gray",
        style: "All-Terrain Clog",
        price: 55,
        photo: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206340_0ID_ALT140/crocs",
        key: "bgray"
      },
    ],
    flip: [
      {
        color: "Black",
        style: "Crocs Flip",
        price: 30,
        photo: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/207713_001_ALT140/crocs",
        key: "black"
      },
      {
        color: "White",
        style: "Crocs Flip",
        price: 30,
        photo: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/207713_100_ALT140/crocs",
        key: "white",
      },
    ],
  })

  const clogs = shopitems.clogs
  const showClogs = clogs.map((storeItem) => (
    <Card color={storeItem.color} style={storeItem.style} price={storeItem.price} photo={storeItem.photo} onAdd={onAdd}/>
  ))

  const atClogs = shopitems.allTerrainClogs
  const showATClogs = atClogs.map((storeItem) => (
    <Card color={storeItem.color} style={storeItem.style} price={storeItem.price} photo={storeItem.photo} onAdd={onAdd}/>
  ))

  const flips = shopitems.flip
  const showFlips = flips.map((storeItem) => (
    <Card color={storeItem.color} style={storeItem.style} price={storeItem.price} photo={storeItem.photo} onAdd={onAdd}/>
  ))

  return (
    <div className='items'>
      {showClogs}
      {showATClogs}
      {showFlips}
    </div>
  )
}
