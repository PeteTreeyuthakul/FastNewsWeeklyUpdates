import PropTypes from 'prop-types';

const addNewsToFavorite=(
    favorites, 
    setNewsInFavorite,
    news,
    index)=>{
        const updateNewsInList = [news.articles[index]];
        setNewsInFavorite([...favorites,...updateNewsInList]);
    }

addNewsToFavorite.propTypes = {
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
    setNewsInFavorite: PropTypes.func.isRequired,
    news: PropTypes.shape({
        totalArticles : PropTypes.number,
        articles: PropTypes.arrayOf(
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
    }).isRequired,
    index: PropTypes.number.isRequired
};

export default addNewsToFavorite;