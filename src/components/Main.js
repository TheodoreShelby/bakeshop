import React, { useState } from 'react'
import Products from './Products'
import { ItemDetails } from './ItemDetails'
import { Order } from './Order' 
import { Route, Redirect } from 'react-router-dom'


const Main = ({ setCart, cart }) => {
	//middleware state
	const [category, setCategory] = useState('all')

	return (
		<main>

			<Route path='/'>
				<Redirect to='/products' />
			</Route>

			<Route exact path='/products'>
				<Products category={category} setCategory={setCategory} />
			</Route>

			<Route path='/products/:index/:item'>
				<ItemDetails cart={cart} setCart={setCart} />
			</Route>

			<Route path='/order'>
				<Order cart={cart} setCart={setCart} />
			</Route>

		</main>
	)
}

export default Main
