import '../style/side menu.css'

export const SideMenu = ({ category, setCategory }) => {
	
	const handleClick = e => setCategory(e.target.innerText.toLowerCase());

	const checkCategory = str => str === category ? 'active' : '';

	return (
		<article className='sideMenu-container'>
			<aside className='sideMenu text-center'>
				
				<button onClick={handleClick} className={`sideMenu__item block pointer ${checkCategory('all')}`}>All</button>
				<button onClick={handleClick} className={`sideMenu__item block pointer ${checkCategory('cakes')}`}>Cakes</button>	
				<button onClick={handleClick} className={`sideMenu__item block pointer ${checkCategory('cupcake')}`}>Cupcake</button>
				<button onClick={handleClick} className={`sideMenu__item block pointer ${checkCategory('cookies')}`}>Cookies</button>
			
			</aside>
		</article>
	)
}
