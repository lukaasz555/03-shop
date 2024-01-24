import { Navbar } from '../UI/Navbar/Navbar';
import './Layout.css';

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
	return (
		<div className='layout__wrapper'>
			<Navbar />
			{children}
		</div>
	);
};