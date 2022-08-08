import React from 'react'
import '../../styles/Articles.css'

function Article(props) {

    function articleOnClick(e, article) {
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
