
import Input from '../Input/Input';
import './InfosForm.css'

const InfosForm = ({setFirst, setLast, setBirth, setStart}) => {

const handleFirst = (e) => {
  setFirst(e.target.value)
}
const handleLast = (e) => {
  setLast(e.target.value)
}

    return (
      <div className="infos">
        <Input type={'text'} label={'firstName'} text={'First Name'} action={e =>handleFirst(e)}/>
        <Input type={'text'} label={'lastName'} text={'Last Name'} action={e =>handleLast(e)}/>
        <Input type={'date'} label={'birthdate'} text={'Date of Birth'} setDate={setBirth}/>
        <Input type={'date'} label={'startDate'} text={'Start Date'} setDate={setStart}/>
      </div>
    );
  }
  
  export default InfosForm;