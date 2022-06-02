import Input from '../Input/Input';
import { states } from '../../utils/Datas';
import { Dropdown } from 'react-custom-simpledropdown';
import './AddressForm.css'
import { useEffect } from 'react';

const AddressForm = ({setStreet, setSCity, setState, setZip}) => {
  
  const handleStreet = (e) => {
    setStreet(e.target.value)
  }

  const handleCity = (e) => {
    setSCity(e.target.value)
  }

  useEffect(() => {
    document.addEventListener('onSelectDropdownOption', (e)=> {
        if(e.detail.name === "States") {
          setState(e.detail.value)
        }
    })
})

  const handleZip = (e) => {
    setZip(e.target.value)
  }

    return (
      <fieldset className="address">
        <legend>Address</legend>
        <Input type={'text'} label={'street'} action={e =>handleStreet(e)}/>
        <Input type={'text'} label={'city'} text={'City'} action={e =>handleCity(e)}/>
        <Dropdown label="States" options={states} placeholder="States"/>
        <Input type={'number'} label={'zipCode'} text={'Zip Code'} action={e =>handleZip(e)}/>
      </fieldset>
    );
  }
  
  export default AddressForm;