import { useState } from "react"
import { useHistory } from "react-router-dom"
import { UserInfo } from "./UserInfo"
import { UserOrder } from "./UserOrder"

//import stylesheet
import '../../style/order.css'


export const Order = ({ cart, setCart }) => {

	const [name, setName] = useState('');
	const [address, setAddress] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState();
	const [gender, setGender] = useState();
	const [chooseADay, setChooseADay] = useState(new Date())
	const [showModal, setShowModal] = useState(false);
	const [userData, setUserData] = useState({})

	const resetInput = () => {
		// reset inputs value
		const inputs = document.querySelectorAll('input');
		inputs.forEach(input => input.value = '');
		// reset states after submitting
		setName('');
		setAddress('');
		setEmail('');
		setPhoneNumber();
		setChooseADay();
	}
	
	const submit = (e) => {
		e.preventDefault();
		setUserData({
			name: name,
			gender: gender,
			contact: {
				address: address,
				email: email,
				'phone number': phoneNumber,
				gender: gender
			}
		})
		if (cart.length > 0) {
			setShowModal(true);
			resetInput(userData);
		}
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

						<Modal showModal={showModal} setCart={setCart} />
						
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

const Modal = ({ showModal, setCart }) => {
	
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
