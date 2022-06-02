import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


Modal.setAppElement('#root');

const Modale = ({modalIsOpen, setIsOpen}) => {

  function closeModal() {
    setIsOpen(false);
  }

  return (
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
      <i className="fas fa-times" onClick={closeModal}></i>
      <div>Un nouvel employé a été créé</div>
    </Modal>
  );
}
export default Modale