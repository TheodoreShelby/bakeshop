import React, {useState, useEffect} from 'react'
import fullscreen1 from '../../assets/images/full screen/cake.webp'
import fullscreen2 from '../../assets/images/full screen/chocolate stack.jpg'
import fullscreen3 from '../../assets/images/full screen/chocolate bar.jpg'

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
	},
];


export const FullscreenImg = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	
	const goNext = () => setCurrentIndex(currentIndex === carouselArr.length -1 ? 0 : currentIndex + 1);

	useEffect(() => setTimeout(goNext, 4000));

	return (
		<section className='carousel relative'>
			{	carouselArr.map(
				//get text and img by using destructure data from carousel array
				( { carousel_text, carousel_img }, index ) => (
					<div 
						className={ index === currentIndex ? 'carousel__item flex absolute active' : 'carousel__item flex absolute' }
						key={carousel_text}
					>
						<h1 className='carousel__item__text'>
							{carousel_text}
						</h1>
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
