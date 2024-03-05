import PropTypes from "prop-types";
import deleteNewsInFavorite from './DeleteNewsFromFavorite.jsx'
import {Link} from "react-router-dom";

const FavoriteList= ({favorites,setNewsInFavorite}) =>{
    if( favorites!== ""){
        return(
            favorites.map((subFavorite,index)=>{
                return(
                    <li key={index} className="favoriteList">
                        <Link to ={`favorites/${index}`}>
                            <div className="containerFavList">
                                <div className="imageFavList">
                                    <img src={subFavorite.urlToImage} alt="No Image"></img>  
                                </div>
                                <div className="wordingFavList">
                                    <p>{subFavorite.title}</p>
                                </div>
                            </div> 
                        </Link>
                        <div>
                            <button className ='btnDelete' onClick={()=>deleteNewsInFavorite(
                                favorites, 
                                setNewsInFavorite,
                                index)}>Delete
                            </button>
                        </div> 
                    </li>           
                )
            })
    
        )
    }    
}

FavoriteList.propTypes = {
    favorites: PropTypes.arrayOf(
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
    setNewsInFavorite: PropTypes.func.isRequired
};

export default FavoriteList;