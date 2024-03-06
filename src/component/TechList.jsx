import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import ButtonAdd from "./ButtonAddToFavorite";
import PropTypes from 'prop-types';

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

  return(
    news.articles.map((subNews,index) => {
      return(
        <>     
          <ul>
            <li className="newsList" key={index}>
                <Link className="newsListLink" to ={`News/${index}`}>
                  <div className="mainNewsList"/*row*/>
                    <div className="boxImageNewsList">
                        <img src={subNews.image} alt="No Image"></img>  
                    </div>
                    <div className="boxWordingNewsList"/*column*/>
                      <div className="wordingTitleNewsList">
                          <p>{subNews.title}</p>
                      </div>
                      <div className="wordingNewsList">
                          <p>{subNews.description}</p>
                      </div>
                      <div className="wordingFootNewsList">
                          <p>{subNews.source.name}</p>
                          <p>{subNews.publishedAt}</p>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="boxAddBtn">
                  <ButtonAdd subNews={subNews} news={news} 
                    index={index} 
                    favorites={favorites} setNewsInFavorite={setNewsInFavorite}
                  />  
                </div>
            </li>    
          </ul>
        </>
      )
    })
  )
}

TechNewsLists.propTypes = {
  apiKeys: PropTypes.string.isRequired,
  formatStartDate: PropTypes.string.isRequired,
  formatEndDate: PropTypes.string.isRequired,
  news: PropTypes.objectOf(
    PropTypes.shape({
        totalArticles : PropTypes.number,
        articles: PropTypes.arrayOf(
            PropTypes.shape({
                image:PropTypes.string,
                title:PropTypes.string,
                content:PropTypes.string,
                url:PropTypes.string,
                author:PropTypes.string,
                publishedAt:PropTypes.string,
                source:PropTypes.objectOf({
                  name: PropTypes.string,
                })
            })
        ),
    }),
  ),
  setNews: PropTypes.func.isRequired,
  favorites: PropTypes.array,
  setNewsInFavorite: PropTypes.func.isRequired
};

export default TechNewsLists;