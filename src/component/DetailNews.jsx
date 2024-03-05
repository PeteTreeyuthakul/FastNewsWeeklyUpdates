import {useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function DetailNews({news}) {
  const { id } = useParams();

  return (
    <div>
        <h2 className='topicDetail'>NEWS DETAIL</h2>
        <div className="imageDetail">
            <img src={news.articles[id].image} alt="No Image"></img>  
        </div>
        <div className="wordingDetail">
            <p>{news.articles[id].title}</p>
        </div>
        <div className="wordingDetail">
            <p>{news.articles[id].content}</p>
        </div>
        <div className="wordingNameDetail">
            <label>source:</label>
            <p>{news.articles[id].source.name}</p>
        </div>
        <div className="wordingURLDetail">
        <label>Link:</label>
            <p>{news.articles[id].url}</p>
        </div>
        <div className="wordingFootDetail">
            <p>{news.articles[id].author}</p>
            <p>{news.articles[id].publishedAt}</p>
        </div>
    </div>
  );
}

DetailNews.prototype ={
    news: PropTypes.objectOf(
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
    ).isRequired,
}

export default DetailNews;