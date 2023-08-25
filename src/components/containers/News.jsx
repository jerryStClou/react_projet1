import React, { useEffect, useState } from 'react'

export default function News() {
const [data,setData] = useState({})
async function getArticles()
{
    const reponse = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=d8cc6639ae4849628b859ef829edbac3");
    const data = await reponse.json();
    setData(data);
}
useEffect( () => {
    getArticles();
}, []);

    return (
    <div>
    {data.articles?.map((article)=>{
        return(
          <div key={article.url}>
            <h2>{article.title}</h2>
            <img src={article.urlToImage} style={{width:"50%"}} />
            <p>{article.content}</p>
            </div>
        );
        })}
            </div>
  )
}
