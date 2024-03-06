import {useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function DetailFavorite({favorites}) {
  const { id } = useParams();

  return (
    <div>
        <h2 className='topicDetail'>NEWS DETAIL</h2>
        <div className="wordingDetail">
            <p>{favorites[id].title}</p>
        </div>
        <div className="imageDetail">
            <img src={favorites[id].image} alt="No Image"></img>  
        </div>
        <div className="wordingDetail">
            <p>{favorites[id].content}</p>
        </div>
        <div className="wordingNameDetail">
            <label>source:</label>
            <p>{favorites[id].source.name}</p>
        </div>
        <div className="wordingURLDetail">
        <label>Link:</label>
            <p>{favorites[id].url}</p>
        </div>
        <div className="wordingFootDetail">
            <p>{favorites[id].author}</p>
            <p>{favorites[id].publishedAt}</p>
        </div>
    </div>
  );
}

DetailFavorite.propType ={
    favorites: PropTypes.arrayOf(
        PropTypes.shape({
            image:PropTypes.string,
            title:PropTypes.string,
            content:PropTypes.string,
            url:PropTypes.string,
            author:PropTypes.string,
            publishedAt:PropTypes.string,
            source:PropTypes.shape({
                name: PropTypes.string,
                url: PropTypes.string,
            })
        })
    ),
}

export default DetailFavorite;