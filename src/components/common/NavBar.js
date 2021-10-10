import { useState } from 'react'
import {	NavLink } from 'react-router-dom'

import { MiniPage } from '../MiniPage'


const NavBar = () => {
	//burger btn
	const [showMenu, setShowMenu] = useState(false);
	
	return (
		<nav className='grid text-upper text-center'>
			<h1 className='brandName'>Bakeshop</h1>

			<div className='nav__menu'>

				<div 
					className={`nav__menu__burger pointer ${showMenu ? 'active' : ''}`}
					onClick={() =>setShowMenu(!showMenu)}
				>
					<div className='nav__menu__burger__top'></div>
					<div className='nav__menu__burger__middle'></div>
					<div className='nav__menu__burger__bottom'></div>
				</div>

				<div className='nav__menu__links flex'>
					<NavLink className='block pointer path' to='/products'>Products</NavLink>
					<NavLink className='block pointer path' to='/order'>Order</NavLink>
				</div>

			</div>

			<MiniPage />
			
		</nav>
	)
}

export default NavBar
