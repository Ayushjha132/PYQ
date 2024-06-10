import {FaAnchorCircleCheck} from "react-icons/fa6";

export default function About() {
    return (
        <>
            <main className="flex flex-col items-center justify-between p-24 space-y-8">
                <h1 className="text-4xl font-mono">About Us</h1>
                <div className="w-full border rounded-md p-7 space-y-6 font-mono">

                    <p className="text-xl font-semibold">
                        Last Moment Help for <span className="underline underline-offset-4 decoration-blue-700">your EXAMS.</span>
                    </p>
                    <p className="">
                        We are a student-led community dedicated to helping you ace your exams,
                        even if you haven't studied until the last moment. At PYQ,
                        we provide the essential resources you need when you need them the most.
                    </p>

                    <p className="text-xl font-semibold">
                        What We Offer
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-center"><FaAnchorCircleCheck className="text-2xl mr-2 p-1"/>
                            <span className="text-lg text-[#2363ed] dark:text-blue-400">Last-Minute Short Notes:  </span> Quick, concise notes to help you grasp key concepts fast.</li>
                        <li className="flex items-center"><FaAnchorCircleCheck className="text-2xl mr-2 p-1"/>
                            <span className="text-lg text-[#2363ed] dark:text-blue-400">Video Lecture Help:  </span> Engaging and informative lectures to clarify difficult topics.</li>
                        <li className="flex items-center"><FaAnchorCircleCheck className="text-2xl mr-2 p-1"/>
                            <span className="text-lg text-[#2363ed] dark:text-blue-400">Previous Year Questions with Solutions: </span> Access past papers with detailed solutions.</li>
                        <li className="flex items-center"><FaAnchorCircleCheck className="text-2xl mr-2 p-1"/>
                            <span className="text-lg text-[#2363ed] dark:text-blue-400">Question Bank: </span> Extensive collection of questions for thorough practice.</li>
                        <li className="flex items-center"><FaAnchorCircleCheck className="text-2xl mr-2 p-1 "/>
                            <span className="text-lg text-[#2363ed] dark:text-blue-400">Sample Paper Collection:  </span> Practice with expertly crafted sample papers.</li>
                        <li className="flex items-center"><FaAnchorCircleCheck className="text-2xl mr-2 p-1"/>
                            <span className="text-lg text-[#2363ed] dark:text-blue-400"> Books: </span>Recommended textbooks and reference materials.</li>
                        <li className="flex items-center"><FaAnchorCircleCheck className="text-2xl mr-2 p-1"/>
                            <span className="text-xl text-[#2363ed] dark:text-blue-400">One-to-One Mentorship: </span> Personalized guidance and support from experienced mentors.</li>
                    </ul>

                    <p className="text-md font-mono">
                        Join our community and get the support you need to succeed. Together, we can conquer any exam challenge!
                    </p>

                </div>
            </main>
        </>
    )
}