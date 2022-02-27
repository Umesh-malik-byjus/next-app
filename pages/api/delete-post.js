import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {
    await prisma.$connect();
    let { body = {} } = req;
    const post = await prisma.post.delete({
        where: body
    });
    res.status(200).json(post);
}