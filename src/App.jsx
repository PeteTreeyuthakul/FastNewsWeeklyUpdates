import "./App.css";
import {Routes, Route} from "react-router-dom";
import {useState} from "react";
import HomePage from './component/HomePage';
import DetailNews from './component/DetailNews';
import DetailFavorite from './component/DetailFavorite';

function App() {
  const [searchCategory, setSearchCategory]= useState();
  const [searchNews, setSearchNews]= useState();
  const [favorites,setNewsInFavorite] = useState([]);
  const [news, setNews] = useState();

  const apiKeys = 'API Key';

  let currentDate = new Date();

  let year = currentDate.getFullYear();
  let month = ('0' + (currentDate.getMonth() + 1)).slice(-2); 
  let endDate = ('0' + (currentDate.getDate()-1)).slice(-2);
  let startDate = ('0' + (currentDate.getDate()-1-7)).slice(-2);

  let formatStartDate = year + '-' + month + '-' + startDate;
  let formatEndDate = year + '-' + month + '-' + endDate;

  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomePage apiKeys={apiKeys} 
          formatStartDate={formatStartDate} 
          formatEndDate={formatEndDate}
          searchCategory={searchCategory}
          setSearchCategory={setSearchCategory}
          searchNews={searchNews}
          setSearchNews={setSearchNews}
          news={news}
          setNews={setNews}
          favorites={favorites}
          setNewsInFavorite={setNewsInFavorite}/>}/>

        <Route path="/News/:id" element={<DetailNews news={news}/>}/>
        <Route path="/News/search/:id" element={<DetailNews news={searchNews}/>}/>
        <Route path="/favorites/:id" element={<DetailFavorite favorites={favorites}/>}/>
      </Routes>
    </>
  );
}

export default App;
