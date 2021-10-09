import React, { useContext } from 'react'
import { cartContext } from "../App"

import { useHistory } from 'react-router-dom';


const Modal = ({ showModal }) => {
	const { setCart } = useContext(cartContext);

	const history = useHistory();
	const toHomepage = () => {
		history.push('/products');
		setCart([]);
	}

	return (		
		<div className={showModal ? 'modal-container active' : 'modal-container'}>
			<div className='modal text-center'>
				<h2>Have a nice day!</h2>
				<p>We will contact you via email for confirming your order and payment method.</p>

				<p>Thank you for shopping at BakeShop!</p>

				<div className='text-white pointer' onClick={toHomepage}>Go To Homepage</div>
			</div>
		</div>
	)
}

export default Modal