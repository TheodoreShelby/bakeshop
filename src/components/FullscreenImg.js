import {useState, useEffect} from 'react'


const carouselArr = [
	{
		carousel_img: 'https://cdn.pixabay.com/photo/2016/02/13/12/28/coffee-1197758_960_720.jpg',
		carousel_text : 'best ingredients for best bake goods'
	},
	{
		carousel_img: "https://cdn.pixabay.com/photo/2019/03/24/14/25/croissants-4077817_960_720.jpg",
		carousel_text: 'stop worrying, start eating'
	},
	{
		carousel_img: 'https://cdn.pixabay.com/photo/2018/04/04/16/44/food-3290299_960_720.jpg',
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
