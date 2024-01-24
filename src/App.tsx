import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Categories } from './pages/Categories';
import { Products } from './pages/Products';
import { Home } from './pages/Home';
import './App.css';
import { Contact } from './pages/Contact';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/categories' element={<Categories />} />
					<Route path='/products' element={<Products />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
