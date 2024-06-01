import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div className={"flex justify-between"}>
        <div>
          <button className={"rounded-full bg-zinc-950"}>
            <MdOutlineKeyboardArrowLeft size={36} className={"text-zinc-50"} />
          </button>
          <button className={"rounded-full bg-zinc-950"}>
            <MdOutlineKeyboardArrowRight
              size={36}
              className={"text-zinc-50 "}
            />
          </button>
        </div>
        <div>
          <Link href={"#"} className={"text-sm font-semibold text-zinc-200"}>
            Sign Up
          </Link>
          <button
            className={
              "bg-zinc-50 rounded-full font-semibold px-4 py-2 text-sm"
            }
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
