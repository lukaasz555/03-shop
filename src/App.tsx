import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Categories } from './views/shop/Categories';
import { Products } from './views/shop/Products';
import { Home } from './views/shop/Home';
import './App.css';
import { Contact } from './views/shop/Contact';
import { store } from './store/store';
import { Provider } from 'react-redux';

function App() {
	return (
		<>
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/categories' element={<Categories />} />
						<Route path='/products/:category' element={<Products />} />
						<Route path='/products' element={<Products />} />
						<Route path='/contact' element={<Contact />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		</>
	);
}

export default App;
