export const UserOrder = ({ cart }) => {
	// count total price of every item
	const totalPrice = () => {
		let total = 0;
		cart.map(item => total +=item.price )
		return total.toFixed(2)
	}

	//get non-duplicate items from input arr
	const duplicateFilter = (arr) => {
		// create a set of values
		const itemSet = new Set();
		//add unique item name to the set
		arr.map(item => itemSet.add(item.name))
		//convert the set to an array then return;
		return [...itemSet];
	}

	const nonDuplicateItems = duplicateFilter(cart);

	//count qty of each item
	const howMany = nonDuplicateItems.map(item => {
		let count = 0,
			 itemPrice = 0,
			 totalPrice = 0,
			 img;

		for (let cartItem of cart) {
			if (cartItem.name === item) {
				count++;
				itemPrice = cartItem.price;
				totalPrice += cartItem.price;
				img = cartItem.img;
			}
		}

		return {
			item: item,
			qty: count,
			'item price': itemPrice,
			'item total price': totalPrice,
			image: img,
		}
	})


	return (
		<div className='order__item-container'>
			<table className='order-table'>
				<thead>
					<tr className='text-white'>
						<th colSpan='2'>Item name</th>
						<th className='thead'>Quantity</th>
						<th className='thead'>Unit price</th>
						<th className='thead'>Price</th>
					</tr>
				</thead>

				<tbody>
					{howMany.map((item, index) => {
						return (
							<tr>
								<td>{index + 1}.</td>
								<td className='text-capitalize'>{item.item}</td>
								<td>{item.qty}</td>
								<td>${item['item price'].toFixed(1)}</td>
								<td>${item['item total price'].toFixed(2)}</td>
							</tr>
						)
					})}
				</tbody>

				<tfoot>
					<tr className='text-white'>
						<td colSpan='4'>Total:</td>
						<td>${totalPrice()}</td>
					</tr>
				</tfoot>
			</table>
		</div>
	)
}
