'use client';

import { IconDelete, IconEdit } from "@/svg";
import { deleteStudents } from "../actions/students-actions";
import { Student } from "@prisma/client";
import Swal from "sweetalert2";
import Link from "next/link";


type Props = {
  student:Student
};

export function ColumnAction({student}:Props) {
  

  const handleDelete = async (id:string)  => {
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
        await deleteStudents(student.id)
      }
    })
  }

  return (
    <div className="flex justify-around relative">
      <Link 
        href={'/managestudents/editstudent'}
        className="group relative" 
        onClick={() => localStorage.setItem('student', JSON.stringify(student)) }
      >
        <IconEdit className="text-yellow-500" />
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-200 text-black text-xs rounded py-1 px-2">
          Edit
        </div>
      </Link>
      <div
        className="group relative"
        onClick={() => handleDelete(student.id)}
      >
        <IconDelete className="text-red-500" />
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-200 text-blacke text-xs rounded py-1 px-2">
          Delete
        </div>
      </div>
    </div>
  );
}
