import React from 'react'
import '../../styles/Articles.scss'
import {IPost} from "../../api/posts_api";


interface IArticles {
    articles: Array<IPost>
}

function Article(props: IArticles) {

    function articleOnClick(e: React.MouseEvent<HTMLDivElement>, article: IPost) {
        e.preventDefault()
        console.log(article)
    }

    return (
        <>
            { props.articles.map(article => {
                console.log(article._id);
                return (
                      <div key={article._id} className='Article' onClick={(e) => articleOnClick(e, article)}>
                          <h3>{article.title}</h3>
                          <p>{article.postText}</p>
                          <p>Автор: {article.author}</p>
                          <p>Дата: {article.date.toString()}</p>
                      </div>
                  )
            })}
        </>
    )
}

export default Article;
