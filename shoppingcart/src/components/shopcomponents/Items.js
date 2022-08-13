import { useState } from "react"
import React from "react"
import IMAGES from "./images"
import Image from 'react-image-webp'

export default function Items() {

  const [shopitems, setShopItems] = useState({
    clogs: [
      {
        color: "Slate Gray",
        style: "Clog",
        price: "$49.99",
        photo: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/10001_0DA_ALT150/crocs",
        key: "sgray",
      },
      {
        color: "Bright Cobalt",
        style: "Clog",
        price: "$49.99",
        photo: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/10001_4JL_ALT150/crocs",
        key: "bcobalt"
      },
    ],
    allTerrainClogs: [
      {
        color: "Blue Gray",
        style: "All-Terrain Clog",
        price: "$54.99",
        photo: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206340_0ID_ALT140/crocs",
        key: "bgray"
      },
    ],
    flip: [
      {
        color: "Black",
        style: "Crocs Flip",
        price: "$29.99",
        photo: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/207713_001_ALT140/crocs",
        key: "black"
      },
      {
        color: "White",
        style: "Crocs Flip",
        price: "$29.99",
        photo: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/207713_100_ALT140/crocs",
        key: "white",
      },
    ],
  })

  const clogs = shopitems.clogs
  const showClogs = clogs.map((storeItem) => (
    <section className="card">
            <h3>{storeItem.color} {storeItem.style}</h3>
            <Image 
              webp={storeItem.photo}
              width="300"
            />
            <div className='buttons'>
                <button>-</button>
                <button>Add To Cart</button>
                <button>+</button>
            </div>
        </section>
  ))

  const atClogs = shopitems.allTerrainClogs
  const showATClogs = atClogs.map((storeItem) => (
    <section className="card">
            <h3>{storeItem.color} {storeItem.style}</h3>
            <Image 
              webp={storeItem.photo}
              width="300"
            />
            <div className='buttons'>
                <button>-</button>
                <button>Add To Cart</button>
                <button>+</button>
            </div>
        </section>
  ))

  const flips = shopitems.flip
  const showFlips = flips.map((storeItem) => (
    <section className="card">
            <h3>{storeItem.color} {storeItem.style}</h3>
            <Image 
              webp={storeItem.photo}
              width="300"
            />
            <div className='buttons'>
                <button>-</button>
                <button>Add To Cart</button>
                <button>+</button>
            </div>
        </section>
  ))

  return (
    <div className='items'>
      {showClogs}
      {showATClogs}
      {showFlips}
    </div>
  )
}
