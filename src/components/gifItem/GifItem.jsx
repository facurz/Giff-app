import { useModal } from '../../hooks/useModal';
import { Modal } from '../';
import './gifItem.css'

export const GifItem = ({ title, url }) => {
    const [isOpen, openModal, closeModal] = useModal(false);
    return (
        <div className='card'>
            <div  onClick={openModal}  style={{cursor:'pointer'}}>
                <img src={url} alt='gif' />
                {/* <p>{title}</p> */}
            </div>

            <Modal isOpen={isOpen} closeModal={closeModal}>
                <img className='modal-img' src={url} alt='gif' />
                <p>{title}</p>
            </Modal>
        </div>
    );
};
