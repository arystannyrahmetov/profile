import React, {useEffect} from 'react';
import TopMenu from "../TopMenu";
import Article from "./Article";
import '../../styles/Articles.css';

function Articles() {

    const [articles, setArticles] = React.useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setArticles(json))
    }, [articles]);

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