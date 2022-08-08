import React from 'react';
import TopMenu from "../TopMenu";
import Article from "./Article";
import '../../styles/Articles.css';

function Articles() {
    return (
        <div className="Articles">
            <TopMenu/>
            <div className="Articles-content">
                <h1>Статьи</h1>
                <Article/>
            </div>
        </div>
    );
}

export default Articles;