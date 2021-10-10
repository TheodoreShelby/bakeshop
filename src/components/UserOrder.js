import { sortAllItem, countPrice } from '../utilities/utilityFunc'


export const UserOrder = ({ cart }) => {

	const price = countPrice(cart);

	const itemToPay = sortAllItem(cart);

	return (
		<div className='order__item-container'>
			<table className='order-table'>
				<thead>
					<tr className='order-table__thead__tr text-white'>
						<th colSpan='2'>Item name</th>
						<th className='thead'>Quantity</th>
						<th className='thead'>Unit price</th>
						<th className='thead'>Price</th>
					</tr>
				</thead>

				<tbody>
					{itemToPay.map((item, index) => {
						return (
							<tr key={item.item}>
								<td>{index + 1}.</td>
								<td className='text-capitalize'>{item.item}</td>
								<td>{item.qty}</td>
								<td>${item.unitPrice.toFixed(1)}</td>
								<td>${item.itemTotalPrice.toFixed(2)}</td>
							</tr>
						)
					})}
				</tbody>

				<tfoot>
					<tr className='order-table__tfoot__tr text-white'>
						<td colSpan='4'>Total:</td>
						<td>${price}</td>
					</tr>
				</tfoot>
			</table>
		</div>
	)
}
