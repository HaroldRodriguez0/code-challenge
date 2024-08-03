import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center p-24">

      <h1 className="text-4xl mb-20">
        Welcome to Harold&apos;s Code Challenge
      </h1>

      <button
        className="middle none center mr-4 rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        data-ripple-light="true"
      >
        
        <Link href={"/managestudents"} className="text-5xl">
          Manage Students{" "}
        </Link>

      </button>

    </main>
  );
}
