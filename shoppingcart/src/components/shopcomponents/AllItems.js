import { useState } from 'react'

export default function AllItems() {

    const [shopitems, setShopItems] = useState({
        slateGrayClog: {
            color: "Slate Gray",
            style: "Clog",
            price: "$49.99",
            photo: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/10001_0DA_ALT150/crocs",
        },
        brightCobaltClog: {
            color: "Bright Cobalt",
            style: "Clog",
            price: "$49.99",
            photo: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/10001_4JL_ALT150/crocs",
        },
        blueGrayATClog: {
            color: "Blue Gray",
            style: "All-Terrain Clog",
            price: "$54.99",
            photo: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206340_0ID_ALT140/crocs",
        },
        blackFlip: {
            color: "Black",
            style: "Crocs Flip",
            price: "$29.99",
            photo: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/207713_001_ALT140/crocs",
        },
        whiteFlip: {
            color: "White",
            style: "Crocs Flip",
            price: "$29.99",
            photo: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/207713_100_ALT140/crocs",
        },
        
    })
}
