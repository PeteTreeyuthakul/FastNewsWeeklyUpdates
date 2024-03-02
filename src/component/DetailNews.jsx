import {useParams } from 'react-router-dom';

function DetailNews({news}) {
  const { id } = useParams();

  return (
    <div>
        <h2 className='topicDetail'>NEWS DETAIL</h2>
        <div className="wordingShipList">
            <img src={news.articles[id].urlToImage}></img>  
        </div>
        <div className="wordingDetailShipList">
            <p>{news.articles[id].title}</p>
        </div>
        <div className="wordingDetailShipList">
            <p>{news.articles[id].content}</p>
        </div>
        <div className="wordingDetailShipList">
            <label>source:</label>
            <p>{news.articles[id].source.name}</p>
        </div>
        <div className="wordingDetailShipList">
        <label>Link:</label>
            <p>{news.articles[id].url}</p>
        </div>
        <div className="wordingShipList">
            <p>{news.articles[id].author}</p>
            <p>{news.articles[id].publishedAt}</p>
        </div>
    </div>
  );
}

export default DetailNews;