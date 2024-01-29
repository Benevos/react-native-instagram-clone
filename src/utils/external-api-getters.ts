import { DummyJsonUsers } from "../types/dummyJson.Users";
import { DummyJsonComments } from "../types/dummyJsonComments";
import { DummyJsonPosts } from "../types/dummyJsonPosts";
import getRandomNumber from "./get-random-number";


export const getDummyJsonPosts = async (postNumber: number) => 
    {
        const totalPosts = 150;

        const skip = getRandomNumber(0, totalPosts - postNumber);
        const limit = getRandomNumber(skip, skip + postNumber);

        const res = await fetch(`https://dummyjson.com/posts?skip=${skip}&limit=${limit}`);
        const data: DummyJsonPosts = await res.json();

        return data
    }

export const getDummyJsonComments = async () => 
{
    const totalComments = 100;

    const skip = getRandomNumber(0, totalComments);
    const limit = getRandomNumber(skip, totalComments);

    const res = await fetch(`https://dummyjson.com/comments?skip=${skip}&limit=${limit}`);
    const data: DummyJsonComments = await res.json();

    return data;
}

export const getDummyJsonUsers = async (postNumber: number) => 
{
    const totalUsers = 100;
    const skip = getRandomNumber(0, totalUsers - postNumber);
    const limit = getRandomNumber(skip, skip + postNumber);

    const res = await fetch(`https://dummyjson.com/users?skip=${skip}&limit=${limit}`);
    const data: DummyJsonUsers = await res.json();

    return data;
}

export const getLoremPicusmImageUri = async () => {
    const imageNumber = getRandomNumber(2, 4);
    const imagesUri = [...Array(imageNumber).keys()].map((key, index) =>
        `https://picsum.photos/300/300/?random&t="${new Date().getTime()}"`
    )
    return imagesUri;
}