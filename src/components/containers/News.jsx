import React, { useEffect, useState } from 'react'

export default function News() {
const [articles,setArticles] = useState([])
async function getArticles()
{
    const reponse = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=d8cc6639ae4849628b859ef829edbac3");
    const data = await reponse.json();
    setArticles(data)
    useEffect(()=>{getArticles()},[]);
}

    return (
    <div>
        {articles.map((articles)=>{
            return(<div key={articles.id}>
                <h2>{articles.name}</h2>
                <p>{articles.title}</p>
                <p>{articles.description}</p>
                <p>{articles.author}</p>

                </div>)
        })}
    </div>
  )
}
