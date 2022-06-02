import { useEffect, useState } from 'react';
import AddressForm from '../AddressForm/AddressForm';
import InfosForm from '../InfosForm/InfosForm';
import { departments } from '../../utils/Datas';
import { Dropdown } from 'react-custom-simpledropdown';
import './Form.css'
import Modale from '../Modale/Modale';
import { useDispatch, useSelector } from 'react-redux';

const Form = () => {
const [first, setFirst] = useState('')
const [last, setLast] = useState('')
const [birth, setBirth] = useState('')
const [start, setStart] = useState('')
const [street, setStreet] = useState('')
const [city, setSCity] = useState('')
const [state, setState] = useState('')
const [zip, setZip] = useState('')
const [department, setDepartment] = useState('')
const [modalIsOpen, setIsOpen] = useState(false);

const dispatch = useDispatch();
const employees = useSelector((state) => state);

const handleSaveEmployee = (e) => {
  setIsOpen(true);
  const employee = {
    id: employees.employeesList.length,
    firstName: first,
    lastName: last,
    startDate: `${start}`,
    department: department,
    birth: `${birth}`,
    street: street,
    city: city,
    state: state,
    zip: `${zip}`,  
  }
  dispatch({type: 'ADD_EMPLOYEE', payload: employee})
}

useEffect(() => {
  document.addEventListener('onSelectDropdownOption', (e)=> {
    if(e.detail.name === "Department") {
      setDepartment(e.detail.value)
    }
  })
})


    return (
      <div className="form">
        <h2>Create Employee</h2>
        <form>
          <InfosForm setFirst={setFirst} setLast={setLast} setBirth={setBirth} setStart={setStart}/> 
          <AddressForm setStreet={setStreet} setSCity={setSCity} setState={setState} setZip={setZip}/>
          <Dropdown label="Department" options={departments} />
        </form>
        <button onClick={e => handleSaveEmployee(e)}>Save</button>
        <Modale modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} lastname={last} firstname={first}/>
      </div>
    );
  }
  
  export default Form;