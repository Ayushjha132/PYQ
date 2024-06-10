
import Link from "next/link"
import {ModeToggle} from "@/components/dark-mode";
import {RiTwitterXLine} from "react-icons/ri";
export default function NavBar() {
    return (
        <nav>
            <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
                <div className="w-full max-w-7xl mx-auto px-4">
                    <div className="flex justify-between h-14 items-center">
                        <Link href="/" className="flex items-center" prefetch={false}>
                            <h1 className="text-3xl">𝑃𝙔𝕼</h1>
                        </Link>
                        <nav className="hidden md:flex gap-4">
                            <Link
                                href="/"
                                className="font-medium flex items-center text-md transition-colors hover:underline"
                                prefetch={false}
                            >
                                Home
                            </Link>
                            <Link
                                href="/pyq"
                                className="font-medium flex items-center text-md transition-colors hover:underline"
                                prefetch={false}
                            >
                                PYQ Papers
                            </Link>
                            <Link
                                href="/"
                                className="font-medium flex items-center text-md transition-colors hover:underline"
                                prefetch={false}
                            >
                                Services
                            </Link>
                            <Link
                                href="/about"
                                className="font-medium flex items-center text-md transition-colors hover:underline"
                                prefetch={false}
                            >
                                About
                            </Link>
                        </nav>
                        <div className="flex items-center gap-4">
                            <Link href="https://discord.gg/pApq8bH6"> <p className="text-sm">Community</p></Link>
                            <Link href="https://x.com/1_ayushjha"><RiTwitterXLine className="text-lg"/></Link>
                            <ModeToggle />
                        </div>
                    </div>
                </div>
            </nav>
        </nav>
    )
}