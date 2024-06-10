import {NextResponse as res} from "next/server";
import {PrismaClient} from "@prisma/client";


export const GET = async () => {

    const prisma = new PrismaClient();


    // this is part of post and in current it doesn't require.
    // const { paperYear, institueName, courseName, subjectName, degreeType } = request.query;
    //
    // // Build the filter object dynamically
    // let filter = {};
    // if (paperYear) filter.paperYear = paperYear;
    // if (institueName) filter.institueName = institueName;
    // if (courseName) filter.courseName = courseName;
    // if (subjectName) filter.subjectName = subjectName;
    // if (degreeType) filter.degreeType = degreeType;
    //
    try {
        const pyqList = await prisma.academicPYQPapers.findMany({});
        return res.json(pyqList);
    } catch (error) {
        console.error(error);
        //@ts-ignore
        res.status(500).json({error: 'Internal Server Error'});
    }

}