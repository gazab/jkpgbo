import React from "react";
import { useExpanded, useSortBy, useTable, useFilters } from "react-table";
import { Button } from "rebass";
import { Home } from "../types/Home";
import "./Table.scss";
import { SelectColumnFilter } from "./SelectColumnFilter";

export function Table(props: { data: Home[] }) {
  const data = React.useMemo(() => props.data, [props.data]);

  const columns = React.useMemo<any>(
    () => [
      {
        Header: () => null, // No header
        id: "expander", // It needs an ID
        Cell: ({ row }: any) => (
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? "➖" : "➕"}
          </span>
        ),
      },
      { Header: "Adress", accessor: "address" },
      { Header: "Stad", accessor: "city", Filter: SelectColumnFilter },
      { Header: "Stadsdel", accessor: "partOfCity" },
      { Header: "Rum", accessor: "rooms" },
      { Header: "Storlek", accessor: "area" },
      { Header: "Våning", accessor: "floor" },
      { Header: "Tillträde", accessor: "entryDate" },
      { Header: "Hyra", accessor: "rent" },
      { Header: "Källa", accessor: "source" },
      {
        Header: () => null,
        id: "info",
        Cell: ({ row }: any) => (
          <span>
            <Button>Mer info</Button>
          </span>
        ),
      },
    ],
    []
  );

  // Create a function that will render our row sub components
  const renderRowSubComponent = React.useCallback(
    ({ row }) => (
      <pre
        style={{
          fontSize: "10px",
          maxWidth: "600px"
        }}
      >
        <code>{JSON.stringify({ values: row.original }, null, 2)}</code>
      </pre>
    ),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
  } = useTable({ columns, data }, useFilters, useSortBy, useExpanded);

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                return (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : "  "}
                    </span>
                    <div>{column?.Filter ? column.render("Filter") : null}</div>
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <>
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
                {row.isExpanded ? (
                  <tr className="expanded">
                    <td colSpan={visibleColumns.length}>
                      {/*
                          Inside it, call our renderRowSubComponent function. In reality,
                          you could pass whatever you want as props to
                          a component like this, including the entire
                          table instance. But for this example, we'll just
                          pass the row
                        */}
                      {renderRowSubComponent({ row })}
                    </td>
                  </tr>
                ) : null}
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
