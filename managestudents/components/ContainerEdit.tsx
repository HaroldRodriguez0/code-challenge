'use client';

import React, { useEffect, useState } from 'react'
import { FormStudent } from './FormStudent'
import { Student } from '@prisma/client';



export const ContainerEdit = () => {

  const [initialData, SetinitialData] = useState<Student> ()

  useEffect(() => {
    const savedStudent = localStorage.getItem('student');
    const student = savedStudent ? JSON.parse(savedStudent) : [];
    SetinitialData(student)
  }, [])

  return (
    <div className=" p-5">
    <div className="container flex items-center justify-center  ">
      <div className="mx-auto w-full max-w-[550px] bg-slate-50 px-8 py-5">
        <FormStudent student={initialData}/>
      </div>
    </div>
  </div>
  )
}