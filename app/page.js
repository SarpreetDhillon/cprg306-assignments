import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col p-32">
      <h2 className="font-bold text-3xl">
        CPRG 306: Web Development 2 - Assignments
      </h2>
      <div>
        <ul className="p-3 m-3">
          <li className="hover:underline hover:text-green-400 mb-2">
            <Link href={"/week-2"}>Week 2 Assignment</Link>
          </li>
          <li>
            <Link href={"/week-3"} className="hover:underline hover:text-green-400 mb-2">Week 3 Assignment</Link>
          </li>
          <li>
            <Link href={"/week-4"} className="hover:underline hover:text-green-400 mb-2">Week 4 Assignment</Link>
          </li>
          <li>
            <Link href={"/week-5"} className="hover:underline hover:text-green-400 mb-2">Week 5 Assignment</Link>
          </li>
          <li>
            <Link href={"/week-6"} className="hover:underline hover:text-green-400 mb-2">Week 6 Assignment</Link>
          </li>
          <li>
            <Link href={"/week-7"} className="hover:underline hover:text-green-400 mb-2">Week 7 Assignment</Link>
          </li>
          </ul>
      </div>
    </div>
  );
}
