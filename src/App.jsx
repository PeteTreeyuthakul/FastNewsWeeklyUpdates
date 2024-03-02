import "./App.css";
import {Routes, Route} from "react-router-dom";
import {useState} from "react";
import HomePage from './component/HomePage';
import DetailNews from './component/DetailNews';

function App() {
  const [news, setNews] = useState();

  const apiKeys = "37e25ceca4504772b0012e11ddd81a33";

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
          news={news}
          setNews={setNews}/>}/>
        <Route path="/News/:id" element={<DetailNews news={news}/>}/>
      </Routes>
    </>
  );
}

export default App;
