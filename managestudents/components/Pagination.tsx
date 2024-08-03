'use client';

import { generatePaginationNumbers } from "@/utils/generatePaginationNumbers";
import Link from "next/link";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import clsx from 'clsx';

type Props = {
  totalPages: number;
  totalCount: number;
}

export const Pagination = ({totalCount, totalPages}: Props) => {

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pageString = searchParams.get('page') ?? 1;
  let currentPage = isNaN( +pageString ) ? 1 : +pageString

  if(currentPage < 1){
    redirect( pathname );
  }

  const allPages = generatePaginationNumbers(currentPage, totalPages);
  
  const createPageUrl = ( pageNumber: number | string ) => {

    const params = new URLSearchParams( searchParams );

    if( pageNumber === '...' ){
      return `${ pathname }?${ params.toString() }`
    }

    if( +pageNumber <= 0 ){
      return `${ pathname }`;
    }

    if( +pageNumber > totalPages ){
      return `${ pathname }?${ params.toString() }`
    }

    params.set('page', pageNumber.toString());
    return `${ pathname }?${ params.toString() }`
  }

  return (
    <div className="flex justify-between items-center mt-6 text-sm text-slate-700">
    <div className="">
      <p>
        Showing <b>{currentPage === totalPages ?totalCount :currentPage * 5}</b> out of <b>{totalCount}</b>{" "}
        entries
      </p>
    </div>
    <div className="flex items-center justify-between ">
      <Link href={ createPageUrl( currentPage - 1 )} className="flex items-center px-3 py-2 text-sm capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
        <span>previous</span>
      </Link>

      <div className="items-center hidden md:flex gap-x-1 mx-2">
        {allPages.map((page, i) => (
          <Link
            href={ createPageUrl( page )}
            key={page + '_' + i}
            className={
              clsx(
                "px-2 py-1 text-sm rounded-md dark:bg-gray-800 bg-blue-100/60",
                {
                  "bg-blue-500 text-white": page === currentPage,
                }
              )
            }
          >
            {page}
          </Link>
        ))} 
      </div>

      <Link href={ createPageUrl( currentPage + 1 )} className="flex items-center px-3 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
        <span>Next</span>
      </Link>
    </div>
  </div>
  )
}