import {useParams } from 'react-router-dom';

function DetailSearchNews({searchNews}) {
  const { id } = useParams();

  return (
    <div>
        <h2 className='topicDetail'>NEWS DETAIL</h2>
        <div className="wordingShipList">
            <img src={searchNews.articles[id].urlToImage}></img>  
        </div>
        <div className="wordingDetailShipList">
            <p>{searchNews.articles[id].title}</p>
        </div>
        <div className="wordingDetailShipList">
            <p>{searchNews.articles[id].content}</p>
        </div>
        <div className="wordingDetailShipList">
            <label>source:</label>
            <p>{searchNews.articles[id].source.name}</p>
        </div>
        <div className="wordingDetailShipList">
        <label>Link:</label>
            <p>{searchNews.articles[id].url}</p>
        </div>
        <div className="wordingShipList">
            <p>{searchNews.articles[id].author}</p>
            <p>{searchNews.articles[id].publishedAt}</p>
        </div>
    </div>
  );
}

export default DetailSearchNews;