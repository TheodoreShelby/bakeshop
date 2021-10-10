import { useState, useContext, useRef, useEffect } from 'react'
import { cartContext } from '../App';

import { sortAllItem, countPrice } from '../utilities/utilityFunc'
import { FaCartPlus } from 'react-icons/fa'


export const MiniPage = () => {
	const value = useContext(cartContext);
	const { cart } = value;
	const { setCart } = value;

	// show/hide side page
	const [toggleMiniPage, setMiniPage] = useState(false);
	const [miniList, setMiniList] = useState(sortAllItem(cart));

	const miniRef = useRef();
	
	useEffect(() => {

		const ifClickedOutside = e => {
			if (toggleMiniPage && miniRef.current && !miniRef.current.contains(e.target)) {
				setMiniPage(false);
			}
		}
		document.addEventListener('mousedown', ifClickedOutside);

		return () => document.removeEventListener('mousedown', ifClickedOutside);
	}, [toggleMiniPage])
	

	useEffect(()=> setMiniList(sortAllItem(cart)), [cart])
	
	const totalPrice = countPrice(cart);

	const findItem = (arr, itemName) => {
		return arr.find(item => item.name === itemName )
	}

	const handleAdd = (e) => {
		e.stopPropagation();
		//get item name
		const itemName = e.target.parentNode.dataset.item;
		//find clicked item in cart
		const itemToAdd = findItem(cart, itemName);
		// add found item to cart
		if (itemToAdd) {
			setCart([ ...cart, {...itemToAdd} ])
		}
	}

	const handleMinus = (e) => {
		e.stopPropagation();
		//get item name
		const itemName = e.target.dataset.item;
		const itemToSubtract = findItem(cart, itemName)
		//get index to substract
		const substractedIndex = cart.indexOf(itemToSubtract);
		cart.splice(substractedIndex, 1)
		setCart([...cart]);
	}

	const handleClick = () => {
		setMiniPage(prevState => !prevState)
		miniRef.current.scrollIntoView();
	}


	return (
		<>
		<div className='cart pointer'  onClick={handleClick}  ref={miniRef}>
			<span>
				<FaCartPlus className='cart__icon' />
			</span>
			
			<span className='cart__qty relative'>
				{cart.length ? cart.length : 0 }
			</span>


			{/* this area for mini page */}
			{
			<div className={`miniPage-container ${toggleMiniPage && 'active'}`}>
				<div className='miniPage'>
					<h2 className='text-white'>Cart</h2>
					
					<div className='miniPage__table-container'>
						{
							miniList.length > 0
						? 	<table className='miniPage__table'>
								<thead>
									<tr>
										<th colSpan='6'>Item</th>
										<th>Price</th>
									</tr>
								</thead>

								<tbody> 
									{
										miniList.map((item, index) => {
											return (<>
												<tr>
													<td colSpan='4' className='miniPage__table__itemName'>{index + 1}.{item.item}</td>
													<td >${item.unitPrice} x {item.qty}</td>
													<td className='flex adjust-cell'>

														<div className='addBtn relative pointer' onClick={handleAdd} data-item={item.item}>
															<div className='addBtn__icon absolute'></div>
															<div className='addBtn__icon absolute'></div>
														</div>

														<div className='minusBtn relative pointer' onClick={handleMinus} data-item={item.item}>
															<div className='minusBtn__icon absolute'></div>
														</div>

													</td>

													<td>${item.itemTotalPrice.toFixed(2)}</td>

												</tr>
											</>)
										})
									}
								</tbody>

								<tfoot>
									<tr>
										<td colSpan='6'>Total:</td>
										<td>${totalPrice}</td>
									</tr>
								</tfoot>

							</table>
						: 	<p>Your cart is empty</p>
						}

					</div>
				</div>
			</div>
			}

		</div>
		</>
	)
}
