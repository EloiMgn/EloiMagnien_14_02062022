import './Input.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';

const Input = ({type, label, text, action, setDate, list}) => {
  const [startDate, setStartDate] = useState(null);

  const handleChangeDate = (date) => {
    setStartDate(date)
    setDate(date.toLocaleDateString('en-GB'));  
  }

  switch (type) {
    case 'text':
      return (
        <div className='input__text'>        
          <label htmlFor={label}>{text}</label>
          <input type="text" id={label} name={label} onChange={action}/>
        </div>
        );
      case 'date' :
        return (
          <div className='input__date'>        
            <label htmlFor={label}>{text}</label>
            <DatePicker 
            dateFormat="dd/MM/yyyy"
            selected={startDate} 
            onChange={(date) => handleChangeDate(date)}       
            showYearDropdown
            peekNextMonth
            showMonthDropdown
            dropdownMode="select"
            calendarStartDay={1}
            todayButton="Today"
            />
          </div>
          );
      case 'select' :
        return (
          <div className='input__select'>
            <label htmlFor={label}>{text}</label>
            <select name={label} id={label} onChange={action}>
              {list && list.map((elt, idx) => {
                return <option value={elt.name} key={idx}>{elt.name}</option>
              })}
            </select>
          </div>
          );
      case 'number' :
        return (
          <div className='input__select'>
            <label htmlFor={label}>{text}</label>
            <input type="number" onChange={action}/>
          </div>
          );
    default:
      return (
        <div className='input__text'>        
          <label htmlFor={label}>{text}</label>
          <input type="text" id={label} name={label}/>
        </div>
        );
    }
  }
  
  export default Input;