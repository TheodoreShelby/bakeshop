import berryCupcake from '../../assets/images/cakes/berry cupcake.webp'
import berryPie from '../../assets/images/cakes/berry pie.jpg'
import blackForrest from '../../assets/images/cakes/black forrest.webp'
import butterCupcake from '../../assets/images/cakes/butter cupcake.webp'
import chocolateBrownie from '../../assets/images/cakes/chocolate brownie.webp'
import chocolateCupcake from '../../assets/images/cakes/chocolate cupcake.webp'
import creamPuffs from '../../assets/images/cakes/cream puffs.jpg'
import darkChocolateCake from '../../assets/images/cakes/dark chocolate cake.webp'
import heartCookies from '../../assets/images/cakes/heart cookies.webp'
import seasonFruitsFlan from '../../assets/images/cakes/season fruits flan.webp'
import strawberrySwissRoll from '../../assets/images/cakes/strawberry swiss roll.webp'
import strawberryTiramisu from '../../assets/images/cakes/strawberry tiramisu.webp'
import tinyStrawberry from '../../assets/images/cakes/tiny strawberry.webp'
import whiteTiramisu from '../../assets/images/cakes/white tiramisu.webp'


//export main menu
export const menu = [
	{
		name: 'berry cupcake',
		img: berryCupcake,
		price: 1.8,
		category: 'cupcake'
	},
	{
		name: 'berry pie',
		img: berryPie,
		price: 3.5,
		category: 'pie'
	},
	{
		name: 'black forrest',
		img: blackForrest,
		price: 2.0,
		category: 'cakes'
	},
	{
		name: 'butter cupcake',
		img: butterCupcake,
		price: 1.5,
		category: 'cupcake'
	},
	{
		name: 'chocolate brownie',
		img: chocolateBrownie,
		price: 3.0,
		category: 'cakes'
	},
	{
		name: 'chocolate cupcake',
		img: chocolateCupcake,
		price: 1.8,
		category: 'cupcake'
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
		category: 'cakes'
	},
	{
		name: 'heart cookies',
		img: heartCookies,
		price: 1.3,
		category: 'cookies'
	},
	{
		name: 'season fruits flan',
		img: seasonFruitsFlan,
		price: 2.5,
		category: 'cakes'
	},
	{
		name: 'strawberry swiss roll',
		img: strawberrySwissRoll,
		price: 3.5,
		category: 'cakes'
	},
	{
		name: 'strawberry tiramisu',
		img: strawberryTiramisu,
		price: 3.0,
		category: 'cakes'
	},
	{
		name: 'tiny strawberry',
		img: tinyStrawberry,
		price: 1.3,
		category: 'cupcake'
	},
	{
		name: 'white tiramisu',
		img: whiteTiramisu,
		price: 3.0,
		category: 'cakes'
	}
]

//export sub-menu
export const cakes = {
	category: 'cake',
	items: menu.filter(item => item.category === 'cake'),
}
export const cupcakes = {
	category: 'cupcake',
	items: menu.filter(item => item.category === 'cupcake')
}
export const cookies = {
	category: 'cookies',
	items: menu.filter(item => item.category === 'cookies')
}

