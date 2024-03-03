import { useState } from 'react'
import TechNewsLists from './TechList';
import SearchNewsList from './SearchList';

const HomePage=({apiKeys, formatStartDate, formatEndDate,
    searchCategory,setSearchCategory,
    searchNews,setSearchNews,
    news, setNews}) =>{

    //Search Function

    const [isSearchPerformed, setIsSearchPerformed] = useState(false);
    console.log(searchNews)

    const handleSearch = ()=>{
        setIsSearchPerformed(true);
}

    return(
        <>
            <h1 className='topic'>TECH NEWS UPDATE THIS WEEK</h1>

            <div className='mainListTech'>
                <TechNewsLists apiKeys={apiKeys} 
                    formatStartDate={formatStartDate} 
                    formatEndDate={formatEndDate}
                    news={news}
                    setNews={setNews}/>
            </div>

            <div className="searchContainer">
            <label>Category:</label>
            <select class="form-control" name="type-item" id="type-item"
                onChange={(event)=>setSearchCategory(event.target.value)}
                value={searchCategory}>
                <option value="choose" selected="selected" disabled>
                Choose one
                </option>
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