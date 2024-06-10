'use client'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {fetchData} from "@/utils/api";
import {useEffect, useState} from "react";

interface Paper {
    id: number;
    paperYear: string;
    institueName: string;
    courseName: string;
    subjectName: string;
    degreeType: string;
    url?: string;
    alternateUrl?: string;
    driveUrl?: string;
    createdAt: string;
}

export default function Page({params}: { params: { id: string } }) {
    const [paper, setPaper] = useState<Paper | null>(null);
    let paperId = params.id;
    const fetchPaper = async () => {
        try {
            const response = await fetchData(`/api/v1/pyq/${paperId}`);
            setPaper(response);
            console.log(paper);
        } catch (error) {
            console.error('Error fetching papers:', error);
        }
    };

    useEffect(() => {
        fetchPaper();
    }, []);

    function toTitleCase(str: string | undefined) {
        return str?.split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(' ');
    }

    return (
        <div className="w-full max-w-7xl mx-auto pt-16">
            <div className="px-8 pt-5">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator/>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/pyq">PYQ</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator/>
                        <BreadcrumbItem>
                            <BreadcrumbPage>PYQ Papers</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="md:px-48 md:pt-10 pt-5 px-8">
                <div className="flex flex-col space-y-2 ">
                    <p className="text-xs md:text-base max-w-fit px-3 py-1 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">🎓 {toTitleCase(paper?.degreeType)}</p>
                    <p className="text-base md:text-lg font-mono">{toTitleCase(paper?.institueName)}</p>
                    <p className="text-base md:text-lg font-mono"> {toTitleCase(paper?.courseName)}</p>
                    <div className="flex space-x-4 justify-between py-4">
                        <p className="text-lg md:text-xl lg:text-2xl">Subject: {paper?.subjectName}</p>
                        <p className="text-lg md:text-xl lg:text-2xl">Paper Year: {paper?.paperYear}</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <iframe className="w-[32rem] h-[40rem] md:w-[50rem] md:h-[70rem]"
                            src={`${paper?.url}#toolbar=0`}
                            // @ts-ignore
                            type="application/pdf">
                    </iframe>
                </div>
            </div>
        </div>
    )
}
