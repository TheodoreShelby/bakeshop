import React, { useState, useEffect } from "react"
import { SideMenu } from "./SideMenu";

//menu array
import { menu } from "../menu/menu"

import '../style/products.css'

import { Item } from './Item'


const Products = ({ category, setCategory }) => {
	const [itemToShow, setItemToShow] = useState([]);

	useEffect( () => {
		setItemToShow(menu);
	}, [])

	return (
		<div className='products-container grid'>

			<SideMenu setCategory={setCategory} category={category}  />

			<section className='products grid'>
				{
					itemToShow.map((item, index) => {
						//pass item data to Item component
						if (item.category === category) {
							return <Item index={index} item={item} />
						} else if (category === 'all') {
							return <Item index={index} item={item} />
						}
					})
				}
			</section>
		</div>
	)
}

export default Products