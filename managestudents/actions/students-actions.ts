'use server';

import prisma from "@/lib/prisma";
import { Student } from "@/seed/seed";
import { revalidatePath } from "next/cache";

interface PaginationOptions {
  page?: number;
  take?: number;
}

export const sleep = async( seconds: number = 0 ) => {

  return new Promise( resolve => {
    setTimeout(() => {
      resolve(true);
    },  seconds * 1000 );
  });

}


export const getPAginatedStudents = async( {page = 1, take = 5}: PaginationOptions ) => {

  if( isNaN( Number(page))) page = 1;
  if( page < 1 ) page = 1;

  try {

    const students = await  prisma.student.findMany({
      take,
      skip:( page - 1 ) * take,
      orderBy: { firstName: "asc" },
    });

    const totalCount = await prisma.student.count({})
    const totalPages = Math.ceil( totalCount / take );

    return {
      currentPage: page,
      totalPages,
      totalCount,
      students
    }
    
  } catch (error) {
    throw new Error('Failed to load students')
  }
}


export const deleteStudents = async( id: string ) => {

  await sleep(3);

  await prisma.student.delete({ where: {id} })

  revalidatePath('/managestudents');
}


export const deleteAllStudents = async (ids: string[]) => {
  try {
    await prisma.student.deleteMany({
      where: {
        id: {
          in: ids, // Usa el operador `$in` para eliminar múltiples IDs
        },
      },
    });

    revalidatePath('/managestudents');
  } catch (error) {
    console.error('Error deleting students:', error);
  }
};


export const editStudents = async( id: string, student: Student ):Promise<Student> => {

  const todo = await prisma.student.findFirst({ where: { id } });

  if ( !todo ) {
    throw `Student with id ${ id } not found`;
  }

 student.age = Number(student.age)  

  const updatedStudent = await prisma.student.update({
    where: { id },
    data: student 
  });

  revalidatePath('/managestudents');

  return updatedStudent;

}


export const newStudents = async( student: Student ) => {

  console.log(1)

  try {

    student.age = Number(student.age) 

    const data = await prisma.student.create({ data: student })

    revalidatePath('/managestudents');
    
    return data;
    
  } catch (error) {
    return {
      message: 'Error creando todo'
    }
  }

}

