import { mainRoutes } from '../../../utils/constants/mainRoutes';
import './Navbar.css';

export const Navbar = () => {
	return (
		<nav>
			<ul>
				{mainRoutes.map(({ path, text }) => (
					<li>
						<a href={path}>{text}</a>
					</li>
				))}
			</ul>
		</nav>
	);
};
