import shoe from '../images/shoe.jpg'
import shoe1 from '../images/shoe1.jpg'
import shoe2 from '../images/shoe2.jpg'
import shoe3 from '../images/shoe3.jpg'

import heel from '../images/heel.jpg'
import heel1 from '../images/heel1.jpg'
import heel2 from '../images/heel2.jpg'
import heel3 from '../images/heel3.jpg'

export const products =[
    {
        id:1,
        Image:shoe,
        title:"Men's Shoe DN 23x,New Product",
        category:"LIFESTYLE",
        price:4999,
        rating:5,
        offer:20,
        description: "This is a high quality men's shoe perfect for every day use.",
        gallery: [shoe1, shoe2, shoe3]

    },
     {
        id:2,
        Image:heel,
        title:"Women's Heel DN 23x,New Product",
        category:"LIFESTYLE",
        price:4599,
        rating:4.5,
        offer:25,
        description: "Stylish Women's shoe designed for comfort and durability.",
        gallery: [heel1, heel2, heel3]

    }
]