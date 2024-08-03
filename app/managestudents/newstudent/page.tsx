import { FormStudent } from "@/managestudents";

export const metadata = {
  title: "New Student",
  description: "Generated with love by Harold I hope you like it",
};

export default function NewStudent() {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-5xl text-center my-10">New Student</h2>

      <div className=" p-5">
        <div className="container flex items-center justify-center  ">
          <div className="mx-auto w-full max-w-[550px] bg-slate-50 px-8 py-5">
            <FormStudent />
          </div>
        </div>
      </div>
    </div>
  );
}
