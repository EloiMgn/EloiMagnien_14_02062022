import DataTable from 'react-data-table-component';
import Header from '../../Components/Header/Header';
import Nav from '../../Components/Nav/Nav';
import './Employees.css'
import { useSelector } from 'react-redux';
import { useMemo, useState } from 'react';
import FilterComponent from '../../Components/FilterComponent/FilterComponent';

const Employees = () => {
  const employees = useSelector((state) => state.employeesList);
  const columns = [
    // {
    //     name: 'N°',
    //     selector: row => row.id,
    //     sortable: true,
    // },
    {
        name: 'First Name',
        selector: row => row.firstName,
        sortable: true,
    },
    {
      name: 'Last Name',
      selector: row => row.lastName,
      sortable: true,
    },
    {
      name: 'Start Date',
      selector: row => row.startDate,
      sortable: true,
    },
    {
      name: 'Department',
      selector: row => row.department,
      sortable: true,
    },
    {
      name: 'Date of birth',
      selector: row => row.birth,
      sortable: true,
    },
    {
      name: 'Street',
      selector: row => row.street,
      sortable: true,
    },
    {
      name: 'City',
      selector: row => row.city,
      sortable: true,
    },
    {
      name: 'State',
      selector: row => row.state,
      sortable: true,
    },
    {
      name: 'Zip Code',
      selector: row => row.zip,
      sortable: true,
    },
];


const [filterText, setFilterText] = useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
	const filteredItems = employees.filter(
		item => item.firstName && item.firstName.toLowerCase().includes(filterText.toLowerCase()),
	);

  console.log(employees);

	const subHeaderComponentMemo = useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
		);
	}, [filterText, resetPaginationToggle]);



    return (
      <div className="employees">
        <header>
          <Header />
        </header>
        <main className='employees__table'>
          <DataTable
            columns={columns}
            data={filteredItems}
            pagination
            paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            selectableRows
            persistTableHead
        />
        </main>
        <Nav />
      </div>
    );
  }
  
  export default Employees;
