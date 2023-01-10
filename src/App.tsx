import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
	return (
		<div className='overflow-hidden flex flex-col'>
			<Router>
				<Header />
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/product/:id'
						element={<ProductDetails />}
					/>
				</Routes>
				<Footer />
			</Router>
		</div>
	)
}

export default App
