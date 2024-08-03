import { FormStudent } from "@/managestudents";
import { ContainerEdit } from "@/managestudents/components/ContainerEdit";

export const metadata = {
  title: "Edit Student",
  description: "Generated with love by Harold I hope you like it",
};

export default function EditStudent() {
  
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-5xl text-center my-10">Edit Student</h2>

      <ContainerEdit />
    </div>
  );
}
