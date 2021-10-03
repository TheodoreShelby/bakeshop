import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { SideMenu } from "./SideMenu";

//menu array
import { menu } from "../../assets/menu/menu"
import '../../style/products.css'


export const Products = ({ category, setCategory }) => {
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


const Item = ({ item, index}) => {

	return (
		<article key={item.name} className='item pointer'>
			<Link className='link' to={`/products/${index}/${item.name.replace(' ', '-')}`}>

				<div className='item__img-container'>
					<img className='item__img' src={item.img} alt={item.name} />
				</div>

				<div className='item__text-container'>
					<p className='item__text__name text-center text-upper'>{item.name}</p>

					<p className='item__text__details text-center text-upper'>Details</p>
				</div>
				
			</Link>
		</article>
	)
}
