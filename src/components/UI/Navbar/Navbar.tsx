import { mainRoutes } from '../../../utils/constants/mainRoutes';
import './Navbar.css';

export const Navbar = () => {
	return (
		<nav>
			<ul>
				{mainRoutes.map(({ path, text }, idx) => (
					<li key={idx + path + text}>
						<a href={path}>{text}</a>
					</li>
				))}
			</ul>
			<div className='cart'>cart: 0</div>
		</nav>
	);
};
