import './Modale.css';

const Modale = ({modalIsOpen, setIsOpen, firstname, lastname}) => {
  
  function closeModal() {
    setIsOpen(false);
  }

  if (modalIsOpen) {
    return (
     <div className='modaleBg'>
       <div className='modale'>
         <i className="fas fa-times" onClick={closeModal}></i>
         <div className='modale_content'>Employee {firstname + ' ' + lastname} Created!</div>
       </div>
     </div>
   ); 
  } else return null;
}
export default Modale