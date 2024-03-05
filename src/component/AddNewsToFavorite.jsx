import PropTypes from 'prop-types';

const addNewsToFavorite=(
    favorites, 
    setNewsInFavorite,
    news,
    index)=>{

        const updateNewsInList = [news.articles[index]];
        setNewsInFavorite([...favorites,...updateNewsInList])

    }

addNewsToFavorite.propTypes = {
    favorites: PropTypes.array,
    setNewsInFavorite: PropTypes.func.isRequired,
    news: PropTypes.objectOf(
        PropTypes.shape({
            articles:PropTypes.array
        })
    ).isRequired,
    index: PropTypes.number.isRequired
};

export default addNewsToFavorite;