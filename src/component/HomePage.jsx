import { useState, useEffect } from 'react'
import TechNewsLists from './TechList';
import SearchNewsList from './SearchList';
import FavoriteList from './FavoriteList';
import PropTypes from 'prop-types';
//import bootstrap from 'bootstrap';

const HomePage=({apiKeys, formatStartDate, formatEndDate,
    searchCategory,setSearchCategory,
    searchNews,setSearchNews,
    news, setNews,
    favorites, setNewsInFavorite}) =>{

    //Search Function

    const [isSearchPerformed, setIsSearchPerformed] = useState(false);

    useEffect(() => {
        setIsSearchPerformed(false);
    }, [searchCategory]);

    const handleSearch = ()=>{
        setIsSearchPerformed(true);
    }

    //Add Favorite

    const [favoriteClassState,favoriteSetClassState] = useState(true);
  
    function hiddenFavorite(){
      favoriteSetClassState(favoriteClassState=>!favoriteClassState)
    }
  
    let favoriteHiddenClass = favoriteClassState ? 'hidden' :'';

    return(
        <>
            <div className='mainHeader'>
                <h1 className='topicHeader'>NEWS WEEKLY UPDATE </h1>
            </div>

            <div className={`mainFavorite`} /*Float*/ >
                <div className='containerFavoriteBtn'>
                    <button className='favoriteBtn'
                        onClick={()=>hiddenFavorite()}>Favorite
                    </button>
                </div>

                <div className={`containerFavoriteList ${favoriteHiddenClass}`}>
                    <FavoriteList favorites ={favorites} setNewsInFavorite={setNewsInFavorite}/>
                </div>
            </div>
            
            <h1 className='topicTech'>TECH UPDATE </h1>

            <div className='containerNewsList' /*row warp*/>
                <TechNewsLists apiKeys={apiKeys} 
                    formatStartDate={formatStartDate} 
                    formatEndDate={formatEndDate}
                    news={news}
                    setNews={setNews}
                    favorites={favorites}
                    setNewsInFavorite={setNewsInFavorite}
                />
            </div>

            <div className="containerSearch">
                <label>Category:</label>
                <select className="searchSelect" name="type-item" id="type-item"
                    onChange={(event)=>setSearchCategory(event.target.value)}
                    defaultValue={"choose"}
                    value={searchCategory}>
                    <option value="choose" disabled></option>
                    <option value="business">business</option>
                    <option value="science">science</option>
                    <option value="health">health</option>
                    <option value="sports">sports</option>
                </select>
                <button className='searchBtn' onClick={handleSearch}>search</button>
            </div>

            <div className='containerNewsList'/*row  warp*/>
                {isSearchPerformed && (
                    <SearchNewsList
                        searchCategory={searchCategory}
                        searchNews={searchNews}
                        setSearchNews={setSearchNews}
                        apiKeys={apiKeys}
                        formatStartDate={formatStartDate}
                        formatEndDate={formatEndDate}
                        favorites={favorites}
                        setNewsInFavorite={setNewsInFavorite}
                    />
                )}
            </div>
        </>  
    )
}

HomePage.propTypes = {
    apiKeys: PropTypes.string.isRequired,
    formatStartDate: PropTypes.string.isRequired,
    formatEndDate: PropTypes.string.isRequired,
    searchCategory: PropTypes.string.isRequired,
    setSearchCategory: PropTypes.func.isRequired,
    searchNews: PropTypes.object,
    setSearchNews: PropTypes.func.isRequired,
    news: PropTypes.object,
    setNews: PropTypes.func.isRequired,
    favorites: PropTypes.array,
    setNewsInFavorite: PropTypes.func.isRequired
  };
  
export default HomePage;