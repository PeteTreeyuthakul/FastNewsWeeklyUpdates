import TechNewsLists from './TechList';

const HomePage=({apiKeys, formatStartDate, formatEndDate,
    news, setNews}) =>{

    return(
        <>
            <h1 className='topic'>TECH NEWS UPDATE THIS WEEK</h1>

            <div className='mainListTech'>
                <TechNewsLists apiKeys={apiKeys} 
                    formatStartDate={formatStartDate} 
                    formatEndDate={formatEndDate}
                    news={news}
                    setNews={setNews}/>
            </div>
        </>  
    )
}
export default HomePage;