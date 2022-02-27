import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) =>{
    await prisma.$connect();
    let { body = {} } = req;
    body = JSON.parse(body);
    const post = await prisma.post.findUnique({
        where: body
    });
    res.status(200).json(post);
}