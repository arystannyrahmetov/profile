import axios from "axios";

interface IPosts {
    data: [IPost]|[];
}

interface IPost {
    _id: number,
    title: string,
    postText: string,
    author: string,
    date: typeof Date
}

async function getAllPosts(): Promise<Array<IPost> | []> {
    let res: Array<IPost> | [] = [];
    await axios.get('https://021e-95-56-55-102.eu.ngrok.io/posts/')
        .then((response: IPosts) => {
            res = response.data;
        });
    return res;
}

export { getAllPosts, IPost };
