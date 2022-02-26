import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const addPost = async (req, res) => {
    const { title, body } = req.body;
    await prisma.$connect();
    const numberOfPosts = await prisma.post.count();
    const post = await prisma.post.create({
        data: {
            title,
            body,
            id: (numberOfPosts + 1).toString()
        }
    });
    res.json(post);
};

export default addPost;