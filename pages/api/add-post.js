import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

const addPost = async (req, res) => {
    const { title, body } = req.body;
    await prisma.$connect();
    const numberOfPosts = await prisma.post.count();
    const post = await prisma.post.create({
        data: {
            title,
            body,
            id: uuidv4()
        }
    });
    res.json(post);
};

export default addPost;