import { useState, useContext } from "react"
import { cartContext } from "../App"

import { UserInfo } from "./UserInfo"
import { UserOrder } from "./UserOrder"
import { Modal } from "./Modal"
//import stylesheet
import '../style/order.css'


const Order = () => {
	const { cart } = useContext(cartContext);
	
	const [name, setName] = useState('');
	const [address, setAddress] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState();
	const [gender, setGender] = useState();
	const [chooseADay, setChooseADay] = useState(new Date());
	const [showModal, setShowModal] = useState(false);
	//we can save data of userData to database when user click on submit btn, but for now, we don't connect to any.
	const [userData, setUserData] = useState({});

	const resetInput = () => {
		// reset states after submitting
		setName('');
		setAddress('');
		setEmail('');
		setPhoneNumber();
		setChooseADay();
	}
	
	const submit = (e) => {
		e.preventDefault();
		// Data in userData will be save in database, but we have none, so far.
		// This state is created just in case we go further on this project in the future
		setUserData({
			name: name,
			gender: gender,
			contact: {
				address: address,
				email: email,
				phone: phoneNumber,
				gender: gender
			}
		})
		setShowModal(true);
		resetInput();
	}

	return (
		<section className='order-container'>
			{ cart.length > 0
				?	<form onSubmit={submit}>
						<h2 className='text-center text-upper'>Please fill up the form and check your order</h2>
						
						<div className='order grid text-center'>
							<UserInfo
								setName = {setName}
								setAddress = {setAddress}
								setEmail = {setEmail}
								setPhoneNumber = {setPhoneNumber}
								setGender = {setGender}
								setChooseADay = {setChooseADay}
							/>
							<UserOrder cart={cart} />
						</div>

						<Modal showModal={showModal} />
						
						<button
							type='submit'
							value='Submit'
							className='submitBtn pointer block text-white text-capitalize'>
							submit
						</button>
					</form>
				: 	<h2 className='order-container__empty text-center text-upper '>
						Your cart is empty, please select an item to continue
					</h2>
			}
		</section>
	)
}

export default Order;
