import {TypewriterEffect} from "./ui/typewriter-effect";
import Link from "next/link";

export default function HeroBanner() {
    return (
        <>
            <div className="flex flex-col space-y-10 items-center">
                <p className="fixed left-0 top-0 flex justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    👨🏻‍🎓 Student's Community
                </p>
                <h1 className="text-[#2563eb] dark:text-blue-500 text-5xl font-semibold">Learn Fast, Score High</h1>
            </div>
            <TypewriterEffectDemo/>
        </>
    )
}


export function TypewriterEffectDemo() {
    const words = [
        {
            text: "One",
        },
        {
            text: "place",
        },
        {
            text: "solution",
        },
        {
            text: "for",
        },
        {
            text: "all",
        },
        {
            text: "College",
            className: "text-[#2563eb] dark:text-blue-500",
        },
        {
            text: "&",
        },
        {
            text: "University",
            className: "text-[#2563eb] dark:text-blue-500",
        }, {
            text: "Exams.",
            className: "text-[#2563eb] dark:text-blue-500",
        },

    ];
    return (
        <div className="flex flex-col items-center justify-center h-[12rem] space-y-12">
            <TypewriterEffect words={words}/>
            <div className="space-x-4 ">
                <Link href="https://discord.gg/D6BYeEBy"
                    className="px-4 py-3  bg-black text-white border rounded-lg">
                    Join Community
                </Link>
                <Link href="/pyq"
                      className="px-4 py-3 bg-white text-black border rounded-lg">
                    Previous Year
                </Link>
            </div>
        </div>
    );
}



