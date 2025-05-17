import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

const NewsBoard = ({category}) => {
    const [articles ,setArticle] = useState([])
    useEffect(() => {
        let url =`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
        fetch(url)
        .then(responce=> responce.json())
        .then(data=>setArticle(data.articles))  
    },[category])
    return (
        <div>
            <h2 className='text-center mt-2'>Latest <span className='badge bg-danger m-2'>News</span>in {category.toUpperCase()} Category</h2>
            <h3 className='text-center mt-2'><span className='badge text-bg-info'></span></h3>
            {articles.map((news,index)=>{                
                return <NewsItem key={index} title={news.title} description={news.description} url={news.url} src={news.urlToImage}/>
            })}
        </div>
    )
}

export default NewsBoard
