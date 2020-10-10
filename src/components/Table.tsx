import React from 'react'
import { useTable } from 'react-table'
import { Home } from '../types/Home'
import './Table.scss'


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
   } = useTable({ columns, data })
 
   return (
     <table {...getTableProps()}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
               >
                 {column.render('Header')}
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