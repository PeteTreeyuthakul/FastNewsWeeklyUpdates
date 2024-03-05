import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import ButtonAdd from "./ButtonAddToFavorite";
import PropTypes from 'prop-types';


const SearchNewsLists=({searchCategory,
  searchNews,setSearchNews,
  apiKeys,formatStartDate,formatEndDate,
  favorites, setNewsInFavorite}) =>{

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  console.log(searchCategory)

  useEffect(() => {
    fetch(`https://gnews.io/api/v4/top-headlines?category=${searchCategory}&country=us&from=${formatStartDate}&to=${formatEndDate}&apikey=${apiKeys}`)

      .then((response) => response.json())
      .then(
        (data) => {
          setSearchNews(data);
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
        searchNews.articles.map((subNews,index) => {
            return(
            <>     
              <ul>
                <li className="newsList" key={index}>
                  <Link to ={`News/search/${index}`}>
                    <div className="mainNewsList"/*row*/>
                      <div className="boxImageNewsList">
                          <img src={subNews.image} alt="No Image"></img>  
                      </div>
                      <div className="boxWordingNewsList"/*column*/>
                        <div className="wordingNewsList">
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
                    <ButtonAdd subNews={subNews} news={searchNews} 
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

SearchNewsLists.propTypes = {
  searchCategory: PropTypes.string.isRequired,
  searchNews: PropTypes.objectOf(
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
  setSearchNews: PropTypes.func.isRequired,
  apiKeys: PropTypes.string.isRequired,
  formatStartDate: PropTypes.string.isRequired,
  formatEndDate: PropTypes.string.isRequired,
  favorites: PropTypes.array,
  setNewsInFavorite: PropTypes.func.isRequired
};

export default SearchNewsLists;