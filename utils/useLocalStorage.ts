'use client';

import { Student } from "@prisma/client";
import { useEffect, useState } from "react";


export const useLocalStorage = () => {

  const [initialData, SetinitialData] = useState<Student> ()

  useEffect(() => {
    const savedStudent = localStorage.getItem('student');
    const student = savedStudent ? JSON.parse(savedStudent) : [];
    SetinitialData(student)
  }, [])

  return initialData
}

