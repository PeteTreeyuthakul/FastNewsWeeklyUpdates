import PropTypes from "prop-types";
import deleteNewsInFavorite from './DeleteNewsFromFavorite.jsx'
import {Link} from "react-router-dom";

const FavoriteList= ({favorites,setNewsInFavorite}) =>{
    if( favorites!== ""){
        return(
            favorites.map((subFavorite,index)=>{
    
                return(
                    <li key={index} className="liCart">
                        <Link to ={`favorites/${index}`}>
                            <div className="containerShip">
                                <div className="wordingShipList">
                                    <img src={subFavorite.urlToImage}></img>  
                                </div>
                                <div className="wordingShipList">
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

/*
FavoriteList.protoTypes ={
    items:PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    setItemInCart: PropTypes.func.isRequired,
    addItemToCart: PropTypes.func.isRequired,
}
*/

export default FavoriteList;