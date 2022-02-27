import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getPost = async (req, res) => {
    await prisma.$connect();
    const post = await prisma.post.findMany();
    res.json(post);
};

export default getPost;