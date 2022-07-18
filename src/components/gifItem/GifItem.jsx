import PropTypes from 'prop-types';
import { useModal } from '../../hooks/useModal';
import { Modal } from '../';

import './gifItem.css'

export const GifItem = ({ title, url }) => {
    const [isOpen, openModal, closeModal] = useModal(false);
    return (
        <div className='card'>
            <div  onClick={openModal}  style={{cursor:'pointer'}}>
                <img aria-label='gif-image' src={url} alt='gif' />
            </div>

            <Modal isOpen={isOpen} closeModal={closeModal}>
                <img className='modal-img' src={url} alt='gif' />
                <p data-testid='test-title'>{title}</p>
            </Modal>
        </div>
    );
};
GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}