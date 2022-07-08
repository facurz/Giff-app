import './modal.css'

export const Modal = ({children, isOpen, closeModal}) => {
  return (
    <article className={`modal ${isOpen && 'is-open'}`}>
       <div className='modal-container animate__animated animate__bounceIn'>
        <button className='btn-modal-close' onClick={closeModal}>✖</button>
        {children}
       </div>
    </article>
  );
}
