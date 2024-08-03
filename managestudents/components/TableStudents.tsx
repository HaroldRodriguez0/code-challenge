import { IconAddition } from "@/svg";
import { InputChecked } from "../index";
import { ColumnAction } from "./ColumnAction";
import Link from "next/link";
import { ButtonDelete } from "./ButtonDelete";
import { InputCheckedAll } from "./InputCheckedAll";
import { Student } from "@prisma/client";
import { Pagination } from "./Pagination";


type TableStudentsProps = {
  students: Student[];
  totalPages: number;
  totalCount: number;
};

export const TableStudents: React.FC<TableStudentsProps> = ({ students, totalCount, totalPages }) => {


  return (
    <section className="container px-4 mx-auto">
      <div className="flex items-center justify-between bg-slate-500 p-5">
        <p className="text-xl sm:text-2xl">
          Manage <b>Students</b>
        </p>
        <div className="flex gap-3">
          <ButtonDelete />
          <Link
            href={"/managestudents/newstudent"}
            className="flex items-center bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
          >
            <IconAddition className="text-slate-500" />{" "}
            <p className="text-sm ms-1  hidden sm:block">Add New Student</p>
          </Link>
        </div>
      </div>

      <div className="flex flex-col bg-white">
        <div className="mx-5">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 ">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-semibold text-left rtl:text-right text-black dark:text-gray-400"
                    >
                      <div className="flex items-center gap-x-3">
                        <InputCheckedAll />
                        <button className="flex items-center gap-x-2">
                          <span>firstName</span>
                        </button>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-semibold text-left rtl:text-right  text-black dark:text-gray-400"
                    >
                      lastName
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-semibold text-left rtl:text-right  text-black dark:text-gray-400 hidden sm:table-cell"
                    >
                      email
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-semibold text-center rtl:text-right  text-black dark:text-gray-400 hidden md:table-cell"
                    >
                      age
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-semibold text-center rtl:text-right  text-black dark:text-gray-400 hidden md:table-cell"
                    >
                      grade
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-semibold text-center rtl:text-right  text-black dark:text-gray-400 "
                    >
                      action
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {students.map((student) => (
                      <tr
                        key={student.id}
                        className="hover:bg-slate-50 cursor-pointer"
                      >
                        <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-200 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <InputChecked id={student.id} />
                            <span>{student.firstName}</span>
                          </div>
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          {student.lastName}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap hidden sm:table-cell">
                          {student.email}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap text-center hidden md:table-cell">
                          {student.age}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap text-center hidden md:table-cell">
                          {student.grade}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          <ColumnAction student={student} />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          <Pagination totalCount={totalCount} totalPages={totalPages}/>
        </div>
      </div>
    </section>
  );
};
