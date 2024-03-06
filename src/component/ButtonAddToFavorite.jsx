import addNewsToFavorite from "./AddNewsToFavorite"
import PropTypes from 'prop-types';

const ButtonAdd =({subNews, news, index, 
    favorites,setNewsInFavorite})=>{

    let inFavorite = false;

    if(favorites.length === 0){
        return(
            <div className="boxAdd">
                <button onClick={()=>addNewsToFavorite(
                favorites, 
                setNewsInFavorite,
                news,
                index)}>Add To Favorites List</button>
            </div>
        )
    }else{
        for(let i=0;i<favorites.length;i++ ){
            if(subNews.title === favorites[i].title){
                inFavorite = true;
                return(
                    <div className="boxAdd">
                        <p>Added</p>
                    </div>
                )
            }
        }
    }

    if(inFavorite===false){
        return(
            <div className="boxAdd">
                <button onClick={()=>addNewsToFavorite(
                favorites, 
                setNewsInFavorite,
                news,
                index)}>Add To Favorites List</button>
            </div>

        )
    }

}

ButtonAdd.propTypes = {
    subNews: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        publishedAt: PropTypes.string.isRequired,
        source: PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    }).isRequired,
    
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
    }),
    index: PropTypes.number.isRequired,
    favorites: PropTypes.array.isRequired,
    setNewsInFavorite: PropTypes.func.isRequired
};

export default ButtonAdd;