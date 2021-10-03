import { useState, useEffect, useRef } from "react";


export const UserInfo = ({
		setName,
		setAddress,
		setEmail,
		setPhoneNumber,
		setGender,
		setChooseADay
	}) => {

	let date = new Date();
	//store show/hide datePicker state by using true/false
	const [toggleShowDate, setToggleShowDate] = useState(false);
	//store selected month
	const [month, setMonth] = useState(date.getMonth());
	//store selected year
	const [year, setYear] = useState(date.getFullYear());

	
	//initialize selected element's text with current date time
	const [selected, setSelectedDay] = useState({
		day: date.getDate(),
		month: date.getMonth(),
		year: date.getFullYear()
	})

	// re-create 'selected' state
	const selectedDay = (e) =>{
		const clickedDay = e.target.innerText;
		setSelectedDay({
			day: clickedDay,
			month: month,
			year: year
		})
		setChooseADay(new Date(selected.year, selected.month, parseInt(clickedDay)))
	}	

	//store user input data
	const handleData = ({target}) => {
		const name = target.name;
		const value = target.value;
		switch(name) {
			case 'name': 
				setName(value); break;
			case 'address':
				setAddress(value); break;
			case 'email':
				setEmail(value); break;
			case 'phone-number':
				setPhoneNumber(value); break;
			default:
				setGender(value); break;
		}
	}

	// js for date-picker
	//this array for helping display selected month in text
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	//major functions
	const datePickerRef = useRef();
	useEffect(() => {

		const ifClickedOutside = e => {
			if (toggleShowDate && datePickerRef.current && !datePickerRef.current.contains(e.target)) {
				setToggleShowDate(false);
			}
		}

		document.addEventListener('mousedown', ifClickedOutside);

		return () => document.removeEventListener('mousedown', ifClickedOutside);
	}, [toggleShowDate])


	const toNextMonth = (e) => {
		e.stopPropagation();
		setMonth(month + 1);
		if(month >= 11) {
			setMonth(0);
			setYear(year + 1);
		}
	}
	
	const toPrevMonth = (e) => {
		e.stopPropagation();
		setMonth(month - 1);
		if (month <= 0) {
			setMonth(11);
			setYear(year - 1);
		}
	}

	//this function get number of days in a month
	const getDaysInMonth = (yyyy, mm) => new Date(yyyy, mm + 1, 0).getDate();
	let numberOfDays = getDaysInMonth(year, month);
	const daysInMonth = [];
	for (let i = 0; i < numberOfDays; i++) {
		daysInMonth.push(i);
	}
	const showDays = daysInMonth.map(day => <p key={day} className='day flex pointer' onClick={selectedDay}>{day + 1}</p>);

	// code above this line
	return (
		<div className='order__form'>
			
			<div className='order__form__info grid'>
				<label htmlFor='name'>Full name:</label>
				<input
					placeholder='your full name'
					onChange={handleData}
					name='name'
					id='name'
					required
				/>
			</div>

			<div className='order__form__info grid'>
				<label htmlFor='address'>Address:</label>
				<input
					placeholder='Where can we deliver?'
					onChange={handleData}
					name='address' 
					id='address'
					required
				/>
			</div>

			<div className='order__form__info grid'>
				<label htmlFor='email'>Email:</label>
				<input
					placeholder='we confirm your order via email'
					onChange={handleData}
					name='email'
					id='email'
					required
					type='text'
				/>
			</div>

			<div className='order__form__info grid'>
				<label htmlFor='phoneNumber'>Phone number:</label>
				<input
					pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
					placeholder='xxxx-xxx-xxx'
					onChange={handleData}
					name='phone-number'
					id='phoneNumber'
					required
					type='tel'
				/>
			</div>

			<div className='order__form__info grid'>
				<label htmlFor='gender'>Gender</label>
				<select
					name='gender'
					id='gender'
					required
					onChange={handleData}
				>
					<option value='' >please select</option>
					<option value='male'>Male</option>
					<option value='female'>Female</option>
					<option value='others'>Others</option>
				</select>
			</div>

			<div className='order__form__info grid' ref={datePickerRef}>
				<p>When should we deliver?</p>
				{/* date picker */}
				<div className='date-picker relative text-white' onClick={()=> setToggleShowDate(prevState => !prevState)} >

					<div className='date-picker__selected-date flex pointer'>
						{ selected.day < 10
							? `0${selected.day}`
							: selected.day
						} / {	(selected.month + 1) < 10
								? `0${selected.month + 1}`
								: selected.month + 1
							 } / { selected.year }
					</div>

					<div className={toggleShowDate ? 'dates absolute active' : 'dates absolute'}>

						<div className='month flex'>
							{/* add e.stopPropagation() on click event to keep these 3 div displayed */}
							<div className='arrow prev-mth pointer text-center' onClick={toPrevMonth}>&lt;</div>
							<div className='mth' onClick={e => e.stopPropagation()}>{months[month]} {year}</div>
							<div className='arrow next-mth pointer text-center' onClick={toNextMonth}>&gt;</div>
						</div>

						<div className='days grid'>{showDays}</div>
					</div>
				</div>
			</div>
		</div>
	)
}
