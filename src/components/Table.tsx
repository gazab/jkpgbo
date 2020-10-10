import React from 'react'
import { useSortBy, useTable } from 'react-table'
import { Home } from '../types/Home'

 export function Table(props: {data: Home[]}) {
   const data = React.useMemo(() => props.data,[props.data]);
 
   const columns = React.useMemo<any>(
     () => [
       { Header: "Adress", accessor: "address" },
       { Header: "Stad", accessor: "cityName" },
       { Header: "Rum", accessor: "rooms", },
       { Header: "Storlek", accessor: "area", },
       { Header: "Våning", accessor: "floor", },
       { Header: "Tillträde", accessor: "entryDate", },
       { Header: "Hyra", accessor: "rent", },
     ],
     []
   )
 
   const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     rows,
     prepareRow,
   } = useTable({ columns, data },
    useSortBy
    )
 
   return (
     <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps(column.getSortByToggleProps())}
                 style={{
                   borderBottom: 'solid 3px red',
                   background: 'aliceblue',
                   color: 'black',
                   fontWeight: 'bold',
                 }}
               >
                 {column.render('Header')}
                 <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                     style={{
                       padding: '10px',
                       border: 'solid 1px gray',
                       background: 'papayawhip',
                     }}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
   )
 }