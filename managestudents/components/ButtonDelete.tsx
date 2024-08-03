'use client'

import { IconSubtraction } from "@/svg";
import React from "react";
import { deleteAllStudents } from "../actions/students-actions";
import Swal from "sweetalert2";

export function ButtonDelete() {

  const handleClick = async () => {
    const savedCheckbox = localStorage.getItem('checkbox');
    const checkboxOld:string[] | [] = savedCheckbox ?JSON.parse(savedCheckbox) :[];

    Swal.fire({
      text: "Are you sure you want to permanently delete the student.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#26a430",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete!",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteAllStudents(checkboxOld)
      }
    })
    
  }

  return (
    <button onClick={handleClick} className="flex items-center bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded">
      <IconSubtraction className="text-slate-500" />
      <p className="text-sm  ms-1 hidden sm:block">Delete</p>
    </button>
  );
}
