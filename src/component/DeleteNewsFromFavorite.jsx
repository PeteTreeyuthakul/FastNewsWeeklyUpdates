import PropTypes from 'prop-types';

const deleteNewsFromFavorite=(
    favorites, 
    setNewsInFavorite,
    index)=>{

        const arrOne = favorites.slice(0, index);
        const arrTwo = favorites.slice(index + 1);
        setNewsInFavorite([...arrOne, ...arrTwo ])

    }
    deleteNewsFromFavorite.propTypes = {
        favorites: PropTypes.array.isRequired,
        setNewsInFavorite: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired
    };

export default deleteNewsFromFavorite;