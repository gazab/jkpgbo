import React from "react";

export function SelectColumnFilter(props: any) {
  const { filterValue, setFilter, preFilteredRows, id } = props.column;
  const options: any[] = React.useMemo(() => {
    const tempSet = new Set<string>();
    preFilteredRows.forEach((row: any) => {
      return tempSet.add(row.values[id]);
    });
    return Array.from(tempSet.values());
  }, [id, preFilteredRows]);

  return (
    <span>
      <select
        value={filterValue}
        onChange={(e) => {
          setFilter(e.target.value || undefined);
        }}
      >
        <option value="">All</option>
        {options.map((option: string, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </span>
  );
}
