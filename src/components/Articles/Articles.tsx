import React, {useEffect} from 'react';
import TopMenu from "../TopMenu";
import Article from "./Article";
import '../../styles/Articles.scss';
import {getAllPosts, IPost} from "../../api/posts_api";

function Articles() {

    const [articles, setArticles] = React.useState<Array<IPost>|[]>([]);

    useEffect(() => {
        getAllPosts().then(res => {
            setArticles(res);
        });
    }, []);

    return (
        <div className="Articles">
            <TopMenu/>
            <div className="Articles-content">
                <h1>Статьи</h1>
                <Article articles={articles}/>
            </div>
        </div>
    );
}

export default Articles;