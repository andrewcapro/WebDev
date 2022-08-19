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
      {
        color: "Papaya",
        style: "Clog",
        price: 50,
        photo: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/10001_83E_ALT140/crocs",
        key: "papaya"
      },
      {
        color: "Neon Purple",
        style: "Clog",
        price: 50,
        photo: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/10001_518_ALT140/crocs",
        key: "npurple"
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
      {
        color: "Black",
        style: "All-Terrain Clog",
        price: 55,
        photo: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206340_001_ALT140/crocs",
        key: "ablack"
      },
      {
        color: "White / Multi",
        style: "All-Terrain Clog",
        price: 55,
        photo: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206340_94S_ALT140/crocs",
        key: "awhite"
      },
      {
        color: "Slate Gray / Multi",
        style: "All-Terrain Clog",
        price: 55,
        photo: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206340_0IE_ALT140/crocs",
        key: "asgray"
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
      {
        color: "Digital Violet",
        style: "Crocs Flip",
        price: 30,
        photo: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/207713_5PY_ALT140/crocs",
        key: "dviolet",
      },
      {
        color: "Taffy Pink",
        style: "Crocs Flip",
        price: 30,
        photo: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/207713_6SW_ALT140/crocs",
        key: "tpink",
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

  const determineDisplay = (id) => {
    if (id === "all") {
      return(
        <>
          {showClogs}
          {showATClogs}
          {showFlips}
        </>
      )
    }
    if (id ==="clogs") {
      return(
        <>
          {showClogs}
        </>
      )
    }
    if (id === "atclogs") {
      return (
        <>
          {showATClogs}
        </>
      )
    }
    if (id ==="flips") {
      return (
        <>
          {showFlips} 
        </>
      )
    }
    // console.log(id)
  }

  const [select, setSelect] = useState("all")

  return (
    <>
      <div className="filter">
        <select id={select} onChange={e=>setSelect(e.target.value)}>
          <option value="all">ALL</option>
          <option value="clogs">CLOGS</option>
          <option value='atclogs'>ALL TERRAIN CLOGS</option>
          <option value='flips'>FLIPS</option>
        </select>
      </div>
      <div className='items'>
        {determineDisplay(select)}
        {/* {showClogs}
        {showATClogs}
        {showFlips} */}
      </div>
    </>
  )
}
