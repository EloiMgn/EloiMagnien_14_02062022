import DataTable from '../../Components/DataTable/DataTable';
import Header from '../../Components/Header/Header';
import Nav from '../../Components/Nav/Nav';
import './Employees.css'
import { useSelector } from 'react-redux';

const Employees = () => {
  const employees = useSelector((state) => state.employeesList);

    return (
      <div className="employees">
        <header>
          <Header />
        </header>
        <main className='employees__table'>
          <DataTable data={employees} />
        </main>
        <Nav />
      </div>
    );
  }
  
  export default Employees;