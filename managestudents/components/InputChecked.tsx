'use client';

import { useEffect, useState } from "react";

type Props = {
  id: string
};

export const InputChecked = ({id}: Props) => {

  const [checkbox, setCheckbox] = useState<string[]>([]);

  useEffect(() => {
    const savedCheckbox = localStorage.getItem('checkbox');
    savedCheckbox && setCheckbox( savedCheckbox ?JSON.parse(savedCheckbox) :[] );
  }, [])
  

  const handleCheckboxChange = () => {
    const savedCheckbox = localStorage.getItem('checkbox');
    let checkboxOld:string[] | [] = savedCheckbox ?JSON.parse(savedCheckbox) :[];
    let updatedCheckbox:string[] | [];

  if (checkbox.includes(id)) {
    // Remove the id from the array if it exists
    updatedCheckbox = checkboxOld.filter(item => item !== id);
  } else {
    // Add the id to the array if it does not exist
    updatedCheckbox = [...checkboxOld, id];
  }

  // Update the state and localStorage with the new array
    setCheckbox(updatedCheckbox);
    localStorage.setItem('checkbox', JSON.stringify(updatedCheckbox));
  };
  

  return (
    <input
      checked={checkbox.includes(id)}
      onChange={handleCheckboxChange}
      type="checkbox"
      className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
    />
  );
};


