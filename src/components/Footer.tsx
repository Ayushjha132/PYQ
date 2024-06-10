import Link from "next/link";
import {FaDiscord} from "react-icons/fa6";
import {RiTwitterXLine} from "react-icons/ri";

export default function Footer() {
    let date = new Date()
    return (
        <footer className="bg-black text-white p-12">
            <div>
                <div className="min-h-full max-w-7xl mx-auto flex flex-col space-y-2 items-center">

                    <Link href="/" className="flex items-center" prefetch={false}>
                        <h1 className="text-3xl">𝑃𝙔𝕼</h1>
                    </Link>
                    <p className="text-gray-400">A product by <span className="text-white">Ayush Jha</span></p>
                    <p className="text-gray-400">Building in public at @1_ayushjha</p>

                    <div className="flex space-x-8 p-4">
                        <Link href="https://discord.gg/D6BYeEBy"
                              className="block text-gray-400 hover:text-white text-4xl" prefetch={false}>
                            <FaDiscord/>
                        </Link>
                        <Link href="https://x.com/1_ayushjha" className="block text-gray-400 hover:text-white text-3xl"
                              prefetch={false}>
                            <RiTwitterXLine/>
                        </Link>
                    </div>
                    <p className="text-sm text-gray-400">Copyright © {date.getFullYear()} 𝑃𝙔𝕼 Labs</p>
                </div>
            </div>
        </footer>
    )
}