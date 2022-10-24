import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../shared/NewsSummary/NewsSummaryCard';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h1>This is home, Total News : {allNews.length}</h1>
            {
                allNews.map(news => <NewsSummaryCard news={news}></NewsSummaryCard>)
            }
        </div>
    );
};

export default Home;