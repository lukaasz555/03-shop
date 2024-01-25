import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import './Loader.css';

export const Loader = () => {
	const isLoading = useSelector((state: RootState) => state.global.isLoading);

	return isLoading ? (
		<div className='loader__overlay '>
			<div>Loading...</div>
		</div>
	) : null;
};
