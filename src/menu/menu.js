import { v4 as uuid4 } from 'uuid'

import berryCupcake from '../assets/images/cakes/berry_cupcake.webp'
import berryPie from '../assets/images/cakes/berry_pie.jpg'
import blackForrest from '../assets/images/cakes/black_forrest.webp'
import butterCupcake from '../assets/images/cakes/butter_cupcake.webp'
import chocolateBrownie from '../assets/images/cakes/chocolate_brownie.webp'
import chocolateCupcake from '../assets/images/cakes/chocolate_cupcake.webp'
import creamPuffs from '../assets/images/cakes/cream_puffs.jpg'
import darkChocolateCake from '../assets/images/cakes/dark_chocolate_cake.webp'
import heartCookies from '../assets/images/cakes/heart_cookies.webp'
import seasonFruitsFlan from '../assets/images/cakes/season_fruits_flan.webp'
import strawberrySwissRoll from '../assets/images/cakes/strawberry_swiss_roll.webp'
import strawberryTiramisu from '../assets/images/cakes/strawberry_tiramisu.webp'
import tinyStrawberry from '../assets/images/cakes/tiny_strawberry.webp'
import whiteTiramisu from '../assets/images/cakes/white_tiramisu.webp'


//export main menu
export const menu = [
	{
		name: 'berry cupcake',
		img: berryCupcake,
		price: 1.8,
		category: 'cupcake',
		id: uuid4()
	},
	{
		name: 'berry pie',
		img: berryPie,
		price: 3.5,
		category: 'pie',
		id: uuid4()
	},
	{
		name: 'black forrest',
		img: blackForrest,
		price: 2.0,
		category: 'cakes',
		id: uuid4()
	},
	{
		name: 'butter cupcake',
		img: butterCupcake,
		price: 1.5,
		category: 'cupcake',
		id: uuid4()
	},
	{
		name: 'chocolate brownie',
		img: chocolateBrownie,
		price: 3.0,
		category: 'cakes',
		id: uuid4()
	},
	{
		name: 'chocolate cupcake',
		img: chocolateCupcake,
		price: 1.8,
		category: 'cupcake',
		id: uuid4()
	},
	{
		name: 'cream puffs',
		img: creamPuffs,
		price: 2.0,
		category: 'cakes'
	},
	{
		name: 'dark chocolate cake',
		img: darkChocolateCake,
		price: 10.0,
		category: 'cakes',
		id: uuid4()
	},
	{
		name: 'heart cookies',
		img: heartCookies,
		price: 1.3,
		category: 'cookies',
		id: uuid4()
	},
	{
		name: 'season fruits flan',
		img: seasonFruitsFlan,
		price: 2.5,
		category: 'cakes',
		id: uuid4()
	},
	{
		name: 'strawberry swiss roll',
		img: strawberrySwissRoll,
		price: 3.5,
		category: 'cakes',
		id: uuid4()
	},
	{
		name: 'strawberry tiramisu',
		img: strawberryTiramisu,
		price: 3.0,
		category: 'cakes',
		id: uuid4()
	},
	{
		name: 'tiny strawberry',
		img: tinyStrawberry,
		price: 1.3,
		category: 'cupcake',
		id: uuid4()
	},
	{
		name: 'white tiramisu',
		img: whiteTiramisu,
		price: 3.0,
		category: 'cakes',
		id: uuid4()
	}
]
