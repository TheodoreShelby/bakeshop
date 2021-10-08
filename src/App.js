import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './components/Main'
import Header from './components/common/Header'
import Footer from './components/common/Footer'


export const cartContext = React.createContext();


const App = () => {

	const [cart, setCart] = useState([]);

  return (
		<Router>
			<cartContext.Provider value={ { cart, setCart } }>
				<Header />
				<Main />
			</cartContext.Provider>
			<Footer />
		</Router>
	)
}

export default App;
