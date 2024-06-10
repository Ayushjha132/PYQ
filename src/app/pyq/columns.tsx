"use client"

import { ColumnDef } from "@tanstack/react-table"

export type PYQPaper = {
    id: number
    examCategory: string
    degreeType  : string
    courseName  : string
    subjectName : string
    paperYear   : string
    url         : string
    alternateUrl: string
    driveUrl    : string
    institueName: string
}

export const columns: ColumnDef<PYQPaper>[] = [

    {
        accessorKey: "subjectName",
        header: "Subject",
    },
    {
        accessorKey: "paperYear",
        header: "Exam Year",
    },
    {
        accessorKey: "courseName",
        header: "Course Name",
    },
    {
        accessorKey: "institueName",
        header: "Institute Name",
    },

]
