import { Link } from "react-router-dom";


export const Item = ({ item, index }) => {

	return (
		<article className='item pointer'>
			<Link className='link' to={`/products/${index}/${item.id}`}>

				<div className='item__img-container'>
					<img className='item__img' src={item.img} alt={item.name} loading='lazy' />
				</div>

				<div className='item__text-container'>
					<p className='item__text__name text-center text-upper'>{item.name}</p>

					<p className='item__text__details text-center text-upper'>Details</p>
				</div>
				
			</Link>
		</article>
	)
}

