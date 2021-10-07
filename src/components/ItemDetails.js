import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { menu } from '../menu/menu'
// import stylesheet
import '../style/item details.css'


export const ItemDetails = ({ cart, setCart }) => {
	const {index} = useParams();
	const item = menu[index];	
	
	//create new Cart with clicked item then pass it into setCart
	const handleAdd = () => setCart([...cart, {...item}]);

	const handleMinus = () => {
		cart.splice(index, 1);
		setCart([...cart]);
	}


	return (
		<article className='details grid'>

			<div className='details__img'>
				<img src={item.img} alt='prop'/>
			</div>

			<section className='details__info'>

				<div>
					<h2 className='details__info__name text-center text-capitalize'>{item.name}</h2>

					<p>
						<span className='ingredient'>Ingredients: </span> butter, organic sugar, dried season fruits, non-fat milk, vanilla
					</p>
					<p>
						<span className='price'>Price:</span> ${item.price}
					</p>
					
				</div>

				<div className='addAndMinus grid' >
					
					<div className='addBtn relative pointer' onClick={handleAdd}>
						<div className='addBtn__icon absolute'></div>
						<div className='addBtn__icon absolute'></div>
					</div>

					<div className='minusBtn relative pointer' onClick={handleMinus}>
						<div className='minusBtn__icon absolute'></div>
					</div>

				</div>

				<div className='details__info__order text-center'>
					<Link className='link block text-upper' to='/order'>
						go to cart
					</Link>
				</div>

			</section>

		</article>
	)
}
