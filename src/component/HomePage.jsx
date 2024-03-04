import { useState, useEffect } from 'react'
import TechNewsLists from './TechList';
import SearchNewsList from './SearchList';
import FavoriteList from './FavoriteList';

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
        setIsSearchPerformed(false)
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
            <h1 className='topic'>TECH NEWS UPDATE THIS WEEK</h1>

            <div className={`mainCart ${favoriteHiddenClass}`} >
                <button className='cost'
                    onClick={()=>hiddenFavorite()}
                    id='btnCart'>Favorite
                </button>
                <FavoriteList favorites ={favorites} setNewsInFavorite={setNewsInFavorite}/>
            </div>

            <div className='mainListTech'>
                <TechNewsLists apiKeys={apiKeys} 
                    formatStartDate={formatStartDate} 
                    formatEndDate={formatEndDate}
                    news={news}
                    setNews={setNews}
                    favorites={favorites}
                    setNewsInFavorite={setNewsInFavorite}
                />
            </div>

            <div className="searchContainer">
            <label>Category:</label>
            <select className="form-control" name="type-item" id="type-item"
                onChange={(event)=>setSearchCategory(event.target.value)}
                defaultValue={"choose"}
                value={searchCategory}>
                <option value="choose" disabled></option>
                <option value="business">business</option>
                <option value="science">science</option>
                <option value="health">health</option>
                <option value="sports">sports</option>
            </select>
            <button onClick={handleSearch}>search</button>
        </div>

        {isSearchPerformed && (
            <SearchNewsList
                searchCategory={searchCategory}
                searchNews={searchNews}
                setSearchNews={setSearchNews}
                apiKeys={apiKeys}
                formatStartDate={formatStartDate}
                formatEndDate={formatEndDate}
            />
        )}
        </>  
    )
}
export default HomePage;