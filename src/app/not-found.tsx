import Link from 'next/link'
import Image from 'next/image';
import notFound from "@/assest/404.svg";
export default function NotFound() {
    return (
        <div className="flex flex-col items-center p-24 space-y-2">
            <Image src={notFound} alt="404 svg graphics"/>
            <p className="text-sm text-gray-400">Could not find requested resource</p>

            <Link href="/"
                  className="px-4 py-2 dark:bg-white bg-black text-white dark:text-black border rounded-lg">
              Home
            </Link>
        </div>
    )
}