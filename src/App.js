import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './components/Main'
import Header from './components/common/Header'
import Footer from './components/common/Footer'


const App = () => {
	const [cart, setCart] = useState([])

  return (
		<Router>
			<Header cart={cart} />
			<Main setCart={setCart} cart={cart} />
			<Footer />
		</Router>
	)

}

export default App;
