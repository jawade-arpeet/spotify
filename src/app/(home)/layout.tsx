import Link from "next/link";
import React from "react";
import { MdHome, MdSearch } from "react-icons/md";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className={"flex h-screen w-screen bg-zinc-950 px-4 pt-12 pb-4 gap-x-2"}
    >
      <aside className={" basis-1/5 h-full"}>
        <div
          className={
            "flex flex-col gap-y-3 bg-zinc-800 h-[20%] rounded-lg px-6 py-4"
          }
        >
          <Link href={""} className={"flex items-center"}>
            <MdHome className={"inline text-zinc-50"} size={30} />
            <span className={"ml-2 text-zinc-50"}>Home</span>
          </Link>
          <Link href={""} className={"flex items-center"}>
            <MdSearch className={"inline text-zinc-50"} size={30} />
            <span className={"ml-2 text-zinc-50"}>Search</span>
          </Link>
        </div>
        <div className={"mt-2 bg-zinc-800 h-[79%] rounded-lg "}></div>
      </aside>
      <section className={"h-full basis-4/5 bg-zinc-800 rounded-lg"}>
        {children}
      </section>
    </main>
  );
};
export default HomeLayout;
