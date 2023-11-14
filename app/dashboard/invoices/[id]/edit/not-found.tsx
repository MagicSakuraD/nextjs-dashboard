import Link from "next/link";
import { FaceFrownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      {/* <FaceFrownIcon className="w-10 text-gray-400" /> */}
      <Image
        src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Frowning%20Face.png"
        alt="Frowning Face"
        width={100}
        height={100}
      ></Image>
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested invoice.</p>
      <Link
        href="/dashboard/invoices"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Go Back
      </Link>
    </main>
  );
}
