import React from "react";
import { Label, Select as SelectForm } from "@rebass/forms";
import { Option } from "../types/Option";

export function Select(props: { options: Option[]; label: string }) {
  const [selectedValue, setSelectedValue] = React.useState("");
  return (
    <>
      <Label>{props.label}</Label>
      select: {selectedValue}
      <SelectForm
        bg="pl"
        value={selectedValue}
        name={props.label}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        {Object.entries(props.options).map(([key, o]) => (
          <option key={key}>{o.name}</option>
        ))}
      </SelectForm>
    </>
  );
}
