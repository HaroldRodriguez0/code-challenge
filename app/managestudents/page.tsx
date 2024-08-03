import { TableStudents } from "@/managestudents";
import { getPAginatedStudents } from "@/managestudents/actions/students-actions";
import { redirect } from "next/navigation";



export const metadata = {
  title: "Code Challenge",
  description: "Generated with love by Harold I hope you like it",
};

interface Props {
  searchParams: {
    page?: string
  }
}

export default async function ManageStudents ({ searchParams }:Props)  {

  const page = searchParams.page ? parseInt( searchParams.page ) :1 ;

  const {students, currentPage, totalPages, totalCount } = await getPAginatedStudents({ page });
  

  if( students?.length === 0){
    redirect('/managestudents')
  }

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-5xl text-center my-10">Code Challenge</h2>

      <div className="bg-slate-50 p-5">

      <TableStudents students={students} totalCount={totalCount} totalPages={totalPages}/>

      </div>

    </div>
  );
}
