import React from 'react'
import '../../styles/Articles.scss'

interface IArticles {
    articles: Array<ISingleArticle>
}

interface ISingleArticle {
    id: string,
    title: string,
    body: string,
    userId: string
}

function Article(props: IArticles) {

    function articleOnClick(e: React.MouseEvent<HTMLDivElement>, article: ISingleArticle) {
        e.preventDefault()
        console.log(article)
    }

  return (
      <>
      { props.articles.map(article => {
              return (
                  <div key={article.id} className='Article' onClick={(e) => articleOnClick(e, article)}>
                      <h3>{article.title}</h3>
                      <p>{article.body}</p>
                      <p>Идентификатор пользователя: {article.userId}</p>
                      <p>Идентификатор статьи: {article.id}</p>
                  </div>
              )
          })}
      </>
  )
}

export default Article;
