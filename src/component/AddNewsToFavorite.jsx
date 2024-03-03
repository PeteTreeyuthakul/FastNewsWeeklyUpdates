const addNewsToFavorite=(
    favorites, 
    setNewsInFavorite,
    news,
    index)=>{

        const updateNewsInList = [news.articles[index]];
        setNewsInFavorite([...favorites,...updateNewsInList])

    }

export default addNewsToFavorite;