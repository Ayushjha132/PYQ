import {NextResponse as res} from "next/server";
import {PrismaClient} from "@prisma/client";

export async function GET( request: Request,
                           { params }: { params: { id: string } }) {
    const prisma = new PrismaClient();
    const paperId = parseInt(params.id);

    try {
        const pyqPaper = await prisma.academicPYQPapers.findUnique({
            where: {id: paperId},
        });
        if (pyqPaper) {
            return res.json(pyqPaper);
        } else {
            // @ts-ignore
            return res.status(404).json({ error: 'Paper not found' });
        }

    } catch (error) {
        console.error(error);
        // @ts-ignore
        return res.status(500).json({error: 'Internal Server Error'});
    }
}