import { useEffect, useState } from "react";
import {Link} from "react-router-dom";


const SearchNewsLists=({searchCategory,
  searchNews,setSearchNews,
  apiKeys,formatStartDate,formatEndDate}) =>{

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