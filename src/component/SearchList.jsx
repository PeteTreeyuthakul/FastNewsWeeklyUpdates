import { useEffect, useState } from "react";
import {Link} from "react-router-dom";


const SearchNewsLists=({searchCategory,
  searchNews,setSearchNews,
  apiKeys,formatStartDate,formatEndDate}) =>{

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${searchCategory}&from=${formatStartDate}&to=${formatEndDate}&sortBy=publishedAt&apiKey=${apiKeys}&pageSize=30`)

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
    }, []);

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
                <li className="listShip" key={index}>
                    <Link to ={`News/search/${index}`}>
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
                    
                </li>    
                </ul>
            </>
            )
        })
    )
}

export default SearchNewsLists;