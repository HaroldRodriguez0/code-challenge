'use client';

import Link from "next/link";
import { useForm } from "react-hook-form";
import { editStudents, newStudents } from "../actions/students-actions";
import { useEffect } from "react";
import { Student } from "@prisma/client";



type FormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  grade: string;
};

type Props = {
  student?: Student;
}

export const FormStudent = ({student}:Props) => {

  const {
    handleSubmit,
    register,
    formState: { isValid },
    reset,
  } = useForm<FormInputs>({
    defaultValues: student
  });

  useEffect(() => {
    student &&
    reset(student);
  }, [student, reset]);

  const onSubmit = async (data: FormInputs) => {
    
    student 
      ? await editStudents(student.id, data) 
      : await newStudents(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          First Name {}
        </label>
        <input
          {...register("firstName", { required: true })}
          type="text"
          name="firstName"
          placeholder="First Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Last Name
        </label>
        <input
          {...register("lastName", { required: true })}
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Email Address
        </label>
        <input
          {...register("email", { required: true })}
          type="email"
          name="email"
          placeholder="example@domain.com"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Age
        </label>
        <input
          {...register("age", { required: true })}
          type="number"
          name="age"
          placeholder="Age"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="grade"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Grade
        </label>
        <select
          {...register("grade", { required: true })}
          name="grade"
          id="grade"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        >
          <option value="1st">1st</option>
          <option value="2nd">2nd</option>
          <option value="3rd">3rd</option>
          <option value="4th">4th</option>
          <option value="5th">5th</option>
          <option value="6th">6th</option>
          <option value="7th">7th</option>
          <option value="8th">8th</option>
          <option value="9th">9th</option>
          <option value="10th">10th</option>
        </select>
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => localStorage.removeItem('student')}
          type="submit"
          className="hover:shadow-form rounded-md bg-green-500 py-3 px-8 text-base font-semibold text-white outline-none"
        >
          Submit
        </button>
          <Link
            onClick={() => localStorage.removeItem('student')}
            href={"/managestudents"}
            type="button"
            className="hover:shadow-form rounded-md bg-red-500 py-3 px-8 text-base font-semibold text-white outline-none"
          >
            Close
          </Link>
      </div>
    </form>
  );
};
