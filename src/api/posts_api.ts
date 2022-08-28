import axios from "axios";
import serverConfig from "./serverData";

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
    await axios.get(`${serverConfig.dev_hostname}/posts/`)
        .then((response: IPosts) => {
            res = response.data;
        });
    return res;
}

export { getAllPosts, IPost };
