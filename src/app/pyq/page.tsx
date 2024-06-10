'use client'

import {DataTable} from "@/app/pyq/data-table";
import {useEffect, useState} from "react";
import {fetchData} from "@/utils/api";
import {columns} from "@/app/pyq/columns";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


export default function PYQ() {
    const [papers, setPapers] = useState([]);

    const [filters, setFilters] = useState({
        paperYear: '',
        institueName: '',
        courseName: '',
        subjectName: '',
        degreeType: ''
    });

    useEffect(() => {
        // Fetch all papers initially
        fetchPapers({});
    }, []);

    const fetchPapers = async (filterParams: string | string[][] | Record<string, string> | URLSearchParams | undefined) => {
        const query = new URLSearchParams(filterParams).toString();
        try {
            const response = await fetchData(`/api/v1/pyq?${query}`);
            console.log(response);
            setPapers(response);
        } catch (error) {
            console.error('Error fetching papers:', error);
        }
    };

    return (
        <>
            <div className="w-full max-w-7xl mx-auto pt-16">
                <div className="px-8 pt-5">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator/>
                            <BreadcrumbItem>
                                <BreadcrumbPage>PYQ Papers</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="flex flex-col space-y-2 px-8 pt-5">
                    <p className="text-2xl ">Previous Year Question Papers</p>
                    <p className="text-md">Select or filter question papers based on your requirement.</p>
                </div>
                <div className="container mx-auto py-10">
                    <DataTable columns={columns} data={papers}/>
                </div>
            </div>
        </>
    )
}