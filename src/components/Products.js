import { useState, useEffect, useContext } from "react"
import { categoryContext } from "./Main";

//Components
import { SideMenu } from "./SideMenu";
import { Item } from './Item'
//menu array
import { menu } from "../menu/menu"
//CSS
import '../style/products.css'


const Products = () => {
	const [itemToShow, setItemToShow] = useState([]);
	const { category } = useContext(categoryContext);

	useEffect( () => {
		setItemToShow(menu);
	}, [])

	return (
		<div className='products-container grid'>

			<SideMenu />

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
