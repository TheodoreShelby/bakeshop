import {useState, useEffect} from 'react'

import fullscreen1 from '../assets/images/full_screen/coffee_and_cake.jpg'
import fullscreen2 from '../assets/images/full_screen/strawberry_croissants.jpg'
import fullscreen3 from '../assets/images/full_screen/chocolate_cake.jpg'

const carouselArr = [
	{
		carousel_img: fullscreen1,
		carousel_text : 'best ingredients for best bake goods'
	},
	{
		carousel_img: fullscreen2,
		carousel_text: 'stop worrying, start eating'
	},
	{
		carousel_img: fullscreen3,
		carousel_text: 'we are sweet lovers'
	}
];


const FullscreenImg = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	
	const goNext = () => setCurrentIndex((currentIndex +1) % carouselArr.length);

	useEffect(() => setTimeout(goNext, 4000));


	return (
		<section className='carousel relative'>
			{	carouselArr.map(
				//get text and img by using destructure data from carousel array
				( { carousel_text, carousel_img }, index ) => (
					<div 						
						className={`carousel__item flex absolute ${index === currentIndex && 'active'}`}
						key={carousel_text}
					>
						<p className='carousel__item__text text-center text-upper'>{carousel_text}</p>

						<img
							className='absolute'
							src={carousel_img}
							alt={carousel_text}
						/>

					</div>
				))
			}
		</section>
	)
};

export default FullscreenImg
