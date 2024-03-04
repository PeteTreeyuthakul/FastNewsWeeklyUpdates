import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import ButtonAdd from "./ButtonAddToFavorite";

const TechNewsLists=({apiKeys,formatStartDate,formatEndDate,
  news, setNews,
  favorites, setNewsInFavorite}) =>{

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);


  useEffect(() => {
    fetch(`https://gnews.io/api/v4/top-headlines?category=technology&country=us&from=${formatStartDate}&to=${formatEndDate}&apikey=${apiKeys}`)

      .then((response) => response.json())
      .then(
        (data) => {
          setNews(data);
          setIsLoading(false);
        },
        (error) => {
          console.log(error);
          setIsLoading(false);
          setHasError(true);
        },
      );
    },[]
  );

  if (hasError) {
    return <h1>Error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  console.log(news);
  return(
    news.articles.map((subNews,index) => {
      return(
        <>     
          <ul>
            <li className="listShip" key={index}>
                <Link to ={`News/${index}`}>
                  <div className="containerShip">
                    <div className="wordingShipList">
                        <img src={subNews.urlToImage}></img>  
                    </div>
                    <div className="wordingShipList">
                        <p>{subNews.title}</p>
                    </div>
                    <div className="wordingShipList">
                        <p>{subNews.description}</p>
                    </div>
                    <div className="wordingShipList">
                        <p>{subNews.source.name}</p>
                        <p>{subNews.publishedAt}</p>
                    </div>
                  </div>
                </Link>
                <ButtonAdd subNews={subNews} news={news} 
                  index={index} 
                  favorites={favorites} setNewsInFavorite={setNewsInFavorite}
                />   
            </li>    
          </ul>
        </>
      )
    })
  )
}

export default TechNewsLists;