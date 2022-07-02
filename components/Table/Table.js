import React from "react";
import styled from "styled-components";
import { useTable, usePagination } from "react-table";
import styles from './table.module.scss';

const Styles = styled.div`
  table {
    border-spacing: 0;
    border-collapse: collapse;
    width: 100%;  
    font-weight: 200;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
    letter-spacing: 1px;
    thead {
      // border-bottom: 0.1px solid white; 
      // color: #1d9bf0;
      background: #343434;
      
      tr {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        th{
          border-right: 1px solid white; 
          color:white;
          letter-spacing: 1px;
          font-weight: 200;
        }
        th:first-child {
          border-top-left-radius: 5px;
        }
        th:last-child {
          border-top-right-radius: 5px;
        }
        
      }
      th, td {
        margin: 0;
        padding: 12px 0px;
        border-bottom: 1px solid white; 
        :last-child {
          border-right: 0;
        }
      }
    }
    tbody {
      tr {
        cursor: default;
        td {
          div {
            cursor: pointer;
            &:hover {
              color: #1d9bf0;
              text-decoration: underline;
            }
          }
          border-right: 0.1px solid white;
          border-bottom: 0.1px solid white;
          text-align: center;
        }
        &:hover {
          opacity: 0.5;
        }
        :last-child {
            border-bottom: 0.1px solid white;         
        }
      }
      th,
      td {
        margin: 0;
        padding: 8px;
        border-bottom: 0.1px solid white; 
        :last-child {
          border-right: 0;
        }
        button {
          padding: 0.2rem;
        }
      }
    }
}
`;
export default ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  const renderCode = (fields) => (
    <pre>
      <code>{JSON.stringify(fields, null, 5)}</code>
    </pre>
  );
  return (
    <Styles>
      <>
        <table {...getTableProps()} key="table" className={styles.table}>
          <thead >
            {headerGroups.map((headerGroup, i) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={`thead_${i}`}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={`tbody_${i}`}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>
                        {cell.column.id == "communication"
                          ? renderCode(cell.value)
                          : cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    </Styles>
  );
};