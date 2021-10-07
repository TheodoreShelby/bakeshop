import React from 'react'

import FullscreenImg from '../FullscreenImg'
import { NavBar } from './NavBar'

//import stylesheets
import '../../style/header.css'
import '../../style/shared.css'


const Header = ({ cart }) => {
	return (
		<header>
			<FullscreenImg />
			<NavBar cart={cart} />
		</header>
	)
}

export default Header
