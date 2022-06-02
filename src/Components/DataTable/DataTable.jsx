import React from 'react'
import styled from 'styled-components'
import Table from './Table/Table'


const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`



const DataTable = ({data}) => {

  const columns = React.useMemo(
    () => [
      {
        Header: 'Infos',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
          {
            Header: 'Birthdate',
            accessor: 'birth',
          },
          {
            Header: 'Start Date',
            accessor: 'startDate',
          },
          {
            Header: 'Department',
            accessor: 'department',
          },
        ],
      },
      {
        Header: 'Adress',
        columns: [
          {
            Header: 'Street',
            accessor: 'street',
          },
          {
            Header: 'City',
            accessor: 'city',
          },
          {
            Header: 'Zip Code',
            accessor: 'zip',
          },
        ],
      },
    ],
    []
  )


  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  )
}

export default DataTable
