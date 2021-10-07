import React, { useState } from 'react'
import {	NavLink, Link } from 'react-router-dom'

import { FaCartPlus } from 'react-icons/fa'


export const NavBar = ({ cart }) => {
	//burger icon
	const [showMenu, setShowMenu] = useState(false)

	return (
		<nav className='grid text-upper text-center'>
			<h1 className='brandName'>Bakeshop</h1>

			<div className='nav__menu'>

				<div className={`nav__menu__burger pointer ${showMenu ? 'active' : ''}`}  onClick={() =>setShowMenu(!showMenu)}>
					<div className='nav__menu__burger__top'></div>
					<div className='nav__menu__burger__middle'></div>
					<div className='nav__menu__burger__bottom'></div>
				</div>

				<div className='nav__menu__links flex'>
					<NavLink className='block pointer path' to='/products'>Products</NavLink>
					<NavLink className='block pointer path' to='/order'>Order</NavLink>
				</div>

			</div>

			<div className='cart'>
				<Link to='/order'>
					<FaCartPlus className='cart__icon pointer' />
				</Link>
				<span className='cart__qty relative'>
					{cart.length ? cart.length : 0 }
				</span>
			</div>

		</nav>
	)
}
