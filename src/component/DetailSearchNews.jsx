import {useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function DetailSearchNews({searchNews}) {
  const { id } = useParams();

  return (
    <div>
        <h2 className='topicDetail'>NEWS DETAIL</h2>
        <div className="wordingDetail">
            <p>{searchNews.articles[id].title}</p>
        </div>
        <div className="imageDetail">
            <img src={searchNews.articles[id].image} alt="No Image"></img>  
        </div>
        <div className="wordingDetail">
            <p>{searchNews.articles[id].content}</p>
        </div>
        <div className="wordingNameDetail">
            <label>source:</label>
            <p>{searchNews.articles[id].source.name}</p>
        </div>
        <div className="wordingURLDetail">
        <label>Link:</label>
            <p>{searchNews.articles[id].url}</p>
        </div>
        <div className="wordingFootDetail">
            <p>{searchNews.articles[id].author}</p>
            <p>{searchNews.articles[id].publishedAt}</p>
        </div>
    </div>
  );
}

DetailSearchNews.propType ={
    searchNews: PropTypes.objectOf(
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
    ),
}

export default DetailSearchNews;