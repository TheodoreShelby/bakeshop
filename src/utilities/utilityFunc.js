//output items to table
export const sortAllItem = (cartArr) => {

	const duplicateFilter = (arr) => {
		// create a set of values
		const itemSet = new Set();
		//add unique item name to the set
		arr.map(item => itemSet.add(item.name))
		//convert the set to an array then return;
		return [...itemSet];
	}

	const nonDuplicateItems = duplicateFilter(cartArr);

	//count qty of each item
	const howMany = nonDuplicateItems.map(item => {
		let count = 0,
			 itemPrice = 0,
			 totalPrice = 0,
			 img;

		for (let cartItem of cartArr) {
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
			unitPrice: itemPrice,
			itemTotalPrice: totalPrice,
			image: img,
		}
	})

	const compareName = (a, b) => {
		if (a.item > b.item) {
			return 1;
		} else if (a.item < b.item) {
			return -1;
		} else {
			return 0;
		}
	}

	return howMany.sort(compareName)
	// return howMany;
}

//count total price
export const countPrice = (arr) => {
	let total = 0;
	arr.map(item => total += item.price )
	return total.toFixed(2)
}