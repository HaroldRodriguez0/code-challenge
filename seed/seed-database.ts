//import { create } from 'zustand';
import { initialData } from './seed';
import prisma from '../lib/prisma';


async function main() {

  // 1. Borrar registros previos
  // await Promise.all( [
  await prisma.student.deleteMany();
  // ]);

  await prisma.student.createMany({
    data: initialData
  })

  console.log( 'Seed ejecutado correctamente' );
}



( () => {

  if ( process.env.NODE_ENV === 'production' ) return;

  main();
} )();