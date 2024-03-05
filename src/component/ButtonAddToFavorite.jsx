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
    subNews: PropTypes.objectOf(
        PropTypes.shape({
          title: PropTypes.string,
        }),
      ).isRequired,
    news: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    favorites: PropTypes.array,
    setNewsInFavorite: PropTypes.func.isRequired
};

export default ButtonAdd;