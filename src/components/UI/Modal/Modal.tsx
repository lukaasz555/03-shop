import { Dispatch, SetStateAction } from 'react';
import { useModal } from './useModal';
import './Modal.css';

interface ModalProps {
	isVisible: boolean;
	setVisible: Dispatch<SetStateAction<boolean>>;
	modalTitle?: string;
	children: React.ReactNode;
}

export const Modal = ({
	isVisible,
	setVisible,
	modalTitle,
	children,
}: ModalProps) => {
	const { onClickOutside, onClickClose } = useModal(isVisible, setVisible);

	return isVisible ? (
		<div className='modal__overlay' onClick={onClickOutside}>
			<div className='modal__content'>
				<header>
					{modalTitle ? <h2>{modalTitle}</h2> : null}
					<button onClick={onClickClose}>X</button>
				</header>
				<main>{children}</main>
			</div>
		</div>
	) : null;
};
