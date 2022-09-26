import React from 'react'
import Article from './Article'
import blogData from '../data/blog'


function ArticleList(props){
    const articleList = blogData.posts.map(article => {
        console.log("article: ", article)
        return <Article key={props.id}
         title={props.title}
          preview={props.preview} date={props.date}/>
    })

    console.log("article list: ", articleList)

    return (
        <main>
            {articleList}
        </main>
    )
}

export default ArticleList



