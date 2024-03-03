const deleteNewsFromFavorite=(
    favorites, 
    setNewsInFavorite,
    index)=>{

        const arrOne = favorites.slice(0, index);
        const arrTwo = favorites.slice(index + 1);
        setNewsInFavorite([...arrOne, ...arrTwo ])

    }

export default deleteNewsFromFavorite;