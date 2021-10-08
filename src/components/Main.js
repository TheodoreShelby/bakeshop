import React, { useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Products from './Products'
import ItemDetails from './ItemDetails'
import Order from './Order' 


export const categoryContext = React.createContext();


const Main = () => {

	const [category, setCategory] = useState('all')

	return (
		<main>

			<Route path='/'>
				<Redirect to='/products' />
			</Route>

			<Route exact path='/products'>
				<categoryContext.Provider value={ { category, setCategory }}>
					<Products/>
				</categoryContext.Provider>
			</Route>

			<Route path='/products/:index/:id'>
				<ItemDetails />
			</Route>

			<Route path='/order'>
				<Order/>
			</Route>

		</main>
	)
}

export default Main
